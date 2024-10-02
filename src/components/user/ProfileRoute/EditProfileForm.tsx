"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { userStore } from "@/store/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import { Checkbox } from "@/components/UI/checkbox";
import { Input } from "@/components/UI/input";
import PasswordField from "@/components/UI/Inputs/PasswordField";
import { Button } from "@/components/UI/button";
import { toast } from "@/components/UI/use-toast";

import { inputStyling } from "@/utils/constant";
import { editProfileSchema } from "@/types/authSchemas";

import { onLogin, onSignup } from "@/app/actions";

const EditProfileForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [btnState, setBtnState] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // router
  const router = useRouter();

  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      full_name: "",
      phone: "",
      email: "",
      date_of_birth: "",
      password: "",
      confirm_password: "",
      new_password: "",
      confirm_new_password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof editProfileSchema>) {
    console.log(data);
    // setBtnState(true);

    // const result = await onSignup(data);

    // if (result.status === "success") {
    //   toast({
    //     title: "Sign up successful",
    //     description: "Please check your email and confirm your OTP!",
    //     variant: "success",
    //   });

    //   router.push("/signup?flow=verifyOTP");
    // } else {
    //   toast({
    //     title: "An error occured!",
    //     description: result,
    //     variant: "destructive",
    //   });

    //   setBtnState(false);
    // }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-7 flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-7">
            {/* full name */}
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Full Name:</FormLabel>
                  <FormControl>
                    <Input
                      className={`${inputStyling}`}
                      placeholder="First Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* phone number */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Phone Number:</FormLabel>
                  <FormControl>
                    <Input
                      className={`${inputStyling}`}
                      placeholder="09012345678"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Email:</FormLabel>
                  <FormControl>
                    <Input
                      className={`${inputStyling}`}
                      placeholder="Maxxconnect127@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* date of birth*/}
            <FormField
              control={form.control}
              name="date_of_birth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Date:</FormLabel>
                  <FormControl className="">
                    <Input
                      type="date"
                      className={`${inputStyling}`}
                      placeholder="First Name"
                      max="2006-08-31"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-5 bg-[#4D4D4D33] px-5 py-3 text-gold-500 text-lg">
            Change password
          </div>

          <div className="grid grid-cols-2 gap-7">
            {/* password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Current Password:</FormLabel>
                  <FormControl>
                    <PasswordField
                      field={field}
                      placeholder="Password"
                      inputStyling={inputStyling}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* confirm password */}
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">
                    Confirm Current Password:
                  </FormLabel>
                  <FormControl>
                    <PasswordField
                      field={field}
                      placeholder="Confirm Password"
                      inputStyling={inputStyling}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* new password */}
            <FormField
              control={form.control}
              name="new_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">New Password:</FormLabel>
                  <FormControl>
                    <PasswordField
                      field={field}
                      placeholder="Password"
                      inputStyling={inputStyling}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* confirm new password */}
            <FormField
              control={form.control}
              name="confirm_new_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Confirm New Password:</FormLabel>
                  <FormControl>
                    <PasswordField
                      field={field}
                      placeholder="Password"
                      inputStyling={inputStyling}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            className="bg-gold-500 hover:bg-white transition duration-200 text-[#322016] px-8 py-5 lg:py-6 rounded-3xl font-bold text-base mt-5 mr-auto"
            type="submit"
            disabled={btnState}
          >
            {!btnState ? "Save" : "Saving..."}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default EditProfileForm;
