import DashboardNavbar from "@/components/Navbars/UserWebappNavbar/DashboardNavbar";
import iExploreNavLogo from "@/assets/svg/UserIconsSvg/iExploreNavLogo.svg";
import ProfileDropdownMenu from "@/components/UI/UserUI/Cards/ProfileDropdownMenu";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="grid grid-cols-12">
        {/* navbar */}
        <DashboardNavbar />
        <div className="relative col-span-12 lg:col-span-10 pb-5">
          <div className="flex justify-between lg:justify-end items-center px-8 py-7">
            <Image src={iExploreNavLogo} alt="iExploreNavLogo" height={45} className="lg:hidden"  />

            <ProfileDropdownMenu />
          </div>

          {/* main content */}
          {children}
        </div>
      </section>
    </>
  );
}
