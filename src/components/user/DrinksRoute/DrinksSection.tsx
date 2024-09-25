import Link from "next/link";
import { Button } from "@/components/UI/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import DrinkCard from "./DrinkCard";

const DrinksSection = () => {
  return (
    <section className="ml-8 mt-7 flex flex-col">
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pr-5 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => {
          return <DrinkCard key={card} />;
        })}
      </div>

      {/* <Link href="/user/clubs" className="self-end mr-5 my-3"> */}
      <Button className="bg-[#0E0E0E] transition duration-200 text-gold-500 border-2 border-gold-500 px-7 py-5 rounded-3xl font-bold text-base my-3 self-start">
        See all
        <ArrowRightIcon />
      </Button>
      {/* </Link> */}
    </section>
  );
};

export default DrinksSection;
