import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/UI/button";
import ProfileCard from "@/components/UI/AdminUI/Cards/ProfileCard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
        <p className="self-start lg:self-center font-bold text-2xl">Orders</p>

        <ProfileCard />
      </header>

      {/* <div className="flex lg:justify-end my-5">
        <Button className="bg-gold-800 text-gold-500 hover:bg-gold-800">
          <DownloadIcon className="mr-2 h-4 w-4" />{" "}
          <p className="font-medium">Download</p>
        </Button>
      </div> */}

      {children}
    </>
  );
}
