import { NextResponse } from "next/server";

const TEAM_ID = process.env.NEXT_PUBLIC_APPLE_TEAM_ID ?? "23DCJ49C89";

const BUNDLE_IDS = [
  "com.ixpllimited.iexplore",
  "com.ixpllimited.iexplore.test",
  "com.ixpllimited.iexplore.dev",
];

export async function GET() {
  const body = {
    applinks: {
      apps: [],
      details: BUNDLE_IDS.map((bundle) => ({
        appID: `${TEAM_ID}.${bundle}`,
        paths: [
          "/spot/*",
          "/event/*",
          "/profile/*",
          "/feeds/*",
          "/drinks/*",
          "/make-reservation/*",
          "/",
        ],
      })),
    },
  };

  return NextResponse.json(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
