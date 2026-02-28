import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "@/auth";

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("session")?.value;
  const isOnAdminPanel = request.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  let decryptedSession = null;
  if (sessionCookie) {
    try {
      decryptedSession = await decrypt(sessionCookie);
    } catch {
      // Invalid session
    }
  }

  const isLoggedIn = !!decryptedSession;

  if (isOnAdminPanel && !isLoginPage) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
