import Link from "next/link";
import { anton } from "@/app/fonts";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import OurGoals from "@/components/MainWebsite/AboutUs/OurGoals";
import Footer from "@/components/MainWebsite/Footer";
import VendorsPartners from "@/components/MainWebsite/AboutUs/VendorsPartners";
import Features from "@/components/MainWebsite/AboutUs/Features";
import HeroSection from "@/components/MainWebsite/ContactUs/HeroSection";

const page = () => {
  return (
    <>
      <MainDesktopAndMobileNav />
      <section className="relative px-2 md:px-16 pt-28 md:pt-32">
        <h1
          className={`text-gold-500 text-5xl md:text-6xl ${anton.className} text-center md:text-start`}
        >
          CONTACT US
        </h1>

        <HeroSection />
      </section>

      <Footer />
    </>
  );
};

export default page;
