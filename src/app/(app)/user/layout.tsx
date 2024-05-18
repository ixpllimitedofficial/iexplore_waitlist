import AppNavbar from "@/components/UI/Navbar/AppNavbar/AppNavbar";
import UserPrivateRoute from "@/components/UserPrivateRoute";

export default  function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserPrivateRoute>
      <AppNavbar />
      {children}
    </UserPrivateRoute>
  );
}
