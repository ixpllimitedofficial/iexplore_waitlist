import Link from "next/link";
import { Button } from "@/components/UI/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import ClubCard from "./ClubCard";

const ClubsSection = () => {
  return (
    <section className="ml-8 mt-7 flex flex-col">
      <h1 className="text-2xl font-bold">Clubs</h1>

      <div className="mt-4 grid grid-col-1 lg:grid-cols-3 gap-5 pr-5 ">
        {[1, 2, 3, 4, 5, 6].map((card) => {
          return <ClubCard key={card} />;
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

export default ClubsSection;
