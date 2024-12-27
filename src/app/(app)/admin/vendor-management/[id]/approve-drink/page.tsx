
"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";

const ApproveDrinkPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const [status, setStatus] = useState("Pending");

    const handleApprove = () => {
        setStatus("Approved");
        // Add API call logic here
    };

    return (
        <div className="bg-[#121212] min-h-screen p-6 lg:p-10 flex flex-col gap-6 text-white">
            {/* Header */}


            {/* Details Submitted Section */}
            <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">Details Submitted</h2>
                <span className="px-6 py-1 bg-yellow-500 rounded-full text-center font normal text-black">pending</span>
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
                    className="w-[80%] lg:w-[50%] bg-[#FFD700] hover:bg-[#e6c200] text-black text-lg font-bold py-2 px-6 rounded-full transition"
                >
                    Approve
                </button>

            </div>
        </div>
    );
};

export default ApproveDrinkPage;
