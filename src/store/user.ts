import { create } from "zustand";
import { persist } from "zustand/middleware";
import { apiGet, apiPost } from "@/utils/appFunctions";

export const userStore = create((set) => ({
  user: {},
  isUserLoggedin: false,
  isAdminLoggedin: true,
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
      const responseData = await apiPost(formData, "/api/user");
      set({ user: responseData });

      if (responseData.message === "success") {
        set(() => ({ isUserLoggedin: true }));
      }
    } catch (error) {
      console.error("Error fetching external data:", error);
      console.log(error);
      set(() => ({ isUserLoggedin: false }));
    }
  },
  logoutUser: () => {
    set(() => ({ isUserLoggedin: false }));
    set({ user: {} });
  },
}));
