import { apiGet, apiPost } from "@/utils/functions/appFunctions";;
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { showSimpleToast } from "@/utils/functions/alertFunctions";

interface AdminState {
  admin: Record<string, any>;
  isAdminLoggedin: boolean;
  emailForOTP: string;
  isResetOTPSent: boolean;
  loginAdmin: (formData: { email: string; password: string }) => Promise<boolean>;
  verifyAdminOTP: (formData: any) => Promise<void>;
  requestAdminResetPasswordOTP: (formData: any) => Promise<void>;
  logoutAdmin: () => void;
}

const BASE_URL = "https://ixpl-backend.vercel.app/api";

export const adminStore = create<AdminState>()(
  persist(
    (set) => ({
      admin: {},
      isAdminLoggedin: false,
      emailForOTP: "",
      isResetOTPSent: false,

      // Login Admin
      loginAdmin: async (formData: { email: string; password: string }) => {
        try {
          const response = await fetch(`${BASE_URL}/v1/auth/login/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(formData),
          });

          const responseData = await response.json();

          if (!response.ok) {
            throw new Error(responseData.message || "Login failed");
          }

          const accessToken = responseData.data.token.accessToken;

          localStorage.setItem("token", accessToken);
          document.cookie = `adminToken=${accessToken}; path=/; max-age=86400`;

          showSimpleToast(responseData.msg, "success");

          set(() => ({
            isAdminLoggedin: true,
            admin: responseData.data,
          }));

          showSimpleToast("Login successful", "success");

          return true; // Indicate successful login
        } catch (error: any) {
          showSimpleToast(error.message || "Login failed", "failed");
          return false;
        }
      },

      // Verify Admin OTP
      verifyAdminOTP: async (formData: any) => {
        try {
          const response = await fetch(
            "http://44.193.73.68:8000/api/verify-otp/",
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

          if (!response.ok) {
            throw new Error(responseData.message || "OTP verification failed");
          }

          showSimpleToast(responseData.message, "success");

          set(() => ({ isResetOTPSent: true }));
        } catch (error: any) {
          showSimpleToast(error.message, "failed");
        }
      },

      // Request Admin Reset Password OTP
      requestAdminResetPasswordOTP: async (formData: any) => {
        try {
          const response = await fetch(
            "http://44.193.73.68:8000/api/password-reset_otp/",
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

          if (!response.ok) {
            throw new Error(responseData.message || "Failed to send OTP");
          }

          showSimpleToast(responseData.msg, "success");

          set(() => ({ isResetOTPSent: true }));
        } catch (error: any) {
          showSimpleToast(error.message, "failed");
        }
      },

      // Logout Admin
      logoutAdmin: () => {
        document.cookie = "adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        localStorage.removeItem("token"); // Add this line
        set(() => ({
          admin: {},
          isAdminLoggedin: false,
          emailForOTP: "",
          isResetOTPSent: false,
        }));
        // showSimpleToast("Admin logged out successfully", "success");
      }
    }),
    {
      name: "adminData", // Unique name for localStorage
    }
  )
);