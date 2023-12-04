import Image from "next/image";
import HomeImage from "@/assets/img/HomeImage.png";
import FilterButton from "../UI/Button/FilterButton";

const Home = () => {
  return (
    <main className="pt-8 pb-12">
      <Image
        src={HomeImage}
        alt="home image"
        className="mb-12 w-[90vw] h-auto mx-auto"
      />

      <section className="flex gap-10 justify-center">
        <FilterButton btnText="Category" />
        <FilterButton btnText="Location" />
        <FilterButton btnText="Ratings" />
      </section>
    </main>
  );
};

export default Home;
