import Image from "next/image";
import HomeImage from "@/assets/img/HomeImage.png";
import Clubs from "./Clubs/Clubs";
import Recommendations from "./Recommendations/Recommendations";
import FriendlySpots from "./FriendlySpots/FriendlySpots";
import Category from "./Category/Category";
import Location from "./Location/Location";
import Ratings from "./Ratings/Ratings";
import Filtering from "./Filtering/Filtering";

const Home = () => {
  return (
    <main className="pt-8">
      <Image
        src={HomeImage}
        alt="home image"
        className="mb-12 w-[90vw] h-auto mx-auto"
      />

      <Filtering />

      {/* clubs */}
      <Clubs />

      {/* recommendations */}
      <Recommendations />

      {/* FriendlySpots */}
      <FriendlySpots />
    </main>
  );
};

export default Home;
