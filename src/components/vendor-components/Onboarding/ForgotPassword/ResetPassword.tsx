"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Modal from "@/components/UI/Modal/Modal";
import NewAppButton from "@/components/UI/Button/NewAppButton";
import PasswordChangeIcon from "@/assets/svg/PasswordChangeIcon.svg";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { userStore } from "@/store/user";
import { useEffect } from "react";

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
import { Input } from "@/components/UI/input";

import { inputStyling } from "@/utils/constant";
import { resetPasswordValidationSchema } from "@/types/authSchemas";

const ResetPassword = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  // zustand
  const user = userStore((state: any) => state.user);
  const isVendorLoggedin = userStore((state: any) => state.isVendorLoggedin);
  const loginUser = userStore((state: any) => state.loginUser);

  const form = useForm<z.infer<typeof resetPasswordValidationSchema>>({
    resolver: zodResolver(resetPasswordValidationSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(data: z.infer<typeof resetPasswordValidationSchema>) {
    console.log(data);
    // loginUser(data);

    handleShowModal()

    // router.push("/user");

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  }

  const handleModal = () => {
    router.push("/admin");

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  const handleShowModal = () => {
    setShowModal(true);

    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <section className="h-full flex flex-col gap-2 pt-16 lg:pt-28">
      {/* modal */}
      {showModal && (
        <Modal handleModal={handleModal} btnText="Back to login">
          <Image
            src={PasswordChangeIcon}
            alt="PasswordChangeIcon"
            className="h-[180px] w-[180px]"
          />

          <h1 className="text-gold-500 font-bold text-3xl">Password changed</h1>
          <p className="text-gold-500 text-xl w-3/4 lg:w-1/4 text-center">
            Your password has been changed successfully!
          </p>
        </Modal>
      )}

      <h1 className="text-gold-500 text-2xl md:text-3xl font-semibold text-center leading-snug self-center">
        Reset password?
      </h1>

      <h1 className="text-gold-500 text-lg md:text-xl md:w-[70%] text-center leading-snug self-center">
        Create a new password you’ll easily remember
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="Password"
                    {...field}
                    type="password"
                  />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/*confirm password */}
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="Confirm Password"
                    {...field}
                    type="password"
                  />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

            <NewAppButton btnText="Reset password" type="submit" className="text-sm"/>
        </form>
      </Form>
    </section>
  );
};

export default ResetPassword;
