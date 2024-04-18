import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const myFont = localFont({
//   src: [
//     {
//       path: "../../public/fonts/NeueMontreal-Light.otf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/NeueMontreal-LightItalic.otf",
//       weight: "300",
//       style: "italic",
//     },
//     {
//       path: "../../public/fonts/NeueMontreal-Regular.otf",
//       weight: "450",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/NeueMontreal-Italic.otf",
//       weight: "450",
//       style: "italic",
//     },
//     {
//       path: "../../public/fonts/NeueMontreal-Medium.otf",
//       weight: "530",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/NeueMontreal-MediumItalic.otf",
//       weight: "530",
//       style: "italic",
//     },
//     {
//       path: "../../public/fonts/NeueMontreal-Bold.otf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/NeueMontreal-BoldItalic.otf",
//       weight: "800",
//       style: "italic",
//     },
//   ],
//   variable: "--font-neue",
// });

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
        {children}
      </body>
    </html>
  );
}
