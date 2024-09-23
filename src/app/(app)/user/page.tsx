import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import AppSearchInput from "@/components/UI/Inputs/AppSearchInput";

const page = () => {
  return (
    <section className="pt-5">
      <div className="flex items-center gap-20 px-5">
        <AppSearchInput
          className="bg-[#4D4D4D66] text-gold-500 border-none focus-visible:ring-0 flex-grow"
          inputClass="placeholder:text-[#B0B0B0] placeholder:text-sm"
        />

        <div className="flex gap-3">
          <Select>
            <SelectTrigger className="px-10 bg-[#4D4D4D66] text-[#B0B0B0] border-none focus-visible:ring-0">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="px-10 bg-[#4D4D4D66] text-[#B0B0B0] border-none focus-visible:ring-0">
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

export default page;
