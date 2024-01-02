import AddLocation from "@/components/AddLocation/AddLocation";
import SpotCategory from "@/components/AddLocation/SpotCategory";
import HeroSection from "@/components/Home/HeroSection/HeroSection";

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
