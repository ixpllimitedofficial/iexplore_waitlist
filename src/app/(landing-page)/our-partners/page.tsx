import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import OurPartners from "@/components/MainWebsite/OurPartners/OurPartners";
import Footer from "@/components/MainWebsite/Footer";

const page = () => {
  return (
    <>
      <MainDesktopAndMobileNav />
      <section className="relative p-16">
        <OurPartners />
      </section>

      <Footer />
    </>
  );
};

export default page;
