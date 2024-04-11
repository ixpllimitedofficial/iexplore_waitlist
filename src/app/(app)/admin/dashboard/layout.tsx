import DashboardNavbar from "@/components/UI/AdminUI/Navbar/DashboardNavbar/DashboardNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-12">
      {/* navbar */}
      <DashboardNavbar />

      {/* content */}
      <div className="relative col-span-12 md:col-span-10 pt-28 lg:pt-6 p-6 lg:p-10 ">
        {/* main content */}
        {children}
      </div>
    </section>
  );
}
