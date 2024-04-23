import { create } from "zustand";

export const userStore = create((set) => ({
  user: {
    name: "Oluwaseyi",
  },
  fetchExternalData: async () => {
    try {
      const response = await fetch("/api/user");
      const newData = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch external data");
      }

      set({user: newData})
    } catch (error) {
      console.error("Error fetching external data:", error);
    }
  },
}));
