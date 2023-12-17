import type { Metadata } from "next";
import Footer from "@/components/UI/Footer/Footer";

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
    <>
      {children}

      <Footer />
    </>
  );
}
