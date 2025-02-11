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


//try this fixes incase this doesent work 

// import { NextResponse, NextRequest } from "next/server";

// export function adminMiddleware(request: NextRequest) {
//   // Get the admin token from cookies
//   const adminToken = request.cookies.get("adminToken")?.value;
  
//   // Define protected paths that require authentication
//   const isProtectedPath = request.nextUrl.pathname.startsWith("/admin") && 
//     request.nextUrl.pathname !== "/admin-login";
  
//   // Check if user is authenticated based on the token
//   const isAuthenticated = !!adminToken;

//   // If accessing a protected path and not authenticated, redirect to login
//   if (isProtectedPath && !isAuthenticated) {
//     const loginUrl = new URL("/admin-login", request.url);
//     // Preserve the original URL as a redirect parameter
//     loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
//     return NextResponse.redirect(loginUrl);
//   }

//   // If authenticated and trying to access login page, redirect to admin dashboard
//   if (isAuthenticated && request.nextUrl.pathname === "/admin-login") {
//     return NextResponse.redirect(new URL("/admin", request.url));
//   }

//   // Otherwise, continue as normal
//   return NextResponse.next();
// }

// export const config = {
//   // Match all paths under /admin except /admin-login
//   matcher: [
//     "/admin/:path*",
//     "/admin-login"
//   ]
// };