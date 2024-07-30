import type { Metadata } from "next";
import { manrope } from "./fonts";
import "./globals.css";

import { ToastContainer } from "react-toastify";

import MainDesktopAndMobileNav from "@/components/MainPage/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import Footer from "@/components/MainPage/Footer/Footer";

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
        <MainDesktopAndMobileNav />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
