import VerifyUserOTP from '@/components/admin/auth/VerifyOtp'
import AuthNav from '@/components/admin/auth/AuthNav'
import React from 'react'

const page = () => {
    return (
        <div>
            <AuthNav />
            <VerifyUserOTP />
        </div>
    )
}

export default page