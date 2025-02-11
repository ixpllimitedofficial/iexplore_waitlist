
import { showSimpleToast } from "@/utils/functions/alertFunctions";
import { persist } from "zustand/middleware";
import { create } from "zustand";

const BASE_URL = "https://ixpl-backend.vercel.app/api";


interface Vendor {
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone: string | null;
    last_login: string | null;
    is_active: boolean;
    is_verified: boolean;
    role: string;
    created_at: string;
}

interface VendorStats {
    vendor_spot_count: number;
}

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

interface Creator {
    id: string;
    username: string;
    email: string;
}

interface Spot {
    id: string;
    creator: Creator;
    category: string;
    features: string[];
    offers: string[];
    primary_image: string;
    name: string;
    location: string;
    state: string;
    description: string;
    slug: string;
    entry: string;
    is_verified: boolean;
    created_at: string;
    updated_at: string;
    opening_time: string;
    closing_time: string;
}

interface ActionState {
    adminStats: AdminStats;
    users: User[];
    vendors: Vendor[];
    spots: Spot[];
    vendorStats: Record<string, VendorStats>; // Map vendor ID to their stats
    isLoading: boolean;
    error: string | null;
    fetchAdminStats: (token: string) => Promise<void>;
    fetchUsers: (token: string) => Promise<void>;
    sortUsers: (criteria: 'newest' | 'oldest') => void;
    searchUsers: (query: string) => void;
    updateUserDetails: (userId: string, userData: any, token: string) => Promise<void>;
    fetchVendors: (token: string) => Promise<void>;
    sortVendors: (criteria: 'newest' | 'oldest') => void;
    searchVendors: (query: string) => void;
    updateVendorDetails: (vendorId: string, vendorData: any, token: string) => Promise<void>;
    fetchVendorSpots: (vendorId: string, token: string) => Promise<void>;
    fetchSpots: (token: string) => Promise<void>;
    sortSpots: (criteria: 'newest' | 'oldest') => void;
    searchSpots: (query: string) => void;
    updateSpotDetails: (spotId: string, spotData: any, token: string) => Promise<void>;
    // fetchSpotById: (id: string, token: string) => Promise<void>;
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
            vendors: [],
            vendorStats: {},
            spots: [],
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

            //VENDORS ENPOINTS

