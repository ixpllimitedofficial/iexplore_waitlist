import DashboardNavbar from "@/components/Navbars/UserWebappNavbar/DashboardNavbar/DashboardNavbar";
import AppNavbar from "@/components/UI/Navbar/AppNavbar/AppNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppNavbar />

      <section className="grid grid-cols-12">
        {/* navbar */}
        <DashboardNavbar />
        <div className="relative col-span-12 lg:col-span-10 pt-5 lg:pt-0  ">
          {/* main content */}
          {children}
        </div>
      </section>
    </>
  );
}
