import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
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
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
