"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
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
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/UI/input-otp";
import { toast } from "@/components/UI/use-toast";

import { verifyOTPSchema } from "@/types/authSchemas";

import { Button } from "../button";
import Modal from "../Modal/Modal";

import { onVerifyUserOTP } from "@/app/actions";
import WelcomeImage from "@/assets/img/WelcomeImage.png";

const AppInputOTP = () => {
  // router
  const router = useRouter();

  const form = useForm<z.infer<typeof verifyOTPSchema>>({
    resolver: zodResolver(verifyOTPSchema),
    defaultValues: {
      otp: "",
    },
  });

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    router.push("/login");

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

  async function onSubmit(data: z.infer<typeof verifyOTPSchema>) {
    const result = await onVerifyUserOTP(data);

    if (result.status === "success") {
      toast({
        title: "OTP Verification successful!",
        description: result.message,
        variant: "success",
      });

      handleShowModal();
    } else {
      toast({
        title: "An error occured!",
        description: result,
        variant: "destructive",
      });
    }
  }

  return (
    <>
      {showModal && (
        <Modal handleModal={handleModal} btnText="Let's Go!">
          <h1 className="text-gold-500 font-bold text-3xl">Welcome!</h1>

          <div className="bg-[#0E0E0EB2] border-2 border-[#4D4D4D] rounded-xl flex flex-col gap-5 p-7 items-center">
            <Image
              src={WelcomeImage}
              alt="WelcomeImage"
              className="h-[180px] w-[180px]"
            />

            <p className=" text-xl text-center w-3/5">
              Hooray! You are now an explorer. Login to continue exploring
              iExplore!
            </p>
          </div>

          <Link
            href="/login"
            className="bg-gold-500 hover:bg-white transition duration-200 text-[#322016] px-8 py-2 rounded-3xl font-bold text-base"
          >
            Let’s Go!
          </Link>
        </Modal>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                {/* <FormLabel>One-Time Password</FormLabel> */}
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                {/* <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="bg-gold-500 hover:bg-white transition duration-200 text-[#322016] px-8 py-5 lg:py-6 rounded-3xl font-bold text-base mx-auto"
            type="submit"
          >
            Confirm code
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AppInputOTP;
