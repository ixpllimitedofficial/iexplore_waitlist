import Footer from "@/components/UI/Footer/Footer";
import Navbar from "@/components/UI/Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
