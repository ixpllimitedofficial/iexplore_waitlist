// TODO: Temporarily using cookies to check userauth, will fix later

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { apiGet, apiPost } from "@/utils/appFunctions";

export async function GET() {
  try {
    const data = await apiGet("https://jsonplaceholder.typicode.com/posts");

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching external data:", error);
    NextResponse.json({ message: "Error fetching data" });
  }
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const apiUrl = "http://44.193.73.68:8000/api/auth/login/";
  let isUserAuth;

  try {
    const responseData = await apiPost(
      {
        username_or_email: data.username_or_email,
        password: data.password,
      },
      apiUrl
    );

    if ((responseData.message = "success")) {
      cookies().set({
        name: "isUserAuth",
        value: "true",
        httpOnly: true,
      });
    }
    return NextResponse.json(responseData);
  } catch (error) {
    cookies().set({
      name: "isUserAuth",
      value: "false",
      httpOnly: true,
    });
    console.error("Error handling form submission:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
