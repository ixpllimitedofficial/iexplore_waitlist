
import { showSimpleToast } from "@/utils/functions/alertFunctions";
import { persist } from "zustand/middleware";
import { create } from "zustand";

const BASE_URL = "https://ixpl-backend.vercel.app/api";

interface User {
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone: string | null;
    last_login: string | null;
    is_active: boolean;
    role: string;
    created_at: string;
}

interface AdminStats {
    total_users: number;
    total_vendors: number;
    active_users: number;
    new_vendors: number;
    total_referrals: number;
}

interface ActionState {
    adminStats: AdminStats;
    users: User[];
    isLoading: boolean;
    error: string | null
    fetchAdminStats: (token: string) => Promise<void>;
    fetchUsers: (token: string) => Promise<void>;
    sortUsers: (criteria: 'newest' | 'oldest') => void;
    searchUsers: (query: string) => void;
    updateUserDetails: (userId: string, userData: any, token: string) => Promise<void>;
}

export const adminActions = create<ActionState>()(
    persist(
        (set, get) => ({
            adminStats: {
                total_users: 0,
                total_vendors: 0,
                active_users: 0,
                new_vendors: 0,
                total_referrals: 0,
            },
            users: [],
            isLoading: false,
            error: null,

            fetchAdminStats: async (token: string) => {
                if (!token) {
                    console.error("Token is missing. Please log in.");
                    showSimpleToast("Token is missing. Please log in.", "failed");
                    return;
                }

                try {
                    const response = await fetch(`${BASE_URL}/v1/stats/`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    const responseData = await response.json();

                    if (!response.ok) {
                        console.error("Error fetching stats from server", responseData);
                        throw new Error(responseData.error?.detail || "Failed to fetch stats from server");
                    }

                    // Update admin stats in Zustand state
                    set(() => ({
                        adminStats: {
                            total_users: responseData.total_users || 0,
                            total_vendors: responseData.total_vendors || 0,
                            active_users: responseData.active_users || 0,
                            new_vendors: responseData.new_vendors || 0,
                            total_referrals: responseData.total_referrals || 0,
                        },
                    }));

                    // showSimpleToast("Stats fetched successfully", "success");
                } catch (error: any) {
                    console.error("Error fetching admin stats:", error.message);
                    showSimpleToast(error.message || "Failed to fetch stats", "failed");
                    throw error;
                }
            },
            fetchUsers: async (token: string) => {
                if (!token) {
                    console.error("Token is missing. Please log in.");
                    showSimpleToast("Token is missing. Please log in.", "failed");
                    return;
                }

                try {
                    set({ isLoading: true, error: null });

                    const response = await fetch(`${BASE_URL}/v1/admin/users/`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    const responseData = await response.json();

                    if (!response.ok) {
                        throw new Error(responseData.error?.detail || "Failed to fetch users");
                    }

                    set({ users: responseData, isLoading: false });
                    showSimpleToast("Users fetched successfully", "success");
                } catch (error: any) {
                    console.error("Error fetching users:", error.message);
                    set({ error: error.message, isLoading: false });
                    showSimpleToast(error.message || "Failed to fetch users", "failed");
                }
            },

            sortUsers: (criteria) => {
                const users = [...get().users];
                users.sort((a, b) => {
                    if (criteria === "newest") {
                        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                    }
                    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
                });
                set({ users });
            },

            searchUsers: (query) => {
                const allUsers = [...get().users];
                if (!query.trim()) {
                    set({ users: allUsers });
                    return;
                }

                const filteredUsers = allUsers.filter((user) =>
                    user.username.toLowerCase().includes(query.toLowerCase()) ||
                    user.email.toLowerCase().includes(query.toLowerCase()) ||
                    (user.phone && user.phone.toLowerCase().includes(query.toLowerCase())) ||
                    user.first_name.toLowerCase().includes(query.toLowerCase()) ||
                    user.last_name.toLowerCase().includes(query.toLowerCase())
                );
                set({ users: filteredUsers });
            },
            fetchUserById: async (id: string, token: string) => {
                if (!token) {
                    console.error("Token is missing. Please log in.");
                    showSimpleToast("Token is missing. Please log in.", "failed");
                    return;
                }

                try {
                    set({ isLoading: true, error: null });

                    const response = await fetch(`${BASE_URL}/v1/admin/users/${id}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    const userDetails = await response.json();

                    if (!response.ok) {
                        throw new Error(userDetails.error?.detail || "Failed to fetch user details");
                    }

                    // Store fetched user details or update state as needed
                    set((state) => ({
                        ...state,
                        users: state.users.map((user) =>
                            user.id === id ? { ...user, ...userDetails } : user
                        ),
                    }));

                    console.log("Fetched user details:", userDetails);
                    showSimpleToast("User details fetched successfully", "success");
                } catch (error: any) {
                    console.error("Error fetching user details:", error.message);
                    set({ error: error.message, isLoading: false });
                    showSimpleToast(error.message || "Failed to fetch user details", "failed");
                } finally {
                    set({ isLoading: false });
                }
            },

            updateUserDetails: async (userId: string, updatedData: Partial<User>, token: string) => {
                if (!token) {
                    console.error("Token is missing. Please log in.");
                    showSimpleToast("Token is missing. Please log in.", "failed");
                    return;
                }

                try {
                    set({ isLoading: true, error: null });

                    const response = await fetch(`${BASE_URL}/v1/admin/users/${userId}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify(updatedData),
                    });

                    const responseData = await response.json();

                    if (!response.ok) {
                        throw new Error(responseData.error?.detail || "Failed to update user details");
                    }

                    // Update the user list with the updated user details
                    set((state) => ({
                        users: state.users.map((user) =>
                            user.id === userId ? { ...user, ...updatedData } : user
                        ),
                    }));

                    showSimpleToast("User details updated successfully", "success");
                } catch (error: any) {
                    console.error("Error updating user details:", error.message);
                    set({ error: error.message, isLoading: false });
                    showSimpleToast(error.message || "Failed to update user details", "failed");
                } finally {
                    set({ isLoading: false });
                }
            },
        }),
        {
            name: "adminActions",
        }
    )
);
