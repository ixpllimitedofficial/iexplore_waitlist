// TODO: Temporarily using cookies to check userauth, will fix later

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
// import { apiGet, apiPost } from "@/utils/appFunctions";
import { apiGet, apiPost } from "@/app/_actions";

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
  const preData = await request.json();
  console.log(preData);

  const apiUrl = "http://44.193.73.68:8000/api/auth" + preData.extraUrl;
  console.log(apiUrl);

  const { extraUrl, ...data } = preData;
  console.log(data);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log(responseData, "yeah");
    console.log(response);

    if (!response.ok) {
      throw new Error(responseData.email);
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error handling form submission:", error);
    return NextResponse.json(error);
  }
}
