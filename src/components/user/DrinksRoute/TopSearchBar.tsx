import AppSearchInput from "@/components/UI/Inputs/AppSearchInput";
import { Button } from "@/components/UI/button";

const TopSearchBar = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20 px-5">
        <AppSearchInput
          className="bg-[#4D4D4D66] text-gold-500 border-none focus-visible:ring-0 flex-grow w-full"
          inputClass="placeholder:text-[#B0B0B0] placeholder:text-lg"
        />

        <div className="flex flex-row gap-3">
          <Button className="bg-[#4D4D4D66] text-[#B0B0B0] hover:bg-gold-500 hover:text-brandDark transition duration-200 px-5 md:px-10 py-5 rounded-3xl font-bold text-lg">
            Drinks for you
          </Button>

          <Button className="bg-[#4D4D4D66] text-[#B0B0B0] hover:bg-gold-500 hover:text-brandDark transition duration-200 px-5 md:px-10 py-5 rounded-3xl font-bold text-lg">
            Claimed drinks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopSearchBar;
