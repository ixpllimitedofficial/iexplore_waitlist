'use client'

import { ChevronLeft } from 'lucide-react'
import React from 'react'
import AdminSvg from "@/assets/svg/NavbarSvg/AdminSvg.svg";
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const AuthNav = () => {
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    }
    return (
        <div className='mb-16 mt-5'>
            <div className='flex justify-center md:justify-between items-center px-6'>
                <div className='hidden md:block md:w-[35%] flex-start'>
                    <ChevronLeft size={40} onClick={handleGoBack} />
                </div>

                <div className='flex md:flex-grow mx-auto'>
                    <Image src={AdminSvg} alt='adminsvg' height={40} />
                </div>
            </div>
        </div>
    )
}

export default AuthNav