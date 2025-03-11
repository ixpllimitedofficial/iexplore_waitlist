'use client'

import { ChevronLeft } from "lucide-react";
import React from "react";
import { useRouter } from 'next/navigation';

const AdCheckout = () => {
    const router = useRouter();
    
    // Hardcoded values
    const price = 25000;
    const duration = "30 Days";

    return (
        <div className="min-h-screen bg-transparent p-4 md:p-6">
            {/* Header Section */}
            <div className="flex items-center gap-[25%] md:gap-[40%] mb-4">
                <div
                    className="bg-[#4D4D4D] rounded-md p-2 cursor-pointer flex-shrink-0"
                    onClick={() => router.back()}
                >
                    <ChevronLeft size={24} className="text-white md:size-[32]" />
                </div>
                <h1 className="text-xl md:text-3xl font-bold text-white">Ad Checkout</h1>
            </div>

            <div className="flex flex-col justify-center items-center">

                <div className="w-full md:w-[465px] space-y-5 bg-[#33333399] p-4 mb-6 rounded-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg md:text-xl font-bold">Premium Plan</h2>
                        <p className="text-base md:text-lg">
                            Price: ₦{price.toLocaleString()}
                        </p>
                    </div>
                    <p className="py-2 px-4 border text-center rounded-full w-full">
                        {duration}
                    </p>
                </div>

                <h2 className="text-lg md:text-2xl font-bold mb-4">Payment method</h2>
                <div className="w-full md:w-[465px]">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-base md:text-lg font-bold mb-2 self-start">
                            Pay with bank transfer
                        </h3>
                        <div className="w-full bg-[#33333399] p-4 space-y-4 rounded my-5">
                            <div className="flex justify-between items-center">
                                <p>Amount:</p>
                                <span>₦{price.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Bank name:</p>
                                <span>Sterling Bank</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Account number:</p>
                                <span>123-456-7890</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Account name:</p>
                                <span>iExplore Promotion</span>
                            </div>
                        </div>
                        <div className="mt-3 text-sm space-y-2">
                            <span className="text-yellow-500 text-base">Instructions:</span>
                            <p>1. Please transfer money to this account through ATM, Bank app, etc.</p>
                            <p>2. Click  I have made this bank transfer  after making the transfer.</p>
                            <p>3. Payment usually takes 30 minutes or less to be confirmed.</p>
                        </div>
                    </div>
                </div>
                <button className="w-full md:w-[465px] bg-yellow-500 text-black font-bold py-3 rounded-full mt-4">
                    I have made this bank transfer
                </button>

                {/* Card Payment Section */}
                <div className="w-full md:w-[465px] mt-6">
                    <h3 className="text-base md:text-lg font-bold mb-2">Pay with card</h3>
                    <p className="text-sm text-gray-400 mb-4">Please enter your card details</p>

                    {/* Card Number Input */}
                    <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full bg-[#33333399] text-gray-300 placeholder-gray-500 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6"
                    />

                    {/* Card Details (Expiry and CVV) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full bg-[#33333399] text-gray-300 placeholder-gray-500 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <input
                            type="text"
                            placeholder="123"
                            className="w-full bg-[#33333399] text-gray-300 placeholder-gray-500 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    {/* Pay Button */}
                    <button className="mt-6 w-full bg-yellow-500 text-gray-900 font-semibold text-lg py-2 rounded-full shadow hover:bg-yellow-400 transition-colors">
                        Pay ₦{price.toLocaleString()}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdCheckout;