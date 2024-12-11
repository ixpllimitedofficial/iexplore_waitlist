import VendorPrivateRoute from "@/components/PrivateRoutes/VendorPrivateRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <VendorPrivateRoute>{children}</VendorPrivateRoute>;
}