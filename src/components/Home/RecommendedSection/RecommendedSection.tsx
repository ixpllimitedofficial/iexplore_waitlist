import Link from "next/link";
import AppButton from "@/components/UI/Button/AppButton";
import RecommendationsCard from "@/components/UI/Cards/RecommendedSectionCard";
import ArrowButtonRight from "@/assets/svg/ArrowButtonRight.svg";

const RecommendedSection = () => {
  return (
    <section className="mx-3 md:mx-10 mt-10">
      <div className="flex items-center justify-between mb-7">
        <h1 className="text-[#E1BD8A] text-[22px] md:text-3xl font-bold">
          Events
        </h1>
        <Link href="/new-home/recommended">
          <AppButton
            btnText="See all"
            className="border-2 border-[#887254] text-sm md:text-xl"
            rightIcon={ArrowButtonRight}
          />
        </Link>
      </div>

      <div className="flex gap-5 overflow-x-scroll no-scrollbar whitespace-nowrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((card) => {
          return <RecommendationsCard key={card} />;
        })}
      </div>
    </section>
  );
};

export default RecommendedSection;
