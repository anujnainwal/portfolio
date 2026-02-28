"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { encrypt } from "@/auth";
import { LRUCache } from "lru-cache";
import bcrypt from "bcryptjs";

// Rate limiting: max 5 attempts per 15 minutes per email
const rateLimit = new LRUCache<string, number>({
  max: 500, // Maximum number of emails to track
  ttl: 15 * 60 * 1000, // 15 minutes
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email")?.toString().trim().toLowerCase() || "";
  const password = formData.get("password")?.toString() || "";
  const recaptchaToken = formData.get("g-recaptcha-response")?.toString();

  if (!email || !password) {
    return { error: "Please enter both email and password." };
  }

  if (!recaptchaToken) {
    return { error: "Please complete the reCAPTCHA verification." };
  }

  // Verify reCAPTCHA token with Google
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (!recaptchaSecret) {
    console.error("RECAPTCHA_SECRET_KEY is not defined in environment variables");
    return { error: "Server configuration error. Please try again later." };
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
      return { error: "reCAPTCHA verification failed. Please try again." };
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return { error: "Error verifying security check. Please try again." };
  }

  // Check rate limit
  const attempts = rateLimit.get(email) || 0;
  if (attempts >= 5) {
    return { error: "Too many login attempts. Please try again in 15 minutes." };
  }

  const validEmail = process.env.ADMIN_EMAIL?.toLowerCase();
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!validEmail || !adminPasswordHash) {
    console.error("ADMIN_EMAIL or ADMIN_PASSWORD_HASH is not defined");
    return { error: "Server configuration error. Please try again later." };
  }

  const isPasswordValid = await bcrypt.compare(password, adminPasswordHash);

  if (email === validEmail && isPasswordValid) {
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    const sessionToken = await encrypt({ email, expires });

    const cookieStore = await cookies();
    cookieStore.set("session", sessionToken, {
      expires,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    // Clear rate limit on success
    rateLimit.delete(email);

    redirect("/admin");
  }

  // Increment rate limit on failure
  rateLimit.set(email, attempts + 1);

  return { error: "Invalid credentials." };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