            fetchVendors: async (token: string) => {
                if (!token) {
                    console.error("Token is missing. Please log in.");
                    showSimpleToast("Token is missing. Please log in.", "failed");
                    return;
                }

                try {
                    set({ isLoading: true, error: null });

                    const response = await fetch(`${BASE_URL}/v1/admin/vendors/`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    const responseData = await response.json();

                    if (!response.ok) {
                        throw new Error(responseData.error?.detail || "Failed to fetch vendors");
                    }

                    set({ vendors: responseData, isLoading: false });
                    showSimpleToast("Vendors fetched successfully", "success");
                } catch (error: any) {
                    console.error("Error fetching vendors:", error.message);
                    set({ error: error.message, isLoading: false });
                    showSimpleToast(error.message || "Failed to fetch vendors", "failed");
                }
            },
            sortVendors: (criteria) => {
                const vendors = [...get().vendors];
                vendors.sort((a, b) => {
                    if (criteria === "newest") {
                        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                    }
                    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
                });
                set({ vendors });
            },
            searchVendors: (query) => {
                const allVendors = [...get().vendors];
                if (!query.trim()) {
                    set({ vendors: allVendors });
                    return;
                }

                const filteredVendors = allVendors.filter((vendor) =>
                    vendor.username.toLowerCase().includes(query.toLowerCase()) ||
                    vendor.email.toLowerCase().includes(query.toLowerCase()) ||
                    (vendor.phone && vendor.phone.toLowerCase().includes(query.toLowerCase())) ||
                    vendor.first_name.toLowerCase().includes(query.toLowerCase()) ||
                    vendor.last_name.toLowerCase().includes(query.toLowerCase())
                );
                set({ vendors: filteredVendors });

            },
            updateVendorDetails: async (vendorId: string, updatedData: Partial<Vendor>, token: string) => {
                if (!token) {
                    console.error("Token is missing. Please log in.");
                    showSimpleToast("Token is missing. Please log in.", "failed");
                    return;
                }

                try {
                    set({ isLoading: true, error: null });

                    const response = await fetch(`${BASE_URL}/v1/admin/vendor/${vendorId}`, {
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
                        throw new Error(responseData.error?.detail || "Failed to update vendor details");
                    }

                    // Update the user list with the updated user details
                    set((state) => ({
                        vendors: state.vendors.map((vendor) =>
                            vendor.id === vendorId ? { ...vendor, ...updatedData } : vendor
                        ),
                    }));

                    showSimpleToast("vendor details updated successfully", "success");
                } catch (error: any) {
                    console.error("Error updating vendor details:", error.message);
                    set({ error: error.message, isLoading: false });
                    showSimpleToast(error.message || "Failed to update vendor details", "failed");
                } finally {
                    set({ isLoading: false });
                }
            },
            // approveVendor: async (vendorId: string, token: string) => {
            //     if (!token) {
            //         console.error("Token is missing. Please log in.");
            //         showSimpleToast("Token is missing. Please log in.", "failed");
            //         return;
            //     }

            //     try {
            //         set({ isLoading: true, error: null });

            //         const response = await fetch(`${BASE_URL}/v1/vendor/${vendorId}/approval`, {
            //             method: "PUT",
            //             headers: {
            //                 "Content-Type": "application/json",
            //                 Accept: "application/json",
            //                 Authorization: `Bearer ${token}`,
            //             },
            //             body: JSON.stringify({ status: "approved" })
            //         });

            //         const responseData = await response.json();

            //         if (!response.ok) {
            //             throw new Error(responseData.error?.detail || "Failed to approve vendor");
            //         }

            //         // Update the vendors list to reflect the approved status
            //         set((state) => ({
            //             vendors: state.vendors.map((vendor) =>
            //                 vendor.id === vendorId
            //                     ? { ...vendor, is_active: true, is_verified: true }
            //                     : vendor
            //             ),
            //         }));

            //         showSimpleToast("Vendor approved successfully", "success");
            //     } catch (error: any) {
            //         console.error("Error approving vendor:", error.message);
            //         set({ error: error.message, isLoading: false });
            //         showSimpleToast(error.message || "Failed to approve vendor", "failed");
            //     } finally {
            //         set({ isLoading: false });
            //     }
            // },

            fetchVendorSpots: async (vendorId: string, token: string) => {
                if (!token) {
                    console.error("Token is missing. Please log in.");
                    showSimpleToast("Token is missing. Please log in.", "failed");
                    return;
                }

                try {
                    set({ isLoading: true, error: null });

                    const response = await fetch(`${BASE_URL}/v1/admin/vendor/${vendorId}/vendor_stat`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    });

                    // First check if response is actually JSON
                    const contentType = response.headers.get("content-type");
                    if (!contentType || !contentType.includes("application/json")) {
                        throw new Error("Server returned non-JSON response");
                    }

                    const responseData = await response.json();

                    if (!response.ok) {
                        // Handle different status codes
                        switch (response.status) {
                            case 401:
                                throw new Error("Unauthorized - Please log in again");
                            case 403:
                                throw new Error("Forbidden - You don't have permission to access this resource");
                            case 404:
                                throw new Error("Vendor stats not found");
                            default:
                                throw new Error(responseData.error?.detail || `Server error: ${response.status}`);
                        }
                    }

                    // Update vendorStat in state
                    set((state) => ({
                        ...state,
                        vendorStats: {
                            ...state.vendorStats,
                            [vendorId]: {
                                vendor_spot_count: responseData.vendor_spot_count || 0,
                            }
                        },
                        isLoading: false
                    }));

                    showSimpleToast("Vendor stats fetched successfully", "success");
                } catch (error: any) {
                    const errorMessage = error instanceof Error ? error.message : "Failed to fetch vendor stats";
                    console.error("Error fetching vendor stats:", errorMessage);
                    set({ error: errorMessage, isLoading: false });
                    showSimpleToast(errorMessage, "failed");
                }
            },

            //CONTENT-MODERATION

            fetchSpots: async (token: string) => {
                if (!token) {
                    console.error("Token is missing. Please log in.");
                    showSimpleToast("Token is missing. Please log in.", "failed");
                    return;
                }

                try {
                    set({ isLoading: true, error: null });

                    const response = await fetch(`${BASE_URL}/v1/admin/contentmoderation/spots`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    const responseData = await response.json();

                    if (!response.ok) {
                        throw new Error(responseData.error?.detail || "Failed to fetch spots");
                    }

                    set({ spots: responseData, isLoading: false });
                    showSimpleToast("spots fetched successfully", "success");
                } catch (error: any) {
                    console.error("Error fetching vendors:", error.message);
                    set({ error: error.message, isLoading: false });
                    showSimpleToast(error.message || "Failed to fetch spots", "failed");
                }
            },
            sortSpots: (criteria) => {
                const spots = [...get().spots];
                spots.sort((a, b) => {
                    if (criteria === "newest") {
                        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                    }
                    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
                });
                set({ spots });
            },
            searchSpots: (query) => {
                const allSpots = [...get().spots];
                if (!query.trim()) {
                    set({ spots: allSpots });
                    return;
                }
                const filteredSpots = allSpots.filter((spot) =>
                    spot.name.toLowerCase().includes(query.toLowerCase()) ||
                    spot.location.toLowerCase().includes(query.toLowerCase())
                );
                set({ spots: filteredSpots });
            },


            //fetch spots by ID

            fetchSpotById: async (id: string, token: string) => {
                if (!token) {
                    console.error("Token is missing. Please log in.");
                    showSimpleToast("Token is missing. Please log in.", "failed");
                    return;
                }

                try {
                    set({ isLoading: true, error: null })
                    const response = await fetch(`${BASE_URL}/v1/admin/contentmoderation/spot/${id}/`, {
                        method: 'GET',
                        headers: {
                            "Content-Type": 'application/json', // Correct header name
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`, // Use ${} to interpolate variables
                        },
                    });

                    const spotDetails = await response.json();

                    if (!response.ok) {
                        throw new Error(spotDetails.error?.detail || "Failed to fetch user details");
                    }

                    // Store fetched spot details or update state as needed
                    set((state) => ({
                        ...state,
                        spots: state.spots.map((spot) =>
                            spot.id === id ? { ...spot, ...spotDetails } : spot
                        ),
                    }));

                    console.log("Fetched spot details:", spotDetails);
                    showSimpleToast("User details fetched successfully", "success");
                } catch (error: any) {
                    console.error("Error fetching user details:", error.message);
                    set({ error: error.message, isLoading: false });
                    showSimpleToast(error.message || "Failed to fetch user details", "failed");
                } finally {
                    set({ isLoading: false });
                }
            },

            //EDIT SPOT DETAILS ENDPOINT 

            updateSpotDetails: async (spotId: string, updatedData: Partial<Vendor>, token: string) => {
                if (!token) {
                    console.error("Token is missing. Please log in.");
                    showSimpleToast("Token is missing. Please log in.", "failed");
                    return;
                }

                try {
                    set({ isLoading: true, error: null });

                    const response = await fetch(`${BASE_URL}/v1/admin/contentmoderation/spot/${spotId}/`, {
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
                        throw new Error(responseData.error?.detail || "Failed to update vendor details");
                    }

                    // Update the spot list with the updated spot details
                    set((state) => ({
                        spots: state.spots.map((spot) =>
                            spot.id === spotId ? { ...spot, ...updatedData } : spot
                        ),
                    }));

                    showSimpleToast("vendor details updated successfully", "success");
                } catch (error: any) {
                    console.error("Error updating vendor details:", error.message);
                    set({ error: error.message, isLoading: false });
                    showSimpleToast(error.message || "Failed to update vendor details", "failed");
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
