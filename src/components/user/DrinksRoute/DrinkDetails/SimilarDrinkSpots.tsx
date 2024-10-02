import Link from "next/link";
import { Button } from "@/components/UI/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import DrinkCard from "./DrinkCard";

const SimilarDrinkSpots = () => {
  return (
    <section className="mt-10 flex flex-col">
      <h1 className="text-2xl font-bold">More drinks at this spot</h1>

      <div className="mt-4 flex gap-5 overflow-x-scroll no-scrollbar whitespace-nowrap">
        {[1, 2, 3, 4, 5].map((card) => {
          return <DrinkCard key={card} />;
        })}
      </div>

      <Link href="/user/clubs" className="self-end mr-5 my-3">
        <Button
          className="bg-[#0E0E0E] transition duration-200 text-gold-500 border-2 border-gold-500 px-7 py-5 rounded-3xl font-bold text-base"
          type="submit"
        >
          See all
          <ArrowRightIcon />
        </Button>
      </Link>
    </section>
  );
};

export default SimilarDrinkSpots;
