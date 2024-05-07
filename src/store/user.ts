import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userStore = create((set) => ({
  user: {},
  loginUser: async (data: any) => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const newData = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch external data");
      }

      set({ user: newData });
      console.log(newData);
    } catch (error) {
      console.error("Error fetching external data:", error);
    }
  },
}));
