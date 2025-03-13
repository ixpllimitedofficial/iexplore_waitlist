"use client";

import React, { useState, useRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Header from "@/components/vendor-components/MiniHeader/Header";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { UploadCloud } from "lucide-react";
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
import { ToggleGroup, ToggleGroupItem } from "@/components/UI/toggle-group";
import { Toggle } from "@/components/UI/toggle";
import { Checkbox } from "@/components/UI/checkbox";
import { Input } from "@/components/UI/input";
import { Textarea } from "@/components/UI/textarea";
import PasswordField from "@/components/UI/Inputs/PasswordField";
import { Button } from "@/components/UI/button";
import { toast } from "@/components/UI/use-toast";
import { inputStyling } from "@/utils/constant";
import { addDrinksValidationSchema } from "@/types/authSchemas";

type UploadedFile = {
  preview: string;
} & File; // Extending the File type to include the preview property

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [btnState, setBtnState] = useState(false);

  const form = useForm<z.infer<typeof addDrinksValidationSchema>>({
    resolver: zodResolver(addDrinksValidationSchema),
    defaultValues: {
      drinks_name: "",
      drinks_price: "",
      drinks_description: "",
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

  async function onSubmit(data: z.infer<typeof addDrinksValidationSchema>) {
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
        <Header title="Profile" className="hidden md:block" />
      </section>
      <section className="px-3 md:px-7 md:py-6 w-[100%]">
        <div className="flex items-center">
          <Link href="/vendor-Home/profile">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="md:mt-0 flex justify-center items-center gap-3 w-full">
            <p className="font-bold text-lg md:text-3xl">Create Ad</p>
          </div>
        </div>
        <div className="mt-10 w-[100%] md:w-[80%] mx-auto">
          <p className="hidden md:block text-center text-lg font-semibold">
            Ad details
          </p>
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
                  <p className="text-2xl font-light">Upload photo</p>
                </div>
              </div>
              {/* end of profile picture */}

              {/* Ad name */}
              <FormField
                control={form.control}
                name="drinks_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Ad name:</FormLabel>
                    <FormControl>
                      <Input className={`${inputStyling}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/*Ad description*/}
              <FormField
                control={form.control}
                name="drinks_description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Ad description:</FormLabel>
                    <FormControl>
                      <Textarea className={`${inputStyling}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-lg md:text-lg mb-2 md:mb-5">Choose plan</p>
              {/*closing hour*/}
              <ToggleGroup
                type="single"
                className="gap-5 w-[100%] flex-wrap justify-center items-center mx-auto mb-5"
              >
                <div className="grid grid-cols-2 gap-8 w-full">
                  <div className="grid-cols-1">
                    <div className="flex flex-col gap-5">
                      <p className="text-xl font-bold">Basic plan</p>
                      <div className="bg-[#4D4D4D4D] p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-bold">Price:</p>
                          <p className="font-bold">N5,000.00</p>
                        </div>
                        <ToggleGroupItem
                          value="7Days"
                          aria-label="7Days"
                          className="w-full border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                        >
                          <p>7Days</p>
                        </ToggleGroupItem>
                      </div>
                      <div className="bg-[#4D4D4D4D] p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-bold">Price:</p>
                          <p className="font-bold">N9,000.00</p>
                        </div>
                        <ToggleGroupItem
                          value="14Days"
                          aria-label="14Days"
                          className="w-full border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                        >
                          <p>14Days</p>
                        </ToggleGroupItem>
                      </div>
                    </div>
                  </div>
                  <div className="grid-cols-1">
                    <div className="flex flex-col gap-5">
                      <p className="text-xl font-bold">Premium plan</p>
                      <div className="bg-[#4D4D4D4D] p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-bold">Price:</p>
                          <p className="font-bold">N15,000.00</p>
                        </div>
                        <ToggleGroupItem
                          value="14DaysPremium"
                          aria-label="14Dayspremium"
                          className="w-full border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                        >
                          <p>14Days</p>
                        </ToggleGroupItem>
                      </div>
                      <div className="bg-[#4D4D4D4D] p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-bold">Price:</p>
                          <p className="font-bold">N25,000.00</p>
                        </div>
                        <ToggleGroupItem
                          value="30Days"
                          aria-label="30Days"
                          className="w-full border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                        >
                          <p>30Days</p>
                        </ToggleGroupItem>
                      </div>
                    </div>
                  </div>
                </div>
              </ToggleGroup>

              <div className="w-[100%] md:w-[50%] mx-auto">
                <Button
                  className="bg-[#4D4D4D] w-full mb-5 md:mt-10 hover:bg-gold-500 hover:text-brandDark transition duration-200 text-[#B0B0B0] px-8 py-5 lg:py-6 rounded-3xl font-bold text-base flex-grow"
                  type="submit"
                  disabled={btnState}
                >
                  {!btnState ? "Proceed to checkout" : "processing..."}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Page;
