import { getSession } from "@/lib/auth_core";
import dbConnect from "@/lib/db";
import Session from "@/models/Session";

/**
 * Validates the session against the database.
 * This is only for Node.js environments (Server Components/Actions).
 */
export async function verifySession() {
  const payload = await getSession();
  if (!payload) return null;

  try {
    // Phase 4: Database-backed session validation
    if (payload.sessionId && typeof payload.sessionId === "string") {
      await dbConnect();
      const dbSession = await Session.findById(payload.sessionId);
      if (!dbSession || !dbSession.isValid) {
        return null; // Revoked or invalid session
      }
    }
    
    return payload;
  } catch (error) {
    console.error("Session verification error:", error);
    return null;
  }
}
