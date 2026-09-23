import { NextResponse } from "next/server";

const PACKAGES = [
  "com.ixpllimited.iexplore",
  "com.ixpllimited.iexplore.test",
  "com.ixpllimited.iexplore.dev",
];

const FINGERPRINTS = (
  process.env.NEXT_PUBLIC_ANDROID_SHA256_FINGERPRINTS ??
  "00:FC:00:42:4C:5F:A0:2F:A4:C6:56:3B:58:1F:60:25:A4:5B:88:01:A1:DB:1B:38:FD:3F:59:A3:3E:45:27:3D"
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

export async function GET() {
  const body = PACKAGES.map((package_name) => ({
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name,
      sha256_cert_fingerprints: FINGERPRINTS,
    },
  }));

  return NextResponse.json(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
