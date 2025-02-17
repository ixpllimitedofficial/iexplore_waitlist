'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProfileCard from '@/components/UI/AdminUI/Cards/ProfileCard';
import AddDrinkDialog from '@/components/admin/ContentModeration/AddDrinkDialog';
import AddSpotDialog from '@/components/admin/ContentModeration/AddSpotDialog';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'Drinks';
  // const selectedCategory = searchParams.get('category') || 'Drinks'; // Default to 'Drinks'

  const renderAddDialog = () => {
    if (selectedCategory === 'Drinks') return <AddDrinkDialog />;
    if (selectedCategory === 'Spots') return <AddSpotDialog />;
    return null;
  };

  const handleCategoryChange = (category: string) => {
    router.push(`/admin/content-moderation?category=${category}`);
  };

  return (
    <div className="relative col-span-12 lg:col-span-10 pt-16 lg:pt-6 p-6 sm:px-7">
      <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
        <p className="hidden lg:flex self-start lg:self-center font-bold text-2xl">
          Content Moderation
        </p>
        <ProfileCard />
      </header>

      <div className="my-5 bg-[#1A1A1A] p-4 rounded-lg">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-5">
          {/* Category Section */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <span className="text-gray-300 text-base font-bold">Category:</span>
            <div className="flex items-center gap-2">
              {['Drinks', 'Spots'].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition ${selectedCategory === category
                      ? 'bg-gold-500 text-[#1A1A1A]'
                      : 'bg-transparent border border-gold-500 text-gray-300 hover:bg-gold-500 hover:text-[#1A1A1A]'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Add Dialog Button */}
          <div className="flex-shrink-0 ">
            {renderAddDialog()}
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
