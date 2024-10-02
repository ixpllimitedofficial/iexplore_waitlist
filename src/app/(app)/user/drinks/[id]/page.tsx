import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import DrinkDetails from "@/components/user/DrinksRoute/DrinkDetails/DrinkDetails";
import SimilarDrinkSpots from "@/components/user/DrinksRoute/DrinkDetails/SimilarDrinkSpots";

const page = () => {
  return (
    <section className="px-7 mt-7">
      <div className="flex items-center">
        <Link href="/user/drinks">
          <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
        </Link>

        <div className="flex justify-center items-center gap-3 w-full">
          <p className=" font-bold text-3xl">Johnnie Walker Black Label</p>
        </div>
      </div>

      <DrinkDetails />
      <SimilarDrinkSpots />
    </section>
  );
};

export default page;
