// import { NextResponse, NextRequest } from "next/server";

// export function adminMiddleware(request: NextRequest) {
//   const isAuthenticated = false;

//   // Allow access to the /user route itself (e.g., login page)
//   if (request.nextUrl.pathname === "/admin") {
//     const token = request.cookies.get("adminToken")?.value;
//     return NextResponse.next();
//   }

//   // If the user is authenticated, continue as normal
//   if (isAuthenticated) {
//     return NextResponse.next();
//   }

//   // Redirect to login page if not authenticated
//   return NextResponse.redirect(new URL("/admin-login", request.url));
// }

// export const config = {
//   matcher: "/admin/:path*",
// };


// Let's fix the middleware first
import { NextResponse, NextRequest } from "next/server";

export function adminMiddleware(request: NextRequest) {
  // Check if we're on the admin login page
  if (request.nextUrl.pathname === "/admin-login") {
    return NextResponse.next();
  }

  // Get the token and verify it exists
  const token = request.cookies.get("adminToken")?.value;
  
  if (!token) {
    // No token found, redirect to login
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  // Token exists, allow the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/admin-login"],
};