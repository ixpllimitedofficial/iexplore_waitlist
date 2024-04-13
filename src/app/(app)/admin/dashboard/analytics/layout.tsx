import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/UI/button";
import ProfileCard from "@/components/UI/AdminUI/ProfileCard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
        <p className="self-start lg:self-center font-bold text-2xl lg:text-[28px]">
          Analytics & Reporting
        </p>

        <ProfileCard />
      </header>

      <div className="flex lg:justify-end my-5">
        <Button className="bg-[#615545] text-[#F7D098] hover:bg-[#615545]">
          <DownloadIcon className="mr-2 h-5 w-5" />{" "}
          <p className="font-medium text-lg">Download</p>
        </Button>
      </div>

      {children}
    </>
  );
}
