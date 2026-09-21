import { NextRequest, NextResponse } from "next/server";
import { apiBase } from "@/lib/public-content";

const cookieName = "ixpl_shared_access";
const uuid = "[a-f\\d]{8}-(?:[a-f\\d]{4}-){3}[a-f\\d]{12}";
const routes = [
  /^auth\/login$/, /^auth\/logout$/,
  new RegExp(`^public/live/${uuid}/watch$`, "i"),
  /^feeds\/posts\/interact\/like$/, /^feeds\/comments\/create$/,
  /^spots\/favorites\/add$/,
  new RegExp(`^live-streams/streams/${uuid}/comments$`, "i"),
];

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "private, no-store" } });
}

export async function POST(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  // Cookies are only accepted for same-origin requests, including sign-in.
  const protocol = request.headers.get("x-forwarded-proto") || request.nextUrl.protocol.replace(":", "");
  const expectedOrigin = `${protocol}://${request.headers.get("host")}`;
  if (request.headers.get("origin") !== expectedOrigin) return json({ message: "Invalid request origin." }, 403);
  const path = (await context.params).path.join("/");
  if (!routes.some(route => route.test(path))) return json({ message: "Not found." }, 404);
  if (Number(request.headers.get("content-length") || 0) > 16384) return json({ message: "Request too large." }, 413);
  if (path === "auth/logout") {
    const response = json({ message: "Signed out." });
    response.cookies.delete(cookieName);
    return response;
  }
  try {
    const raw = await request.text();
    if (raw.length > 16384) return json({ message: "Request too large." }, 413);
    let body;
    try { body = JSON.parse(raw); } catch { return json({ message: "Invalid request." }, 400); }
    const token = request.cookies.get(cookieName)?.value;
    // Only configure a header the hosting platform overwrites. Never trust a
    // visitor-supplied forwarding header on a directly exposed Next server.
    const ipHeader = process.env.PUBLIC_PROXY_CLIENT_IP_HEADER;
    const clientIp = ipHeader ? request.headers.get(ipHeader) : null;
    const isPublic = path.startsWith("public/") || path === "auth/login";
    if (!isPublic && !token) return json({ message: "Sign in to continue." }, 401);
    const upstream = await fetch(`${apiBase()}/${path}/`, {
      method: "POST", cache: "no-store", signal: AbortSignal.timeout(15000),
      headers: { "Content-Type": "application/json", ...(clientIp ? { "X-Forwarded-For": clientIp } : {}), ...(!isPublic && token ? { Authorization: `Bearer ${token}` } : {}) },
      body: JSON.stringify(body),
    });
    const data = await upstream.json();
    if (path === "auth/login" && upstream.ok) {
      if (!data.data?.access_token) return json({ message: "Sign-in failed. Please try again." }, 502);
      const response = json({ message: "Signed in." });
      response.cookies.set(cookieName, data.data.access_token, {
        httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/",
        // Session-only cookie. Expired access tokens prompt a new login.
      });
      return response;
    }
    const response = json(data, upstream.status);
    if (upstream.status === 401) response.cookies.delete(cookieName);
    return response;
  } catch {
    return json({ message: "Unable to connect. Please try again." }, 502);
  }
}
