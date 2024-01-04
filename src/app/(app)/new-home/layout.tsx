import Footer from "@/components/UI/Footer/Footer";
import AppNavbar from "@/components/UI/Navbar/AppNavbar/AppNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppNavbar />
      {children}
    </>
  );
}
