import AuthNav from '@/components/admin/auth/AuthNav'
import React from 'react'
import ForgotPasswordForm from "@/components/Onboarding/ForgotPassword/ForgotPasswordForm";
import Link from 'next/link'

const page = () => {
    return (
        <div className='w-full h-screen justify-center items-center'>
            <div className='flex flex-col'>
                <AuthNav />
                <div className="w-full">
                    <p className="text-xl md:text-3xl font-bold text-center">Reset Password</p>
                    <p className="mt-3 mb-7 text-sm md:text-lg text-center">
                        Please enter the email associated with your password
                    </p>

                    {/* forogot password form */}
                    <div className='w-[80%] md:w-[40%] mx-auto'>
                    <ForgotPasswordForm />
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default page