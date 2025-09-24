// TODO: Temporarily using cookies to check userauth, will fix later

import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function userMiddleware(request: NextRequest) {
  const cookieStore = await cookies();
  const isUserAuthenticated = cookieStore.get("isUserAuth");
  // Allow access to the /user route itself (e.g., login page)
  if (request.nextUrl.pathname === "/user") {
    return NextResponse.next();
  }

  // If the user is authenticated, continue as normal
  if (isUserAuthenticated) {
    if (isUserAuthenticated.value === "true") {
      console.log(isUserAuthenticated.value);
      return NextResponse.next();
    }
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/user", request.url));
}

export const config = {
  matcher: "/user/:path*",
};
