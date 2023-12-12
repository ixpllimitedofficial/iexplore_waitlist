import RecommendedEventsCard from "../UI/Cards/RecommendedEvents/RecommendedEventsCard";

const RecommendedEvents = () => {
  return (
    <section className="py-10">
      <h1 className="text-[#E1BD8A] text-3xl font-bold w-[85vw] mx-auto">
        Recommended events
      </h1>

      {[1, 2, 3].map((card) => {
        return <RecommendedEventsCard key={card} />;
      })}
    </section>
  );
};

export default RecommendedEvents;
