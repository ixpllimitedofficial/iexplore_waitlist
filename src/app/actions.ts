"use server";

import { z } from "zod";
import { apiPost } from "@/utils/functions/appFunctions";
import {
  emailSchema,
  loginValidationSchema,
  signupValidationSchema,
  verifyOTPSchema,
} from "@/types/authSchemas";
import {
  extractAndThrowLoginError,
  extractAndThrowResendOTPError,
  extractAndThrowSignupError,
  extractAndThrowVerifyOTPError,
} from "@/utils/functions/throwErrorFunctions";

// login
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

    const responseData = await res.json();
    console.log(responseData);

    if (!res.ok) {
      extractAndThrowLoginError(responseData);
    }

    return responseData;
  } catch (error: any) {
    console.error("Error fetching external data:", error.message);
    return error.message;
  }
}

// sign up
export async function onSignup(data: z.infer<typeof signupValidationSchema>) {
  const { checkbox, ...newData } = data;

  try {
    const res = await fetch(
      "https://iexplore.vercel.app/api/v1/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...newData, role: "user" }),
      }
    );

    const responseData = await res.json();
    console.log(responseData);

    if (!res.ok) {
      extractAndThrowSignupError(responseData);
    }

    return responseData;
  } catch (error: any) {
    console.error("Error fetching external data:", error.message);
    return error.message;
  }
}

// verify user registration otp
export async function onVerifyUserOTP(data: z.infer<typeof verifyOTPSchema>) {
  try {
    const response = await fetch(
      "https://iexplore.vercel.app/api/v1/auth/verification",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok) {
      extractAndThrowVerifyOTPError(responseData);
    }

    return responseData;
  } catch (error: any) {
    return error.message;
  }
}

// verify user registration otp
export async function onResendUserOTP(data: z.infer<typeof emailSchema>) {
  try {
    const response = await fetch(
      "https://iexplore.vercel.app/api/v1/auth/request-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok) {
      extractAndThrowResendOTPError(responseData);
    }

    return responseData;
  } catch (error: any) {
    return error.message;
  }
}

// waitlist submission
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
