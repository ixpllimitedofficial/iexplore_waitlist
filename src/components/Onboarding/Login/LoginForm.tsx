"use client";

import { useRouter } from "next/navigation";

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
import PasswordField from "@/components/UI/Inputs/PasswordField";

import { inputStyling } from "@/utils/constant";
import { loginValidationSchema } from "@/types/authSchemas";
import { onLogin } from "@/app/actions";

const LoginForm = () => {
  // router
  const router = useRouter();

  const form = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      username_or_email: "fenetox312@asaud.com",
      password: "MySecret@123",
    },
  });

  async function onSubmit(data: z.infer<typeof loginValidationSchema>) {
    console.log(data);

    const result = await onLogin(data);

    // if (result.status === "loggedIn") {
    //   toast({
    //     title: "Logged in",
    //     description: "You are logged in",
    //     variant: "success",
    //   });
    // } else if (result.status === "failed") {
    //   toast({
    //     title: "Failure",
    //     description: "Couldn't login",
    //     variant: "destructive",
    //   });
    // } else {
    //   toast({
    //     title: "This is an error",
    //     description: "Unexpected response from the server",
    //     variant: "destructive",
    //   });
    // }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-7"
        >
          {/* username */}
          <FormField
            control={form.control}
            name="username_or_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">
                  Username or Email address:
                </FormLabel>
                <FormControl>
                  <Input
                    className={`bg-[#FFFFFF1A] px-3 py-6 lg:text-lg rounded-none border-t-0 border-r-0 border-l-0 border-b-gold-500 placeholder:text-[#4D4D4D]`}
                    placeholder="johndoe@iexplore.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Password:</FormLabel>
                <FormControl>
                  <PasswordField
                    field={field}
                    placeholder="*********"
                    inputStyling={inputStyling}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <Link
            href="/user?flow=forgotPassword"
            className="self-end text-gold-500 text-end text-sm font-medium"
          >
            Forgot Password
          </Link> */}

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <Button
              className="bg-gold-500 hover:bg-white transition duration-200 text-[#322016] px-8 py-5 lg:py-6 rounded-3xl font-bold text-base flex-grow"
              type="submit"
            >
              Login
            </Button>
            <p className="text-gold-500">or</p>
            <Button className="hover:bg-gold-500 bg-white transition duration-200 text-[#322016] px-8 py-5 lg:py-6 rounded-3xl font-bold text-base flex-grow">
              Continue with Google
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
