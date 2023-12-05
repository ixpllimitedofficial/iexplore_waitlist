import Image from "next/image";
import HomeImage from "@/assets/img/HomeImage.png";
import FilterButton from "../UI/Button/FilterButton";
import Clubs from "./Clubs/Clubs";
import Recommendations from "./Recommendations/Recommendations";
import FriendlySpots from "./FriendlySpots/FriendlySpots";
import Category from "./Category/Category";

const Home = () => {
  return (
    <main className="pt-8">
      <Image
        src={HomeImage}
        alt="home image"
        className="mb-12 w-[90vw] h-auto mx-auto"
      />

      <section className="flex gap-10 justify-center mx-10">
        <FilterButton btnText="Category" />
        <FilterButton btnText="Location" />
        <FilterButton btnText="Ratings" />
      </section>

      <Category />

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
