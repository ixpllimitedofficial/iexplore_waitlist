"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AgeVerificationModal from "./AgeVerificationModal";

interface AgeVerificationWrapperProps {
  children: React.ReactNode;
}

const AgeVerificationWrapper: React.FC<AgeVerificationWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Skip age verification for legal pages
  const isLegalPage = pathname?.startsWith("/legal");

  useEffect(() => {
    // Check if user was previously verified
    const checkPreviousVerification = () => {
      const verified = localStorage.getItem("iexplore_age_verified");
      const verificationDate = localStorage.getItem("iexplore_verification_date");
      
      if (verified === "true" && verificationDate) {
        // Check if verification is less than 30 days old
        const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
        const isVerificationValid = Date.now() - parseInt(verificationDate) < thirtyDaysInMs;
        
        if (isVerificationValid) {
          setIsVerified(true);
        } else {
          // Clear expired verification
          localStorage.removeItem("iexplore_age_verified");
          localStorage.removeItem("iexplore_verification_date");
        }
      }
      
      setIsLoading(false);
    };

    checkPreviousVerification();
  }, []);

  const handleVerified = () => {
    setIsVerified(true);
  };

  // Skip age verification for legal pages
  if (isLegalPage) {
    return <>{children}</>;
  }

  if (isLoading) {
    // Loading state - could be a spinner or nothing
    return null;
  }

  if (!isVerified) {
    return <AgeVerificationModal onVerified={handleVerified} />;
  }

  return <>{children}</>;
};

export default AgeVerificationWrapper;