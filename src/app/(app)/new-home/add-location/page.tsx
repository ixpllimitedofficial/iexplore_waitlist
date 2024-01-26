import AddLocation from "@/components/App/AddLocation/AddLocation";
import SpotCategory from "@/components/App/AddLocation/SpotCategory";
import HeroSection from "@/components/App/Home/HeroSection/HeroSection";

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
