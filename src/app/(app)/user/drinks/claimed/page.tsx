import ClaimedDrinksSection from "@/components/user/DrinksRoute/ClaimedDrinksSection";
import TopSearchBar from "@/components/user/DrinksRoute/TopSearchBar";

const page = () => {
  return (
    <>
      <TopSearchBar />
      <ClaimedDrinksSection />
    </>
  );
};

export default page;
