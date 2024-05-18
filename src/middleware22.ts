import { NextResponse, NextRequest } from "next/server";
import { userMiddleware } from "./middleware/userMiddleware";
import { adminMiddleware } from "./middleware/adminMiddleware";

import { cookies } from "next/headers";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/user/")) {
    return userMiddleware(req);
  } else if (req.nextUrl.pathname.startsWith("/admin/")) {
    return adminMiddleware(req);
  }

  // Handle other routes or default behavior
  return NextResponse.next();
}
