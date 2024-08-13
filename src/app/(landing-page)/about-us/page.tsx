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
      <section className="relative px-16 pt-32">
        <div className="flex items-center justify-between">
          <h1
            className={`text-gold-500 text-5xl md:text-6xl ${anton.className} `}
          >
            ABOUT US
          </h1>

          {/* <Link
            href="/"
            className="bg-gold-500 text-brandDark px-4 py-2 rounded-3xl flex items-center gap-1"
          >
            Back to website
            <ArrowRightIcon className="h-6 w-6" />
          </Link> */}
        </div>

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
