import Image from "next/image";
import HomeImage from "@/assets/img/HomeImage.png";

const Home = () => {
  return (
    <main>
      <Image src={HomeImage} alt="home image" className="my-8 w-[90vw] h-auto mx-auto" />
    </main>
  );
};

export default Home;
