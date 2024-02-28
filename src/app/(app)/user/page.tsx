import HeroSection from "@/components/App/Home/HeroSection/HeroSection";
import Filtering from "@/components/App/Home/Filtering/Filtering";
import Clubs from "@/components/App/Home/Clubs/Clubs";
import RecommendedSection from "@/components/App/Home/RecommendedSection/RecommendedSection";
import GetApp from "@/components/App/Home/GetApp/GetApp";
import FriendlySpots from "@/components/App/Home/FriendlySpots/FriendlySpots";
import AddLocation from "@/components/App/Home/AddLocation/AddLocation";
import Footer from "@/components/UI/Footer/Footer";

const page = () => {
  return (
    <main className="mt-28">
      <HeroSection />
      <Filtering />
      <Clubs />
      <RecommendedSection />
      <GetApp />
      <Clubs />
      <FriendlySpots />
      <AddLocation />
      <Footer />
    </main>
  );
};

export default page;
