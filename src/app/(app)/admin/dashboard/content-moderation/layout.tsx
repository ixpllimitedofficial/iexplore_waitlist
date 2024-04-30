import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import AddDrinkDialog from "@/components/admin/ContentModeration/AddDrinkDialog";
import ProfileCard from "@/components/UI/AdminUI/Cards/ProfileCard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
        <p className="self-start lg:self-center font-bold text-2xl">
          Content Moderation
        </p>

        <ProfileCard />
      </header>

      <div className="flex justify-between items-center w-full my-5">
        <Select>
          <SelectTrigger className="w-auto bg-[#F7D098] text-[#1A1A1A] border-none focus-visible:ring-0">
            <SelectValue placeholder="Drinks" className="font-bold" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="Drinks">Drinks</SelectItem>
            <SelectItem value="venue">Venue</SelectItem>
          </SelectContent>
        </Select>

        <AddDrinkDialog />
      </div>

      {children}
    </>
  );
}
