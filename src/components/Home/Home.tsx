import Clubs from "./Clubs/Clubs";
import Recommendations from "./Recommendations/Recommendations";
import FriendlySpots from "./FriendlySpots/FriendlySpots";
import Filtering from "./Filtering/Filtering";
import HeroSection from "./HeroSection/HeroSection";
import GetApp from "./GetApp/GetApp";

const Home = () => {
  return (
    <main className="pt-8">
      {/* hero section */}
      <HeroSection />

      {/* filtering */}
      <Filtering />

      {/* clubs */}
      <Clubs />

      {/* recommendations */}
      <Recommendations />

      {/* get app */}
      <GetApp />

      {/* clubs */}
      <Clubs />

      {/* FriendlySpots */}
      <FriendlySpots />
    </main>
  );
};

export default Home;
