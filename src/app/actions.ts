"use server";

import { z } from "zod";
import { apiPost } from "@/utils/functions/appFunctions";
import { emailSchema } from "@/types/authSchemas";

export async function onSubmitWaitlist(
  data: z.infer<typeof emailSchema>
) {
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