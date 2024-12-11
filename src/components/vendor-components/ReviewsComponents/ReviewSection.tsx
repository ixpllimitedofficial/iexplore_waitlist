import DrinkCard from "./ReviewCard";
import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/UI/button";

const ReviewSection = () => {
  return (
    <section className="md:ml-8 flex flex-col mt-5">
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pr-5 ">
        {[1, 2, 3, 4, 5, 6].map((card) => {
          return <DrinkCard key={card} />;
        })}
      </div>
      <Link href="/vendor-Home/spots" className="self-center my-10">
        <Button
          className="bg-[#0E0E0E] transition duration-200 text-gold-500 border-2 border-gold-500 px-7 py-5 rounded-2xl font-bold text-base"
          type="submit"
        >
          Show all reviews
        </Button>
      </Link>
    </section>
  );
};

export default ReviewSection;
