import HeroSection from "@/components/user/Home/HeroSection/HeroSection";
import Filtering from "@/components/user/Home/Filtering/Filtering";
import Clubs from "@/components/user/Home/Clubs/Clubs";
import RecommendedSection from "@/components/user/Home/RecommendedSection/RecommendedSection";
import GetApp from "@/components/user/Home/GetApp/GetApp";
import FriendlySpots from "@/components/user/Home/FriendlySpots/FriendlySpots";
import AddLocation from "@/components/user/Home/AddLocation/AddLocation";
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
