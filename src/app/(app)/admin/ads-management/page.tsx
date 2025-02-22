'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AdProfile from "@/assets/svg/AdProfile.svg";
import AdsIconSvg from "@/assets/svg/AdminIconsSvg/AdsIconSvg.svg";
import { Button } from "@/components/UI/button";
import { useRouter } from "next/navigation";
import { adminStore } from "@/store/admin";

type TabKey = "all" | "running" | "pending" | "stopped";

const Page = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState<TabKey>("all");
    const [showModal, setShowModal] = useState(false);
    const [selectedAd, setSelectedAd] = useState<{ id: number; name: string } | null>(null);

    const isAdminLoggedin = adminStore((state) => state.isAdminLoggedin);
    const router = useRouter();

    useEffect(() => {
        // Redirect to login if admin is not logged in
        if (!isAdminLoggedin) {
            router.replace("/admin-login");
        }
    }, [isAdminLoggedin, router]);

    if (!isAdminLoggedin) {
        return <p>Loading...</p>;
    }

    const handleCreateAd = () => {
        router.push("/admin/ads-management/create-ad");
    };

    const divStyle =
        "flex items-center justify-between gap-2 xl:gap-4 bg-[#23232325] rounded-2xl border border-[#4D4D4D] w-full h-auto p-4 lg:px- min-h-[88px]";

    const statusColors: Record<"Running" | "Stopped" | "Pending", string> = {
        Running: "bg-[#008800]",
        Stopped: "bg-[#E50000]",
        Pending: "bg-[#FFD700]",
    };

    type AdStatus = "Running" | "Stopped" | "Pending";

    // Dummy ad data
    const adsData: Record<
        TabKey,
        { id: number; name: string; vendor: string; status: AdStatus; duration: string; plan: string }[]
    > = {
        all: [
            { id: 1, name: "DJ Maxx Party Hard", vendor: "club maxx", status: "Running", duration: "30 Days", plan: "premium Ad(15,0000)" },
            { id: 2, name: "DJ Maxx Party Hard", vendor: "maxx", status: "Stopped", duration: "30 Days", plan: "premium Ad(15,0000)" },
            { id: 3, name: "DJ Maxx Party Hard", vendor: "mexx", status: "Pending", duration: "30 Days", plan: "premium Ad(15,0000)" },
            { id: 4, name: "KDJ Maxx Party Hard", vendor: "club maxx", status: "Running", duration: "30 Days", plan: "premium Ad(15,0000)" },
            { id: 5, name: "DJ Maxx Party Hard", vendor: "club maxx", status: "Stopped", duration: "30 Days", plan: "premium Ad(15,0000)" },
            { id: 6, name: "DJ Maxx Party Hard", vendor: "club maxx", status: "Pending", duration: "30 Days", plan: "premium Ad(15,0000)" },
        ],
        running: [
            { id: 1, name: "DJ Maxx Party Hard", vendor: "club maxx", status: "Running", duration: "30 Days", plan: "premium Ad(15,0000)" },
            { id: 4, name: "DJ Maxx Party Hard", vendor: "club maxx", status: "Running", duration: "30 Days", plan: "premium Ad(15,0000)" },
        ],
        pending: [
            { id: 3, name: "DJ Maxx Party Hard", vendor: "club maxx", status: "Pending", duration: "30 Days", plan: "premium Ad(15,0000)" },
            { id: 6, name: "DJ Maxx Party Hard", vendor: "club maxx", status: "Pending", duration: "30 Days", plan: "premium Ad(15,0000)" },
        ],
        stopped: [
            { id: 2, name: "DJ Maxx Party Hard", vendor: "club maxx", status: "Stopped", duration: "30 Days", plan: "premium Ad(15,0000)" },
            { id: 5, name: "DJ Maxx Party Hard", vendor: "club maxx", status: "Stopped", duration: "30 Days", plan: "premium Ad(15,0000)" },
        ],
    };

    // Filter ads logic
    const filteredAd = adsData[activeTab].filter(
        (ad) =>
            ad.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ad.vendor.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleRemoveClick = (ad: { id: number; name: string }) => {
        setSelectedAd(ad);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedAd(null);
    };

    return (
        <div>
            {showModal && selectedAd && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                    <div className="bg-black rounded-2xl border border-gold-500 p-10 w-[70%] max-w-md">
                        <h2 className="text-xl font-bold mb-4 justify-center text-center">Remove Ad</h2>
                        <p className="text-center">Are you sure you want to remove this advert from ongoing campaign?</p>
                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                className="px-4 py-2 tex-black bg-gold-500 text-black font-semibold rounded-full"
                                onClick={() => {
                                    console.log(`Ad with ID ${selectedAd.id} removed`);
                                    handleCloseModal();
                                }}
                            >
                                Remove ad
                            </button>
                            <button
                                className="px-4 py-2 border border-gold-500 text-gold-500 font-semibold rounded-full"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {/* Card 1: Active Affiliates */}
                <div className={divStyle}>
                    <div className="flex items-center justify-center">
                        <Image
                            src={AdsIconSvg}
                            alt="People Icon"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <div className="flex-grow">
                        <p className="text-sm font-normal text-gray-300">Total Ads</p>
                        <p className="font-bold text-xl text-white">2,000</p>
                    </div>
                    <span className="bg-[#008800] border border-[#b4ddb4] px-1 py-1.5 rounded-full text-white font-normal text-xs whitespace-nowrap">
                        +16% this month
                    </span>
                </div>

                {/* Card 2: Total Affiliates */}
                <div className={divStyle}>
                    <div className="flex items-center justify-center">
                        <Image
                            src={AdsIconSvg}
                            alt="People Icon"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <div className="flex-grow">
                        <p className="text-sm font-normal text-gray-300">Running Ads</p>
                        <p className="font-bold text-xl text-white">2,000</p>
                    </div>
                    <span className="bg-[#E50000] border border-[#b4ddb4] px-2 py-1.5 rounded-full text-white font-normal text-xs whitespace-nowrap">
                        -2% last month
                    </span>
                </div>

                {/* Card 3: New Vendors */}
                <div className={divStyle}>
                    <div className="flex items-center justify-center">
                        <Image
                            src={AdsIconSvg}
                            alt="New Vendors Icon"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <div className="flex-grow">
                        <p className="text-sm font-normal text-gray-300">Pending Ads</p>
                        <p className="font-bold text-xl text-white">2,000</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center md:justify-end mt-6">
                <Button onClick={handleCreateAd} className="w-full md:w-auto px-6 py-2 bg-[#232323] rounded-2xl border border-[#4D4D4D] text-white text-sm font-medium hover:shadow-lg transition-shadow duration-300">
                    <p>Create new Ad</p>
                </Button>
            </div>

            <div className="mt-8">
                <div className="flex flex-col-reverse md:flex-row justify-between md:gap-5 items-center">
                    {/* Tab Navigation */}
                    <div className="overflow-x-auto w-full md:w-auto">
                        <div className="flex gap-2 my-4 lg:gap-4 whitespace-nowrap">
                            {["all", "running", "pending", "stopped"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab as TabKey)}
                                    className={`py-2 px-2 md:px-4 rounded-t-lg ${activeTab === tab
                                        ? "text-black bg-gold-500 border rounded-md border-[#4D4D4D]"
                                        : "text-gray-300 hover:text-white border rounded-md border-[#4D4D4D]"
                                        }`}
                                >
                                    {tab === "all" && "All Ads"}
                                    {tab === "running" && "Running Ads"}
                                    {tab === "pending" && "Pending Ads"}
                                    {tab === "stopped" && "Stopped Ads"}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full md:w-[30%] py-2 px-4 rounded-lg border border-[#4D4D4D] bg-white text-black focus:outline-none focus:ring focus:ring-[#4D4D4D]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Ads Display Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {filteredAd.map((ad) => (
                    <div
                        key={ad.id}
                        className="bg-[#23232325] border border-[#4D4D4D] rounded-2xl p-4 flex flex-row items-start gap-2"
                    >
                        <div>
                            <Image src={AdProfile} alt="" width={120} height={120} />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-sm font-bold text-white truncate-text whitespace-nowrap">
                                Ad Name: {ad.name}
                            </h3>
                            <h3 className="text-sm font-bold text-white truncate-text whitespace-nowrap">
                                Vendor: {ad.vendor}
                            </h3>
                            <h3 className="text-sm font-bold text-white truncate-text whitespace-nowrap">
                                Ad Duration: {ad.duration}
                            </h3>
                            <h3 className="text-sm font-bold text-white truncate-text whitespace-nowrap">
                                Ad Plan: {ad.plan}
                            </h3>

                            <div>
                                <span
                                    className={`w-full  px-10 py-2 space-y-5 text-sm font-semibold text-white rounded-full ${statusColors[ad.status]}`}
                                >
                                    Ad Status: {ad.status}
                                </span>
                                <div className="flex gap-4 mt-4">
                                    <button onClick={() => handleRemoveClick(ad)} className="px-4 py-2 bg-[#FFD700] text-black font-semibold rounded-full whitespace-nowrap">
                                        Remove Ad
                                    </button>

                                    {ad.status === "Running" && (
                                        <button className="px-4 py-2 bg-transparent border border-[#4D4D4D] text-white font-semibold rounded-full whitespace-nowrap">
                                            Stop Ad
                                        </button>
                                    )}
                                    {ad.status === "Stopped" && (
                                        <button className="px-4 py-2 bg-transparent border border-[#4D4D4D] text-white font-semibold rounded-full whitespace-nowrap">
                                            Resume Ad
                                        </button>
                                    )}
                                    {ad.status === "Pending" && (
                                        <button className="px-4 py-2 bg-transparent border border-[#4D4D4D] text-white font-semibold rounded-full whitespace-nowrap">
                                            Accept Ad
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;