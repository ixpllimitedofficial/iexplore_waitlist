import React from 'react'
import AuthNav from './AuthNav'
import Image from 'next/image'
import { Button } from '@/components/UI/button'
import SuccessLock from '@/assets/img/sucess.png'
import Link from 'next/link'

const Success = () => {
    return (
        <div>
            <AuthNav />

            <div className='w-1/2 mx-auto flex flex-col justify-center items-center space-y-2'>
                <h1 className='text-xl md:text-3xl'>Password Changed</h1>
                <p className='text-sm'>Your password has successfully been changed</p>

                <Image src={SuccessLock} alt='' width={150} height={150} />

            </div>
            <div className='flex justify-center items-center '>

                <Link href='/admin-login'>
                    <Button className='w-64 text-black rounded-full bg-gold-500 py-2 text-sm mt-5'>Return</Button>
                </Link>
            </div>
        </div>
    )
}

export default Success