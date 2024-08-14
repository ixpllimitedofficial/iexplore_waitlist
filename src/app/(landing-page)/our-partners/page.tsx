import { anton } from "@/app/fonts";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import OurPartners from "@/components/MainWebsite/OurPartners/OurPartners";
import Footer from "@/components/MainWebsite/Footer";

const page = () => {
  return (
    <>
      <MainDesktopAndMobileNav />
      <section className="relative px-3 md:px-16 pt-28 md:pt-32">
        <h1
          className={`text-gold-500 text-5xl md:text-6xl ${anton.className} text-center md:text-start`}
        >
          OUR PARTNERS
        </h1>
        <p className="mt-3 text-lg text-[#F6F6F6] text-center md:text-start md:w-2/5">
          Take a look at some of your favorite brands and spots partnering with
          us to bring the best nightlife experience to you
        </p>

        <OurPartners />
      </section>
      <Footer />
    </>
  );
};

export default page;
