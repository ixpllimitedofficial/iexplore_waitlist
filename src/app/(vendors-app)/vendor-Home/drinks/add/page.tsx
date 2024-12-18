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
      profile_picture: "",
      drinks_name: "",
      drinks_price: "",
      select_Spot: "",
      drinks_description: "",
      category: "",
      drinks_volume: "",
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
        <Header title="Drinks" className="hidden md:block" />
      </section>
      <section className="px-7 py-6 w-[100%]">
        <div className="flex items-center">
          <Link href="/vendor-Home/drinks">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className=" mt-14 md:mt-0 flex justify-center items-center gap-3 w-full">
            <p className="font-bold text-lg md:text-3xl">Add Drink</p>
          </div>
        </div>
        <div className="mt-10 w-[100%] md:w-[80%] mx-auto">
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
                  <p className="text-2xl font-light">Upload Drink image</p>
                </div>
              </div>
              {/* end of profile picture */}

              {/* drinks name */}
              <FormField
                control={form.control}
                name="drinks_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Drinks Name:</FormLabel>
                    <FormControl>
                      <Input className={`${inputStyling}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* drink price */}
              <FormField
                control={form.control}
                name="drinks_price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Drink Price</FormLabel>
                    <FormControl>
                      <Input className={`${inputStyling}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* select spot */}
              <FormField
                control={form.control}
                name="select_Spot"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Select spot:</FormLabel>
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
              <p className="text-lg md:text-lg mb-2 md:mb-5">Drinks category</p>
              {/*closing hour*/}
              <ToggleGroup
                type="multiple"
                className="gap-5 w-[100%] flex-wrap justify-center items-center mx-auto mb-5"
              >
                <ToggleGroupItem
                  value="juice"
                  aria-label="Toggle juice"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Juice</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="soft drinks"
                  aria-label="Toggle soft drinks"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Soft drinks</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="energy drinks"
                  aria-label="Toggle energy drinks"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Energy drinks</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="cocktails"
                  aria-label="Toggle cocktails"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Cocktails</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="beer"
                  aria-label="Toggle beer"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Beer</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="wine"
                  aria-label="Toggle wine"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Wine</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="gin"
                  aria-label="Toggle gin"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Gin</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="vodka"
                  aria-label="Toggle vodka"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Vodka</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="spirits"
                  aria-label="Toggle spirits"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Spirits</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="tequila"
                  aria-label="Toggle tequila"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Tequila</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="liqueurs"
                  aria-label="Toggle liqueurs"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Liqueurs</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="whiskey"
                  aria-label="Toggle whiskey"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Whiskey</p>
                </ToggleGroupItem>
              </ToggleGroup>
              {/*drinks description*/}
              <FormField
                control={form.control}
                name="drinks_description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">
                      Drinks description:
                    </FormLabel>
                    <FormControl>
                      <Textarea className={`${inputStyling}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className="text-lg md:text-2xl font-bold text-center mb-2 md:mb-5 mt-10">
                Drink Volume
              </p>
              <ToggleGroup
                type="multiple"
                className="gap-5 w-[100%] md:w-[60%] flex-wrap justify-center items-center mx-auto"
              >
                <ToggleGroupItem
                  value="20cl"
                  aria-label="Toggle 20cl"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>20cl</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="25cl"
                  aria-label="Toggle 25cl"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>25cl</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="33cl"
                  aria-label="Toggle 33cl"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>33cl</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="45cl"
                  aria-label="Toggle 45cl"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>45cl</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="50cl"
                  aria-label="Toggle 50cl"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>50cl</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="70cl"
                  aria-label="Toggle 70cl"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>70cl</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="75cl"
                  aria-label="Toggle 75cl"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>75cl</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="1L"
                  aria-label="Toggle 1L"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>1L</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="1.5L"
                  aria-label="Toggle 1.5L"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>1.5L</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="3L"
                  aria-label="Toggle 3L"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>3L</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="4.5L"
                  aria-label="Toggle 4.5L"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>4.5L</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="6L"
                  aria-label="Toggle 6L"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>6L</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="7.5L"
                  aria-label="Toggle 7.5L"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>7.5L</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="9L"
                  aria-label="Toggle 9L"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>9L</p>
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="w-[100%] md:w-[50%] mx-auto">
                <Input
                  placeholder="Add more:"
                  className="rounded-full mt-5 placeholder:text-white
              "
                />

                <Button
                  className="bg-[#4D4D4D] w-full mt-10 hover:bg-white transition duration-200 text-[#B0B0B0] px-8 py-5 lg:py-6 rounded-3xl font-bold text-base flex-grow"
                  type="submit"
                  disabled={btnState}
                >
                  {!btnState ? "Save" : "saving..."}
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
