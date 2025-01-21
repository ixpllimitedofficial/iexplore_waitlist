"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { vendorStore } from "@/store/vendor";
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
import { loginValidationSchema } from "@/types/authSchemas";
import FilterButton from "@/components/UI/Button/FilterButton";
import NewAppButton from "@/components/UI/Button/NewAppButton";
import { toast } from "@/components/UI/use-toast";

const LoginForm = () => {
  // router
  const router = useRouter();

  // zustand
  const vendor = vendorStore((state: any) => state.vendor);
  const loginVendor = vendorStore((state: any) => state.loginVendor);
  const isVendorLoggedin = vendorStore((state: any) => state.isVendorLoggedin);
  const setIsVendorLoggedin = vendorStore(
    (state: any) => state.setIsVendorLoggedin
  );
  // react hook form
  const form = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = form;

  function onSubmit(data: z.infer<typeof loginValidationSchema>) {
    loginVendor(data);
  }
  useEffect(() => {
    if (isVendorLoggedin) {
      router.push("/vendor-Home/dashboard");
    }
    // Cleanup function to be called when the component is unmounted
    return () => {
      // Set isvendorLoggedin to false
      setIsVendorLoggedin(false);
    };
  }, [vendor, router, isVendorLoggedin, setIsVendorLoggedin]);

  return (
    <>
      <p className="py-3 text-3xl text-center font-bold hidden lg:block">
        Login
      </p>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* username */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username or Email address:</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyling}`}
                    placeholder="Username or Email"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
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

          <Link
            href="/vendor-Home?flow=forgotPassword"
            className=" text-gold-500 text-end text-sm font-medium"
          >
            Forgot Password
          </Link>

          {/* {vendor.message && <p>{vendor.message}</p>} */}
          <NewAppButton btnText="Login" type="submit" className="text-sm" />
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <span className="text-gold-500">
              <Link href="/vendor-Home?flow=signup">Signup</Link>
            </span>
          </p>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
