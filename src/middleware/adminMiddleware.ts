
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("adminToken")?.value;
  const isAdminLoginPage = request.nextUrl.pathname === "/admin-login";

  // If the user is already authenticated, let them proceed
  if (token) {
    return NextResponse.next();
  }

  // If not authenticated and not already on the login page, redirect to /admin-login
  if (!token && !isAdminLoginPage) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Protects all /admin/* routes
};
