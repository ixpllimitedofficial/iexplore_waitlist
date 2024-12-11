"use client";

import React, { useState, useRef } from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
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
import { ToggleGroup, ToggleGroupItem } from "@/components/UI/toggle-group";
import { Checkbox } from "@/components/UI/checkbox";
import { Input } from "@/components/UI/input";
import PasswordField from "@/components/UI/Inputs/PasswordField";
import { Button } from "@/components/UI/button";
import { toast } from "@/components/UI/use-toast";
import { inputStyling } from "@/utils/constant";
import { setupBusinessValidationSchema } from "@/types/authSchemas";

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof setupBusinessValidationSchema>>({
    resolver: zodResolver(setupBusinessValidationSchema),
    defaultValues: {
      profile_picture: "",
      business_name: "",
      email: "",
      phone_number: "",
      business_address: "",
      opening_hour: "user",
      closing_hour: "",
      category: "",
      photo_of_business: "",
      // location: "",
      utility_of_business: "",
      cac_of_business: "",
      cac_number_of_business: "",
    },
  });
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  async function onSubmit(data: z.infer<typeof setupBusinessValidationSchema>) {
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
      <section className="">
        <Header title="Home" className="hidden md:block" />
      </section>
      <section className="px-7 py-6 w-[100%]">
        <div className="flex items-center">
          <Link href="/vendor-Home/dashboard">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="flex justify-center items-center gap-3 w-full">
            <p className="font-bold text-3xl">Continue business setup</p>
          </div>
        </div>
        <div className="mt-10 w-[80%] mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-7 flex flex-col gap-4"
            >
              {/* profile picture */}
              <div className="flex flex-col items-center">
                <input
                  type="file"
                  id="profile-picture"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt="Selected Image"
                    width={150}
                    height={150}
                    className="w-[150px] h-[150px] rounded-full object-cover"
                  />
                ) : (
                  <div className="w-[150px] h-[150px] bg-[#4D4D4D] rounded-full"></div>
                )}
                <div
                  className="flex gap-2 mt-3 items-center cursor-pointer"
                  onClick={handleUploadClick}
                >
                  <UploadFileIcon />
                  <p className="text-2xl font-light">Upload Photo</p>
                </div>
              </div>
              {/* end of profile picture */}
              <p className="text-3xl font-semibold mt-5 text-center">
                Business Details
              </p>

              {/* first name */}
              <FormField
                control={form.control}
                name="business_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Business Name:</FormLabel>
                    <FormControl>
                      <Input className={`${inputStyling}`} {...field} />
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
                    <FormLabel className="text-lg">Business Email:</FormLabel>
                    <FormControl>
                      <Input className={`${inputStyling}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* phone number */}
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">
                      Business Phone Number:
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={`${inputStyling}`}
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/*business address*/}
              <FormField
                control={form.control}
                name="business_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Business Address:</FormLabel>
                    <FormControl>
                      <Input
                        className={`${inputStyling}`}
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-2xl font-light">Operation hours</p>
              <div className="grid grid-cols-2 gap-3">
                {/*opening hour*/}
                <FormField
                  control={form.control}
                  name="opening_hour"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Opening hour</FormLabel>
                      <FormControl>
                        <Input
                          className={`${inputStyling}`}
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/*closing hour*/}
                <FormField
                  control={form.control}
                  name="closing_hour"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Closing hour:</FormLabel>
                      <FormControl>
                        <Input
                          className={`${inputStyling}`}
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <p className="text-2xl font-light">
                Business Features and Listings
              </p>
              {/*closing hour*/}
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="beer" aria-label="Toggle beer">
                  <p>Beer</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="cocktails"
                  aria-label="Toggle cocktails"
                >
                  <p>Cocktails</p>
                </ToggleGroupItem>
                <ToggleGroupItem value="security" aria-label="Toggle security">
                  <p>Security</p>
                </ToggleGroupItem>
              </ToggleGroup>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Page;
