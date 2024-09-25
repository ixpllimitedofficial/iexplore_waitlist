"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/UI/form";
import { Input } from "@/components/UI/input";

import { emailSchema } from "@/types/authSchemas";
import { Button } from "@/components/UI/button";
import { toast } from "@/components/UI/use-toast";

import { onSubmitWaitlist } from "@/app/actions";

const WaitlistForm = ({ handleShowModal }: any) => {
  const [btnState, setBtnState] = useState(false);

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof emailSchema>) {
    setBtnState(true);

    const result = await onSubmitWaitlist(data);

    if (result.status === "added") {
      toast({
        title: "Your email has been added to the waitlist!",
        description: "Please check your email for confirmation",
        variant: "success",
      });
      handleShowModal();
    } else if (result.status === "already_added") {
      toast({
        title: "Email already added to waitlist!",
        description: "Please check your email for confirmation",
        variant: "destructive",
      });
    } else {
      toast({
        title: "This is an error",
        description: "Unexpected response from the server",
        variant: "destructive",
      });

      setBtnState(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row justify-between gap-4"
      >
        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormControl>
                <Input
                  className={`bg-[#FFFFFF1A] px-3 py-6 lg:text-lg rounded-none border-t-0 border-r-0 border-l-0 border-b-gold-500 placeholder:text-[#4D4D4D]`}
                  placeholder="Email Address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="bg-gold-500 transition duration-200 hover:bg-white text-[#322016] px-8 py-5 lg:py-6 rounded-3xl font-bold text-base"
          type="submit"
          disabled={btnState}
        >
          {!btnState ? "Join Waitlist" : "Adding to waitlist..."}
        </Button>
      </form>
    </Form>
  );
};

export default WaitlistForm;
