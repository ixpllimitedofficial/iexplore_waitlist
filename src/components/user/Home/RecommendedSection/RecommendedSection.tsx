import Link from "next/link";
import AppButton from "@/components/UI/Button/AppButton";
import RecommendationsCard from "@/components/UI/Cards/RecommendedSectionCard";
import ArrowButtonRight from "@/assets/svg/ArrowButtonRight.svg";
import { Button } from "@/components/UI/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const RecommendedSection = () => {
  return (
    <section className="ml-8 mt-7 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-gold-500 text-xl md:text-2xl font-bold">
          Recommended Events
        </h1>
      </div>

      <div className="flex gap-5 overflow-x-scroll no-scrollbar whitespace-nowrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((card) => {
          return <RecommendationsCard key={card} />;
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

export default RecommendedSection;
