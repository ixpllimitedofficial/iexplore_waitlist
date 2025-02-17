'use client'

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { useTimer } from "react-timer-hook";
import { toast } from "@/components/UI/use-toast";
import { Button } from "@/components/UI/button";
import { Eye, EyeOff } from 'lucide-react';

const VerifyUserOTP = () => {
    const router = useRouter();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [showOtp, setShowOtp] = useState(false); //otp visibility

    const time = new Date();
    time.setSeconds(time.getSeconds() + 300); // 5 minutes timer

    const handleOtpChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Auto-focus next input
            if (value && index < 5) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                nextInput?.focus();
            }
        }
    };

    const verifyOTP = async () => {
        const otpCode = otp.join('');

        if (otpCode.length !== 6) {
            toast({
                title: "Error",
                description: "Please enter complete OTP code",
                variant: "destructive",
            });
            return;
        }
        setLoading(true)
        try {
            // Endpoint path
            const response = await fetch('http://localhost:8080/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp: otpCode }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Verification failed');
            }

            toast({
                title: "Success",
                description: "OTP verified successfully",
                variant: "success",
            });

            // Navigate to next page on success
            router.push('/reset-password');

        } catch (error) {
            toast({
                title: "Error",
                description: "something went wrong",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center px-4">

            <div className="flex flex-col items-center gap-4 ">

                <div className="flex gap-2 mt-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type={showOtp ? "text" : "password"}
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            className="w-12 h-12 text-xl text-center rounded-lg bg-[#4D4D4D] border border-[#4D4D4D]"
                        />
                    ))}
                    <div
                        onClick={() => setShowOtp(!showOtp)}
                        className='right-0 top-0 mt-1 mr-2 cursor-pointer text-gray-400'
                    >
                        {showOtp ? <EyeOff size={24} /> : <Eye size={24} />}
                    </div>
                </div>

                <MyTimer expiryTimestamp={time} />

                <Button
                    onClick={verifyOTP}
                    disabled={loading}
                    className="w-full max-w-md bg-[#FFB800] hover:bg-[#FFB800] text-[#322016] rounded-full py-4 mt-4 font-bold"
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-[#322016]" viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                ></path>
                            </svg>
                            Verifying...
                        </span>
                    ) : (
                        'Continue'
                    )}
                </Button>
            </div>
        </div>
    );
};

function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
    const { seconds, minutes } = useTimer({
        expiryTimestamp,
        onExpire: () => console.warn("Time expired"),
    });

    return (
        <div className="text-center mt-4">
            <p className="text-[#FFB800]">
                Resend code: <span className="text-white">
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </span>
            </p>
        </div>
    );
}

export default VerifyUserOTP;
