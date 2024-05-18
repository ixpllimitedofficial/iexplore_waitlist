import AdminPrivateRoute from "@/components/AdminPrivateRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminPrivateRoute>{children}</AdminPrivateRoute>;
}
