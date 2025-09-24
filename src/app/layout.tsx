import type { Metadata } from "next";
import { manrope } from "./fonts";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import { Toaster } from "@/components/UI/toaster";
import AOSinit from "@/components/AOS";
import { AgeVerificationWrapper } from "@/components/MainWebsite/AgeVerification";

export const metadata: Metadata = {
  title: "iExplore",
  description: "Connect with places made for you to have fun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.className}>
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body>
        <AOSinit />
        <AgeVerificationWrapper>
          {children}
        </AgeVerificationWrapper>
        <Toaster />
        <ToastContainer />
      </body>
    </html>
  );
}
