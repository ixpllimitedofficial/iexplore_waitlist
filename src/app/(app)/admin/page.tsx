import Footer from "@/components/UI/Footer/Footer";
import Analytics from "@/components/admin/Analytics";
import MySpots from "@/components/admin/MySpots";

const page = () => {
  return (
    <main className="mt-28">
      <Analytics />
      <MySpots />
      <Footer />
    </main>
  );
};

export default page;
