import { apiGet, apiPost } from "@/utils/functions/appFunctions";;
import {
  extractAndThrowSignupError,
  extractAndThrowLoginError,
  extractAndThrowVerifyOTPError,
} from "@/utils/functions/throwErrorFunctions";
import { create, useStore } from "zustand";
import { persist } from "zustand/middleware";
// import { apiGet } from "@/utils/appFunctions";
import { showSimpleToast } from "@/utils/functions/alertFunctions";
import { boolean } from "zod";

const initialState = {
  vendor: {},
  savedVendor:{},
  isVendorRegistered: false,
  isVendorLoggedin: false,
  isVendorLoggedOut:false,
  emailForOTP: "",
  isVendorOTPVerified: false,
  isResetOTPSent: false,
  previousUrlForOTP: "",
  token: "", // Add token here
};
const BASE_URL = " https://ixpl-backend.vercel.app/api";
// ✍ TASK TO DO: TO CHANGE LOCAL STORAGE TO J.W.T TO PROTECT USER DATA
export const vendorStore = create(
  persist(
    (set, get) => ({
      ...initialState,
      signupVendor: async (formData: any) => {
        try {
          const response = await fetch(
            `${BASE_URL}/v1/auth/vendor/signup/`,
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
          set(() => ({ isVendorRegistered: true }));
          set(() => ({ emailForOTP: responseData.data.email }));
          set(() => ({ token: responseData.data.token }));
        } catch (error: any) {
          const errorString = error.message;
        if (
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
      setIsVendorRegistered: (value: boolean) =>
        set(() => ({ isVendorRegistered: value })),

      loginVendor: async (formData: any) => {
        try {
          const response = await fetch(
            `${BASE_URL}/v1/auth/vendor/login/`,
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

          // showSimpleToast(responseData.msg, "success");
          console.log(responseData.msg)
          set(() => ({ isVendorLoggedin: true }));
          set(() => ({ 
            token: responseData.data.token,
            savedVendor: responseData,
            vendor: responseData.data.vendor
           }));
        } catch (error: any) {
          const errorString = error.message;
        if (
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
      setIsVendorLoggedin: (value: boolean) =>
        set(() => ({ isVendorLoggedin: value })),

      // logoutVendor: async (formData: { refreshToken: string }) => {
      //   console.log('Logout form data:', formData);
      //   const token = get().token;
      //   const accessToken = token.accessToken;
      //   try{
      //     const response = await fetch(
      //       `${BASE_URL}/v1/auth/logout`,
      //       {
      //         method: "POST",
      //         headers: {
      //           "Content-Type": "application/json",
      //           Accept: "application/json",
      //           Authorization: `Bearer ${accessToken}`,
      //         },
      //         body: JSON.stringify(formData),
      //       }
      //     );
      //     console.log('Logout response:', response);
      //     const responseData = await response.json();
      //     console.log('Logout response data:', responseData);

      //     if (!response.ok) {
      //       throw new Error(`HTTP error! status: ${response.status}`);
      //     }

      //     showSimpleToast(responseData.msg, "success");
      //     set(() => ({ isVendorLoggedin: false }));
      //     set(() => ({ isVendorLoggedOut: true }));
      //      set({ vendor: {} });
      //      set(initialState);
      //   }catch(error: any){
      //     console.error('Logout error:', error);
      //   }
      // },
      // setIsVendorLoggedOut: (value: boolean) =>
      //   set(() => ({ isVendorLoggedOut: value })),
      
      // verifyOTP: async (formData: any, otpType: string) => {
      //   try {
      //     const response = await fetch(`${BASE_URL}/v1/auth/verification`, {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //         Accept: "application/json",
      //       },
      //       body: JSON.stringify(formData),
      //     });
      //     const responseData = await response.json();
      //     console.log("API Response:", responseData);

      //     if (!response.ok) {
      //       console.log("Response not OK. Extracting and throwing error...");
      //       extractAndThrowVerifyOTPError(responseData);
      //     }

      //     showSimpleToast(responseData.message, "success");
      //     set(() => ({ isVendorOTPVerified: true }));
      //     return responseData;
      //   } catch (error: any) {
      //     const errorString = error.message;
      //     console.log("Caught an error:", errorString);
      //     showSimpleToast(errorString, "failed");
      //     // set(() => ({ isUserLoggedin: false }));
      //     return { status: 'error', message: errorString }; // Return an error object
      //   }
      // },
      logoutVendor: async (formData: { refreshToken: string }) => {
        console.log('Logout form data:', formData);
        set(() => ({ isVendorLoggedin: false }));
          set(() => ({ isVendorLoggedOut: true }));
           set({ vendor: {} });
           set(initialState);
           console.log("LogoutVendor function executed, isVendorLoggedOut set to true");
      },
      setIsVendorLoggedOut: (value: boolean) =>
        set(() => ({ isVendorLoggedOut: value })),
      verifyOTP: async (formData: any, otpType: string) => {
        try {
          const response = await fetch(`${BASE_URL}/v1/auth/verification`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(formData),
          });
          const responseData = await response.json();
          console.log("API Response:", responseData);
      
          if (!response.ok) {
            console.log("Response not OK. Extracting and throwing error...");
            console.error("Error Response:", responseData);
            extractAndThrowVerifyOTPError(responseData);
          }
      
          showSimpleToast(responseData.message, "success");
          set(() => ({ isVendorOTPVerified: true }));
          return responseData;
        } catch (error: any) {
          console.error("Caught an error:", error);
          showSimpleToast(error.message, "failed");
          return { status: 'error', message: error.message };
        }
      },
      setisOTPVerified: (value: boolean) => {
        set(() => ({ isVendorOTPVerified: value }));
      },
      requestVendorOTP: async (formData: Record<string, any>, requestType: string) => {
        let url = "";

        if (requestType === "requestOTP") { 
          url = `${BASE_URL}/v1/auth/request-otp`; } 
          else if (requestType === "resetPassword") {
             url = "http://44.193.73.68:8000/api/password-reset_otp"; 
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
          return responseData;
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
