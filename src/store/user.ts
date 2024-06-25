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

const initialState = {
  user: {},
  isUserRegistered: false,
  emailForOTP: "",
  isUserOTPVerified: false,
  isResetOTPSent: false,
  isUserLoggedin: false,
  isAdminLoggedin: false,
  previousUrlForOTP: "",
};

// ✍ TASK TO DO: TO CHANGE LOCAL STORAGE TO J.W.T TO PROTECT USER DATA
export const userStore = create(
  persist(
    (set) => ({
      ...initialState,
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
          const response = await fetch(
            "http://44.193.73.68:8000/api/auth/login/",
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
            extractAndThrowLoginError(responseData);
          }

          showSimpleToast(responseData.msg, "success");
          set(() => ({ isUserLoggedin: true }));
          set({ user: responseData.data.user });

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
          set(() => ({ emailForOTP: responseData.data.email }));
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
        // set(() => ({ isUserLoggedin: false }));
        // set({ user: {} });
        set(initialState);
      },
      verifyOTP: async (formData: any, otpType: string) => {
        let url = "";

        if (otpType === "verifyOTP") {
          url = "http://44.193.73.68:8000/api/verify-otp/";
        } else if (otpType === "verifyUserOTP") {
          url = "http://44.193.73.68:8000/api/verification/";
        }

        console.log(url);
        

        try {
          const response = await fetch(url, {
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
      setisOTPVerified: (value: boolean) => {
        set(() => ({ isUserOTPVerified: value }));
      },
      requestUserOTP: async (formData: any, requestType: string) => {
        let url = "";

        if (requestType === "requestOTP") {
          url = "http://44.193.73.68:8000/api/request-otp/";
        } else if (requestType === "resetPassword") {
          url = "http://44.193.73.68:8000/api/password-reset_otp/";
        }

        try {
          const response = await fetch(url, {
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
            extractAndThrowVerifyOTPError(responseData);
          }

          showSimpleToast(responseData.msg, "success");

          if (requestType === "resetPassword") {
            set(() => ({ isResetOTPSent: true }));
          }

          set(() => ({ previousUrlForOTP: requestType }));
        } catch (error: any) {
          const errorString = error.message;

          showSimpleToast(errorString, "failed");
        }
      },
      // Action to reset isResetOTPSent
      resetPreviousURL: () => set({ previousUrlForOTP: "" }),
      clearEmailForOTPstate: () => {
        set(() => ({ emailForOTP: "" }));
      },
      // Action to reset isResetOTPSent
      resetIsResetOTPSent: () => set({ isResetOTPSent: false }),
    }),
    {
      name: "testData", // unique name
      // partialize: (state) => ({ testData: state.testData }), // persist only the testData property
    }
  )
);
// oluwaseyi12345@email.com
