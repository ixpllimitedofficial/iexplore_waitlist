import Image from "next/image";
import DashboardNavbar from "@/components/Navbars/UserWebappNavbar/DashboardNavbar";
import iExploreNavLogo from "@/assets/svg/UserIconsSvg/iExploreNavLogo.svg";
import ProfileDropdownMenu from "@/components/UI/UserUI/ProfileDropdownMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="grid grid-cols-12">
        {/* navbar */}
        <DashboardNavbar />
        
        <div className="relative col-span-12 lg:col-span-10 mb-24 lg:pb-5">
          <div className="flex justify-between lg:justify-end items-center px-5 py-7">
            <Image
              src={iExploreNavLogo}
              alt="iExploreNavLogo"
              height={35}
              className="lg:hidden"
            />

            <ProfileDropdownMenu />
          </div>

          {/* main content */}
          {children}
        </div>
      </section>
    </>
  );
}
