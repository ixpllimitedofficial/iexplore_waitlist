import ProfileCard from "@/components/UI/AdminUI/Cards/ProfileCard";
import PeopleIconSvg from "@/assets/svg/AdminIconsSvg/PeopleIconSvg.svg";
import Image from "next/image";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
        <p className="self-start lg:self-center font-bold text-2xl">
          User Management
        </p>

        <ProfileCard />
      </header>

      {children}
    </>
  );
}
