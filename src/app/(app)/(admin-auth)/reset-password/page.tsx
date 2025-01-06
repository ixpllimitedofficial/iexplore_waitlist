import AuthNav from '@/components/admin/auth/AuthNav'
import ResetPassword from '@/components/admin/auth/ResetPassword'
import React from 'react'

const page = () => {
    return (
        <div>
            <AuthNav />
            <ResetPassword />
        </div>
    )
}

export default page