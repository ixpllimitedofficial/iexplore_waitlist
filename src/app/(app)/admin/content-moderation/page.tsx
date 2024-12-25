'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import AllContentsTable from '@/components/admin/ContentModeration/AllContentsTable';
import AllSpotsTable from '@/components/admin/ContentModeration/AllSpotsTable';
import AllVenuesTable from '@/components/admin/ContentModeration/AllVenueTable';

const Page = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'Drinks';

  return (
    <div>
      {selectedCategory === 'Drinks' && <AllContentsTable />}
      {selectedCategory === 'Venues' && <AllVenuesTable />}
      {selectedCategory === 'Spots' && <AllSpotsTable />}
    </div>
  );
};

export default Page;
