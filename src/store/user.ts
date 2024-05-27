import { apiGet, apiPost } from "@/app/_actions";
import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { apiGet } from "@/utils/appFunctions";

export const userStore = create((set) => ({
  user: {},
  isUserLoggedin: true,
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
    const extraUrl = "/login/";

    try {
      const responseData = await apiPost(
        { ...formData, extraUrl },
        "/api/user"
      );
      console.log(responseData);

      // set({ user: responseData });

      // if (responseData.message === "success") {

      // set(() => ({ isUserLoggedin: true }));
      // }
    } catch (error) {
      console.error("Error fetching external data:", error);
      console.log(error);
      set(() => ({ isUserLoggedin: false }));
    }
  },
  signupUser: async (formData: any) => {
    const extraUrl = "/register/";

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({...formData, extraUrl}),
      });
      const responseData = await response.json();
      console.log(responseData);

      // set({ userRegistrationStatus: responseData });

      // if (responseData.message === "success") {
      // set(() => ({ isUserLoggedin: true }));
      // }
    } catch (error) {
      console.error("Error fetching external data:", error);
      console.log(error);
      // set(() => ({ isUserLoggedin: false }));
    }
  },
  logoutUser: () => {
    set(() => ({ isUserLoggedin: false }));
    set({ user: {} });
  },
}));
