"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import { toast } from "@/components/UI/use-toast";

import { emailSchema } from "@/types/authSchemas";

const ForgotPasswordForm = () => {
  const [btnState, setBtnState] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof emailSchema>) {
    // Handle form submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* Email Input */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email address:</FormLabel>
              <FormControl>
                <Input
                  className="bg-[#FFFFFF1A] px-3 py-6 lg:text-lg rounded-none border-t-0 border-r-0 border-l-0 border-b-gold-500 placeholder:text-[#4D4D4D]"
                  placeholder="johndoe@iexplore.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Spacer to push the button down on mobile */}
        {/* <div className="flex-grow" /> */}

        {/* Send Code Button */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5 mt-52 md:mt-0">
          <Button
            className="w-full bg-[#4D4D4D] hover:bg-gold-500 hover:text-black transition duration-200 text-white px-10 py-5 rounded-3xl font-bold text-base"
            type="submit"
            disabled={btnState}
          >
            {!btnState ? "Send code" : "Sending code..."}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
