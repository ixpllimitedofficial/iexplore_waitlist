import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from external API: ${response.status}`
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching external data:", error);
    Response.json({ message: "Error fetching data" });
  }
}
