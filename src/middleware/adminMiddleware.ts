import { NextResponse, NextRequest } from "next/server";

export function adminMiddleware(request: NextRequest) {
  const isAuthenticated = false;

  // Allow access to the /user route itself (e.g., login page)
  if (request.nextUrl.pathname === "/admin") {
    const token = request.cookies.get("adminToken")?.value;
    return NextResponse.next();
  }

  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/admin-login", request.url));
}

export const config = {
  matcher: "/admin/:path*",
};
