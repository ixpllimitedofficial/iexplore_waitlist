import AppNavbar from "@/components/UI/Navbar/AppNavbar/AppNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppNavbar />
      {children}
    </>
  );
};

export default Layout;
