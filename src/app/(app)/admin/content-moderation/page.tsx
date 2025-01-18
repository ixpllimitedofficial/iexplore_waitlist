'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import AllContentsTable from '@/components/admin/ContentModeration/AllContentsTable';
import AllSpotsTable from '@/components/admin/ContentModeration/AllSpotsTable';
import AllVenuesTable from '@/components/admin/ContentModeration/AllVenueTable';
import { useRouter } from "next/navigation";
import { adminStore } from '@/store/admin';

const Page = () => {
  const isAdminLoggedin = adminStore((state) => state.isAdminLoggedin);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'Drinks';

  useEffect(() => {
    if (!isAdminLoggedin) {
      router.replace("/admin-login");
    }
  }, [isAdminLoggedin, router])
  if (isAdminLoggedin) {
    return <p>loading.....</p>
  }
  return (
    <div>
      {selectedCategory === 'Drinks' && <AllContentsTable />}
      {selectedCategory === 'Spots' && <AllSpotsTable />}
    </div>
  );
};

export default Page;
