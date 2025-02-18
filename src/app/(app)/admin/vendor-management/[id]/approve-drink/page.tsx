"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";
import { adminActions } from "@/app/adminActions";

const ApproveDrinkPage = () => {
const { approveVendor } = adminActions();
    const { id } = useParams();
    const router = useRouter();
    const [status, setStatus] = useState("Pending");

    const getAdminToken = () => {
        const cookieValue = document.cookie
            .split("; ")
            .find((row) => row.startsWith("adminToken="));
        return cookieValue ? cookieValue.split("=")[1] : null;
    };

    const handleApprove = async () => {
        const token = getAdminToken();

        if (!token) {
            console.error("No admin token found. Please log in.");
            router.replace("/admin-login"); // Redirect to login if token is missing
            return;
        }

        if (id) {
            await approveVendor(id as string, token);
            router.push("/admin/vendor-management"); // Navigate back after approval
        }
    };


    return (
        <div className="bg-[#121212] min-h-screen p-6 lg:p-10 flex flex-col gap-6 text-white">
            {/* Header */}
            <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">Details Submitted</h2>
                <span
                    className={`px-6 py-1 rounded-full text-center font-normal ${status === "Pending" ? "bg-yellow-500 text-black" : "bg-green-500 text-white"
                        }`}
                >
                    {status.toLowerCase()}
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="bg-[#232323] border border-[#4D4D4D] rounded-2xl p-4 flex gap-4 items-start">
                    <Image
                        src={ProfileImage}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="text-xl font-bold">Kunle Jacob</h3>
                        <p className="text-sm text-gray-400">Joined 5 months ago</p>
                        <p className="text-sm text-gray-400">DOB: 04/09/1973</p>
                        <p className="text-sm text-gray-400">Category: Bar, Club</p>
                    </div>
                </div>

                {/* User Details */}
                <div className="bg-[#232323] border border-[#4D4D4D] rounded-2xl p-4">
                    <h3 className="text-lg font-bold mb-3">User Details</h3>
                    <p className="text-sm text-gray-400">Phone: +234 801 234 5678</p>
                    <p className="text-sm text-gray-400">
                        Address: 21, Mokola Rd, VI, Lagos state
                    </p>
                    <p className="text-sm text-gray-400">
                        Email: kunlejacob123@gmail.com
                    </p>
                </div>

                {/* Business Details */}
                <div className="bg-[#232323] border border-[#4D4D4D] rounded-2xl p-4">
                    <h3 className="text-lg font-bold mb-3">Business Details</h3>
                    <p className="text-sm text-gray-400">Spot Name: Club 77</p>
                    <p className="text-sm text-gray-400">City: Ikeja, Lagos state</p>
                    <p className="text-sm text-gray-400">
                        Email: kunlejacob123@gmail.com
                    </p>
                </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={handleApprove}
                  
                    className={`w-[80%] lg:w-[50%] text-lg font-bold py-2 px-6 rounded-full transition 
                            : "bg-[#FFD700] hover:bg-[#e6c200] text-black"
                        }`}
                >
                    {"Approve"}
                </button>
            </div>
        </div>
    );
};

export default ApproveDrinkPage;
