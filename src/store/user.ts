import { apiGet, apiPost } from "@/app/_actions";
import {
  extractAndThrowSignupError,
  extractAndThrowLoginError,
  extractAndThrowVerifyOTPError,
} from "@/utils/functions/throwErrorFunctions";
import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { apiGet } from "@/utils/appFunctions";
import { showSimpleToast } from "@/utils/functions/alertFunctions";
import { boolean } from "zod";

export const userStore = create((set) => ({
  user: {},
  isUserRegistered: false,
  isUserOTPVerified: false,
  isUserLoggedin: false,
  isAdminLoggedin: true,
  userRegistrationStatus: {},
  getUser: async () => {
    try {
      const responseData = await apiGet("/api/user");
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching external data:", error);
    }
  },
  loginUser: async (formData: any) => {
    try {
      const response = await fetch("http://44.193.73.68:8000/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      console.log(responseData);

      if (!response.ok) {
        extractAndThrowLoginError(responseData);
      }

      showSimpleToast(responseData.msg, "success");
      set(() => ({ isUserLoggedin: true }));

      // set({ user: responseData });

      // if (responseData.message === "success") {

      // }
    } catch (error: any) {
      const errorString = error.message;

      showSimpleToast(errorString, "failed");
      // set(() => ({ isUserLoggedin: false }));
    }
  },
  signupUser: async (formData: any) => {
    try {
      const response = await fetch(
        "http://44.193.73.68:8000/api/auth/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const responseData = await response.json();
      console.log(responseData);

      if (!response.ok) {
        extractAndThrowSignupError(responseData);
      }

      showSimpleToast(responseData.msg, "success");
      set(() => ({ isUserRegistered: true }));
    } catch (error: any) {
      const errorString = error.message;

      if (errorString.includes("Phone number")) {
        showSimpleToast(
          "Phone number must be entered in the format: '+2341234567890'. Up to 15 digits allowed.",
          "failed"
        );
      } else if (
        errorString.includes("Email Address") &&
        errorString.includes("username")
      ) {
        showSimpleToast(
          "Username or Email already exists, please check well or login!",
          "failed"
        );
      } else {
        showSimpleToast(errorString, "failed");
      }
    }
  },
  setIsUserRegistered: (value: boolean) =>
    set(() => ({ isUserRegistered: value })),
  logoutUser: () => {
    set(() => ({ isUserLoggedin: false }));
    set({ user: {} });
  },
  verifyUserOTP: async (formData: any) => {
    try {
      const response = await fetch(
        "http://44.193.73.68:8000/api/verification/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const responseData = await response.json();
      console.log(responseData);

      if (!response.ok) {
        extractAndThrowVerifyOTPError(responseData);
      }

      showSimpleToast(responseData.message, "success");
      set(() => ({ isUserOTPVerified: true }));
    } catch (error: any) {
      const errorString = error.message;

      showSimpleToast(errorString, "failed");
      // set(() => ({ isUserLoggedin: false }));
    }
  },
  setisOTPVerified: (value: boolean) =>
    set(() => ({ isUserOTPVerified: value })),
}));
// oluwaseyi12345@email.com
