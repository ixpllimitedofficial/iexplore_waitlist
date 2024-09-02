"use client";

import { useSession, SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const UserPrivateRoute = ({ children }: any) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session && pathname !== "/user") {
      router.push("/user");
    }
  }, [session, status, pathname, router]);

  // if (status === "loading" || (!session && pathname !== "/user")) {
  //   return <div>Loading...</div>; // Or a loading spinner
  // }

  return <>{children}</>;
};

const WrappedUserPrivateRoute = ({ children }: any) => (
  <SessionProvider>
    <UserPrivateRoute>{children}</UserPrivateRoute>
  </SessionProvider>
);

export default WrappedUserPrivateRoute;