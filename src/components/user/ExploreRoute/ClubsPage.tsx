import ClubCard from "./ClubCard";


const ClubsPage = () => {
  return (
    <section className="">
      <div>
        <h1 className="text-center text-3xl font-bold mx-auto">Clubs</h1>
      </div>

      <div className="flex flex-wrap justify-around mt-5 w-[80vw] mx-auto gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((card) => {
          return <ClubCard key={card} />;
        })}
      </div>
    </section>
  );
};

export default ClubsPage;
