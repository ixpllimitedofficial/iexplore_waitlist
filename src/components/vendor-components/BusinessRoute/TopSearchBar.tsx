import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/UI/select";
  import AppSearchInput from "@/components/UI/Inputs/AppSearchInput";
  
  const TopSearchBar = () => {
    return (
      <section>
        <div className=" mt-24 border border-white rounded-full md:border-none md:mt-0 overflow-hidden">
          <AppSearchInput
            className="bg-[#4D4D4D66] text-gold-500 border-none focus-visible:ring-0 w-full md:w-[70%] rounded-2xl mx-auto"
            inputClass="placeholder:text-[#B0B0B0] placeholder:text-lg"
          />
        </div>
      </section>
    );
  };
  
  export default TopSearchBar;
  