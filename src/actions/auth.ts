"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { encrypt, decrypt } from "@/lib/auth_core";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/db";
import RateLimit from "@/models/RateLimit";
import Session from "@/models/Session";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(prevState: any, formData: FormData) {
  // React 19 / Next 15 often prefixes FormData keys (e.g., "1_email", "2_password")
  let email = "";
  let password = "";
  let recaptchaToken = "";

  for (const [key, value] of formData.entries()) {
    if (key.includes("email")) email = value.toString().trim().toLowerCase();
    if (key.includes("password")) password = value.toString();
    if (key.includes("recaptcha-response")) recaptchaToken = value.toString();
  }



  if (!email || !password) {
    return { error: "Please enter both email and password.", time: Date.now() };
  }

  if (!recaptchaToken) {
    return { error: "Please complete the reCAPTCHA verification.", time: Date.now() };
  }

  // Verify reCAPTCHA token with Google
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (!recaptchaSecret) {
    console.error("RECAPTCHA_SECRET_KEY is not defined in environment variables");
    return { error: "Server configuration error. Please try again later.", time: Date.now() };
  }

  try {
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    });
    
    const recaptchaData = await verifyRes.json();
    
    if (!recaptchaData.success) {
      return { error: "reCAPTCHA verification failed. Please try again.", time: Date.now() };
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return { error: "Error verifying security check. Please try again.", time: Date.now() };
  }

  // Check rate limit via MongoDB
  await dbConnect();
  const rateData = await RateLimit.findOne({ identifier: email });
  const attempts = rateData ? rateData.attempts : 0;
  
  if (attempts >= 5) {
    return { error: "Too many login attempts. Please try again in 1 hour.", time: Date.now() };
  }

  const validEmail = process.env.ADMIN_EMAIL?.toLowerCase();
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!validEmail || !adminPasswordHash) {
    console.error("ADMIN_EMAIL or ADMIN_PASSWORD_HASH is not defined");
    return { error: "Server configuration error. Please try again later.", time: Date.now() };
  }

  const isPasswordValid = await bcrypt.compare(password, adminPasswordHash);



  if (email === validEmail && isPasswordValid) {
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    
    // Create session in MongoDB
    await dbConnect();
    const dbSession = await Session.create({
      userId: email,
      expiresAt: expires,
    });

    const sessionToken = await encrypt({ 
      email, 
      expires,
      sessionId: (dbSession._id as any).toString() 
    });

    const cookieStore = await cookies();
    cookieStore.set("session", sessionToken, {
      expires,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    // Clear rate limit on success
    await RateLimit.deleteOne({ identifier: email });

    redirect("/admin");
  }

  // Increment rate limit on failure
  await RateLimit.findOneAndUpdate(
    { identifier: email },
    { 
      $inc: { attempts: 1 },
      $set: { lastAttempt: new Date() }
    },
    { upsert: true }
  );

  return { error: "Invalid credentials.", time: Date.now() };
}

export async function logout() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  
  if (session) {
    try {
      const payload = await decrypt(session);
      if (payload?.sessionId) {
        await dbConnect();
        await Session.findByIdAndDelete(payload.sessionId);
      }
    } catch (error) {
      console.error("Error during logout session cleanup:", error);
    }
  }
  
  cookieStore.delete("session");
}
