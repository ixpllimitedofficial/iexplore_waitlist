'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import AllContentsTable from '@/components/admin/ContentModeration/AllContentsTable';
import AllSpotsTable from '@/components/admin/ContentModeration/AllSpotsTable';
import { useRouter } from "next/navigation";
import { adminStore } from '@/store/admin';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const isAdminLoggedin = adminStore((state) => state.isAdminLoggedin);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams?.get('category') || 'Drinks';



  useEffect(() => {
    if (!isAdminLoggedin) {
      router.replace("/admin-login");
    }
  }, [isAdminLoggedin, router]);

  // Show loading if admin is not logged in
  if (!isAdminLoggedin) {
    return <p>loading.....</p>;
  }

  return (
    <div>
      {selectedCategory === 'Drinks' ? <AllContentsTable /> : <p></p>}
      {selectedCategory === 'Spots' ? <AllSpotsTable /> : <p></p>}

      <ToastContainer
        position="top-center"   // Adjust position as needed
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Page;
