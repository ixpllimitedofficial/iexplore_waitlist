import Link from "next/link";
import { anton } from "@/app/fonts";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import HeroSection from "@/components/MainWebsite/AboutUs/HeroSection";
import OurGoals from "@/components/MainWebsite/AboutUs/OurGoals";
import Footer from "@/components/MainWebsite/Footer";
import VendorsPartners from "@/components/MainWebsite/AboutUs/VendorsPartners";
import Features from "@/components/MainWebsite/AboutUs/Features";

const page = () => {
  return (
    <>
      <MainDesktopAndMobileNav />
      <section className="relative px-2 md:px-16 pt-28 md:pt-32">
        <h1
          className={`text-gold-500 text-5xl md:text-6xl ${anton.className} text-center md:text-start`}
        >
          ABOUT US
        </h1>

        <HeroSection />
        <Features />
        <OurGoals />
        <VendorsPartners />
      </section>

      <Footer />
    </>
  );
};

export default page;
