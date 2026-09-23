"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AgeVerificationModal from "./AgeVerificationModal";

interface AgeVerificationWrapperProps {
  children: React.ReactNode;
}

const AgeVerificationWrapper: React.FC<AgeVerificationWrapperProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const skipAgeGate =
    pathname?.startsWith("/legal") ||
    pathname?.startsWith("/spot") ||
    pathname?.startsWith("/event") ||
    pathname?.startsWith("/profile") ||
    pathname?.startsWith("/feeds") ||
    pathname?.startsWith("/drinks") ||
    pathname?.startsWith("/make-reservation") ||
    pathname?.startsWith("/.well-known");

  useEffect(() => {
    const checkPreviousVerification = () => {
      const verified = localStorage.getItem("iexplore_age_verified");
      const verificationDate = localStorage.getItem(
        "iexplore_verification_date",
      );

      if (verified === "true" && verificationDate) {
        const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
        const isVerificationValid =
          Date.now() - parseInt(verificationDate) < thirtyDaysInMs;

        if (isVerificationValid) {
          setIsVerified(true);
        } else {
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

  if (skipAgeGate) {
    return <>{children}</>;
  }

  if (isLoading) {
    return null;
  }

  if (!isVerified) {
    return <AgeVerificationModal onVerified={handleVerified} />;
  }

  return <>{children}</>;
};

export default AgeVerificationWrapper;