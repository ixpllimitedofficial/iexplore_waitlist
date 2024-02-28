import Footer from "@/components/UI/Footer/Footer";
import Analytics from "@/components/admin/Analytics";
import ContinueSetup from "@/components/admin/ContinueSetup";
import Drinks from "@/components/admin/Drinks";
import MySpots from "@/components/admin/MySpots";

const page = () => {
  return (
    <main className="mt-28">
      <ContinueSetup />
      <Analytics />
      <MySpots />
      <Drinks />
      <Footer />
    </main>
  );
};

export default page;
