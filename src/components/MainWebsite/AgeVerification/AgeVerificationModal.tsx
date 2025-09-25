"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { anton } from "@/app/fonts";
import iExploreLogo from "@/assets/img/iExploreLogo.png";

interface AgeVerificationModalProps {
  onVerified: () => void;
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ onVerified }) => {
  const [birthYear, setBirthYear] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleVerification = () => {
    if (!birthYear) {
      setError("Please enter your birth year");
      return;
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(birthYear);

    if (age < 18) {
      setError("You must be 18 or older to access iExplore");
      return;
    }

    // Store verification in localStorage if remember me is checked
    if (rememberMe) {
      localStorage.setItem("iexplore_age_verified", "true");
      localStorage.setItem("iexplore_verification_date", Date.now().toString());
    }

    onVerified();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleVerification();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-black/80 backdrop-blur-md border border-gold-500/20 rounded-2xl p-6 md:p-8 max-w-sm w-full max-h-[85vh] overflow-y-auto text-center shadow-xl">
        {/* Logo */}
        <div className="mb-6">
          <Image 
            src={iExploreLogo} 
            alt="iExplore Logo" 
            width={60} 
            height={60} 
            className="mx-auto mb-3"
          />
          <h1 className={`text-gold-500 text-xl md:text-2xl font-bold ${anton.className}`}>
            iExplore
          </h1>
          <p className="text-gold-500/80 text-xs mt-1">Your Nightlife Companion</p>
        </div>

        {/* Age Verification Content */}
        <div className="mb-6">
          <h2 className="text-[#F2F1E8] text-lg md:text-xl font-bold mb-3">
            Welcome to the Night Scene
          </h2>
          <p className="text-[#D1D1D1] mb-4 text-sm leading-relaxed">
            You must be 18 or older to explore nightlife venues, events, and experiences on iExplore.
          </p>
          <p className="text-[#D1D1D1] mb-4 font-semibold text-sm">
            Please enter your birth year to continue
          </p>

          {/* Birth Year Input */}
          <div className="mb-4">
            <input
              type="number"
              placeholder="YYYY (e.g., 1995)"
              value={birthYear}
              onChange={(e) => {
                setBirthYear(e.target.value);
                setError("");
              }}
              onKeyPress={handleKeyPress}
              className="w-full px-3 py-2 bg-[#FFFFFF1A] border border-gold-500/50 rounded-lg text-[#F2F1E8] placeholder-[#666] focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500/20 text-center text-base"
              min="1900"
              max={new Date().getFullYear()}
            />
            {error && (
              <p className="text-red-400 text-xs mt-1">{error}</p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-center mb-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="hidden"
              />
              <div className={`w-4 h-4 border-2 border-gold-500 rounded mr-2 flex items-center justify-center ${
                rememberMe ? 'bg-gold-500' : 'bg-transparent'
              }`}>
                {rememberMe && (
                  <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-[#D1D1D1] text-xs">Remember me on this device</span>
            </label>
          </div>

          {/* Warning Text */}
          <p className="text-[#999] text-xs mb-4 leading-relaxed">
            Don't check this if you're using a shared or public computer accessible by people under 18.
          </p>

          {/* Enter Button */}
          <button
            onClick={handleVerification}
            className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold py-2.5 px-4 rounded-lg transition-all duration-300 text-sm"
          >
            Enter iExplore
          </button>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gold-500/20 pt-4 mt-4">
          <p className="text-[#999] text-xs leading-relaxed">
            By entering this site, you agree to our{" "}
            <a href="/legal/terms-of-use" className="text-gold-500 hover:text-gold-400 underline">
              Terms & Conditions
            </a>
            {" "}and{" "}
            <a href="/legal/privacy-policy" className="text-gold-500 hover:text-gold-400 underline">
              Privacy Policy
            </a>
            .
          </p>
          <p className="text-[#999] text-xs mt-1">
            iExplore promotes responsible nightlife experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationModal;