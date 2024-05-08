import { NextRequest, NextResponse } from "next/server";
import submitForm from "@/utils/submitForm";

export async function GET() {
  try {
    const response = await fetch("http://3.91.40.69/");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from external API: ${response.status}`
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching external data:", error);
    NextResponse.json({ message: "Error fetching data" });
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.json();

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        body: data.body,
        userId: data.userId,
      }),
    });
    const newData = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch external data");
    }
    return NextResponse.json(newData);
  } catch (error) {
    console.error("Error fetching external data:", error);
    NextResponse.json({ message: "Error fetching data" });
  }

  // try {
  //   const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // Example API URL
  //   const data = await submitForm(formData, apiUrl);
  //   console.log(data);

  //   return NextResponse.json(data);
  // } catch (error) {
  //   console.error("Error handling form submission:", error);
  //   return NextResponse.json({ error: "Internal Server Error" });
  // }
}
