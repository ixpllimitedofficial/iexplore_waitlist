'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { toast } from 'react-toastify';
import { Button } from "@/components/UI/button";
// import axios from "axios";
//validationSchema

const resetPasswordSchema = z.object({
    password: z
        .string()
        .min(8, "password must be atleast 8 characters")
        .regex(/[A-Z]/, "password must include an upperCase letter")
        .regex(/[a-z]/, "password must include a lowercase letter")
        .regex(/[0-9]/, "password must include a number")
        .regex(/[^a-zA-Z0-9]/, "password should contain a special character")
})

const ResetPassword = () => {
    const [btnState, setBtnState] = useState(false)
    const router = useRouter();

    //form setup

    const form = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: " ",
        }
    })
    //form submit handler
    const onSubmit = async (data: { password: string }) => {
        setBtnState(true);
        try {
            
            //stimulate api call
            // const response = await axios.post("/api/v1/auth/reset-password", data);
            // if (response.data.success) {
            //     toast({
            //         title: "Password reset successful",
            //         description: "You can now log in with your new password.",
            //         variant: "success",
            //     });


                await new Promise((resolve) => setTimeout(resolve, 1500));

                // toast.success("password reset succesful. you can now login using your new password")

                //navigate to loginpage
                router.push("/success")
            } catch (error) {
                toast.error("something went wrong try again")
            } finally {
                setBtnState(false)
            }
        }

    return (

            <div className='min-h-screen justify-center items-center p-6'>

                <div className='w-full flex flex-col justify-center items-center mx-auto' >
                    <h2 className="text-xl md:text-2xl font-bold mb-4">Reset Password</h2>
                    <p className="text-gray-400 mb-8 text-center text-sm">
                        Follow the instructions below to create a secure password
                    </p>

                    <form onSubmit={form.handleSubmit(onSubmit)} className=" md:w-[40%]  max-w-md space-y-4">
                        <div className="grid sm:grid-cols-3 grid-cols-2 gap-2 text-sm text-gray-400 ">
                            <p className='text-xs whitespace-nowrap'>
                                {form.watch("password").length >= 8
                                    ? "✅"
                                    : "❌"} 8 characters or more
                            </p>
                            <p className='text-xs whitespace-nowrap'>
                                {/[A-Z]/.test(form.watch("password")) ? "✅" : "❌"} Uppercase
                                character
                            </p>
                            <p className='text-xs whitespace-nowrap'>
                                {/[a-z]/.test(form.watch("password")) ? "✅" : "❌"} Lowercase
                                character
                            </p>
                            <p className='text-xs whitespace-nowrap'>
                                {/[0-9]/.test(form.watch("password")) ? "✅" : "❌"} Number  &
                                special character
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">New Password</label>
                            <input
                                type="password"
                                placeholder="Enter new password"
                                {...form.register('password')}
                                className="bg-[#FFFFFF1A] mt-1 block w-full h-14 px-4 py-2 border-none rounded-lg shadow-sm focus:outline-none"
                            />
                            {form.formState.errors.password && (
                                <p className="text-red-500 text-sm mt-1">{form.formState.errors.password.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <Button
                            className="w-full bg-yellow-500 text-black hover:text-white font-bold py-3 rounded-full mt-52"
                            type="submit"
                            disabled={btnState}
                        >
                            {!btnState ? "Reset password" : "Resetting..."}
                        </Button>

                    </form>
                </div>

            </div>
        )
    }

    export default ResetPassword