import Link from "next/link";
import { anton } from "@/app/fonts";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import Footer from "@/components/MainWebsite/Footer";
import HeroSection from "@/components/MainWebsite/Blogs/HeroSection";
import MoreBlogs from "@/components/MainWebsite/Blogs/MoreBlogs";

const page = () => {
  return (
    <>
      <MainDesktopAndMobileNav />
      <section className="relative px-2 md:px-16 py-28">
        <h1
          className={`text-gold-500 text-4xl md:text-5xl ${anton.className} text-center md:text-start`}
        >
          BLOG & UPDATES
        </h1>

        <HeroSection />
      </section>
      <MoreBlogs />

      <Footer />
    </>
  );
};

export default page;
