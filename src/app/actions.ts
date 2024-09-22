"use server";

import { z } from "zod";
import { apiPost } from "@/utils/functions/appFunctions";
import { emailSchema, loginValidationSchema } from "@/types/authSchemas";

export async function onLogin(data: z.infer<typeof loginValidationSchema>) {
  try {
    const res = await fetch("https://iexplore.vercel.app/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const user = await res.json();
    console.log(user);

    if (res.ok && user) {
      return user;
    } else {
      throw new Error(user.message || "Invalid credentials");
    }
  } catch (error: any) {
    throw new Error(error.message || "Login failed");
  }
  // try {
  //   const response = await apiPost(
  //     data,
  //     "https://iexplore.vercel.app/api/v1/auth/login"
  //   );

  //   console.log(response?.status);

  //   if (response?.status === "success") {
  //     return { status: "loggedIn" };
  //   } else if (response?.status === "failed") {
  //     return { status: "failed" };
  //   } else {
  //     return { status: "unexpected" };
  //   }
  // } catch (error) {
  //   return { status: "error" };
  // }
}

export async function onSubmitWaitlist(data: z.infer<typeof emailSchema>) {
  try {
    const response = await apiPost(
      data,
      "https://iexplore.vercel.app/api/v1/waitlist/signup/"
    );

    if (response?.message === "You've been added to the waitlist!") {
      return { status: "added" };
    } else if (response?.message === "Email is already on the waitlist") {
      return { status: "already_added" };
    } else {
      return { status: "unexpected" };
    }
  } catch (error) {
    return { status: "error" };
  }
}
