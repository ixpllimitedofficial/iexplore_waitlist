import AddLocation from "@/components/user/AddLocation/AddLocation";
import SpotCategory from "@/components/user/AddLocation/SpotCategory";
import HeroSection from "@/components/user/Home/HeroSection/HeroSection";

const page = () => {
  return (
    <main className="mt-28">
      <HeroSection />

      <AddLocation />

      <SpotCategory />
    </main>
  );
};

export default page;
