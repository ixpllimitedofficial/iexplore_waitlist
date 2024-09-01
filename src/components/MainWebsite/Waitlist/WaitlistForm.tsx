"use client";

import { useForm } from "react-hook-form";

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

import { forgotPasswordValidationSchema } from "@/types/authSchemas";
import { Button } from "@/components/UI/button";
import { apiPost } from "@/app/_actions";
import { toast } from "@/components/UI/use-toast";

const WaitlistForm = ({ handleShowModal }: any) => {
  const form = useForm<z.infer<typeof forgotPasswordValidationSchema>>({
    resolver: zodResolver(forgotPasswordValidationSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(
    data: z.infer<typeof forgotPasswordValidationSchema>
  ) {
    try {
      const response = await apiPost(
        data,
        "https://iexplore.vercel.app/api/v1/waitlist/signup/"
      );

      if (response?.message === "You've been added to the waitlist!") {
        handleShowModal();
      } else if (response?.message === "Email is already on the waitlist") {
        toast({
          title: "Email already added",
          description: "Email is already on the waitlist",
          variant: "destructive"
        });
      } else {
        toast({
          title: "This is an errpr",
          description: "Error error",
          variant: "destructive"
        });
        console.log("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Request failed:", error);
    } finally {
      document.body.style.overflow = "unset";
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
        >
          Join Waitlist
        </Button>
      </form>
    </Form>
  );
};

export default WaitlistForm;
