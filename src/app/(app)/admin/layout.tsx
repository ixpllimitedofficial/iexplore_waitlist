import AdminPrivateRoute from "@/components/PrivateRoutes/AdminPrivateRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminPrivateRoute>{children}</AdminPrivateRoute>;
}
