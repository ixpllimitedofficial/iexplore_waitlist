import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import AppSearchInput from "@/components/UI/Inputs/AppSearchInput";

const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-20 px-5">
        <AppSearchInput
          className="bg-[#4D4D4D66] text-gold-500 border-none focus-visible:ring-0 flex-grow"
          inputClass="placeholder:text-[#B0B0B0] placeholder:text-lg"
        />

        <div className="flex flex-col md:flex-row gap-3">
          <Select>
            <SelectTrigger className="px-10 py-5 bg-[#4D4D4D66] text-[#B0B0B0] text-lg border-none focus-visible:ring-0">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
             <SelectContent className="">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="px-10 py-5 bg-[#4D4D4D66] text-[#B0B0B0] text-lg border-none focus-visible:ring-0">
              <SelectValue placeholder="Ratings" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
