import AllVendors from "@/components/MainWebsite/AllVendors/AllVendors";
import Footer from "@/components/MainWebsite/Footer";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";

const page = () => {
  return (
    <>
      <MainDesktopAndMobileNav />
      <section className="relative p-16">
        <AllVendors />
      </section>

      <Footer />
    </>
  );
};

export default page;
