import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NeueMontreal from "next/font/local";
import "./globals.css";
import AppNavbar from "@/components/UI/Navbar/AppNavbar/AppNavbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const myFont = NeueMontreal({ src: [
//   {
//     path: '../assets/font/NeueMontreal-Regular.otf',
//     weight: '400',
//     style: 'normal',
//   },
//   {
//     path: '../assets/font/NeueMontreal-Light.otf',
//     weight: '300',
//     style: 'light',
//   },
//   {
//     path: '../assets/font/NeueMontreal-LightItalic.otf',
//     weight: '300',
//     style: 'lightItalic',
//   },
//   {
//     path: '../assets/font/NeueMontreal-Italic.otf',
//     weight: '400',
//     style: 'italic',
//   },
//   {
//     path: '../assets/font/NeueMontreal-Medium.otf',
//     weight: '500',
//     style: 'medium',
//   },
//   {
//     path: '../assets/font/NeueMontreal-MediumItalic.otf',
//     weight: '500',
//     style: 'mediumItalic',
//   },
//   {
//     path: '../assets/font/NeueMontreal-Bold.otf',
//     weight: '700',
//     style: 'bold',
//   },
//   {
//     path: '../assets/font/NeueMontreal-BoldItalic.otf',
//     weight: '700',
//     style: 'boldItalic',
//   },
// ], })

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
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
