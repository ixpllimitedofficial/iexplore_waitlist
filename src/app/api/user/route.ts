import { NextRequest, NextResponse } from "next/server";
import { apiGet, apiPost } from "@/utils/appFunctions";

export async function GET() {
  try {
    const data = await apiGet(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching external data:", error);
    NextResponse.json({ message: "Error fetching data" });
  }
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const apiUrl = "http://44.193.73.68:8000/api/auth/login/";

  try {
    const responseData = await apiPost(
      {
        username_or_email: data.username_or_email,
        password: data.password,
      },
      apiUrl
    );
    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error handling form submission:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
