import DrinkCard from "./DrinkCard";

const DrinksSection = () => {
  return (
    <section className="ml-8 mt-7 flex flex-col">
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pr-5 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => {
          return <DrinkCard key={card} />;
        })}
      </div>
    </section>
  );
};

export default DrinksSection;
