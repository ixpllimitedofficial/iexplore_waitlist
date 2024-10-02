import TopSearchBar from "@/components/user/HomeRoute/TopSearchBar";
import Clubs from "@/components/user/HomeRoute/Clubs";
import EventsSection from "@/components/user/HomeRoute/EventsSection";

const page = () => {
  return (
    <>
      <TopSearchBar />
      <Clubs />
      <Clubs />

      <section className="ml-4 lg:ml-8 mt-7 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-gold-500 text-xl md:text-2xl font-bold">
            Recommended Events
          </h1>
        </div>
        <EventsSection />
      </section>

      <Clubs />
      <Clubs />

      <section className="ml-4 lg:ml-8 mt-7 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-gold-500 text-xl md:text-2xl font-bold">
            Iexplore spots this week
          </h1>
        </div>
      </section>
    </>
  );
};

export default page;
