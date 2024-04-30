import ClubCard from "@/components/UI/Cards/ClubCard";
import AppSearchInput from "@/components/UI/Inputs/AppSearchInput";

const ClubsPage = () => {
  return (
    <section>
      <h1 className="text-gold-500 text-3xl font-bold w-[90vw] mx-auto">
        Clubs
      </h1>

      <AppSearchInput />

      <div className="flex flex-wrap justify-around mt-14 w-[80vw] mx-auto gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((card) => {
          return <ClubCard key={card} />;
        })}
      </div>
    </section>
  );
};

export default ClubsPage;
