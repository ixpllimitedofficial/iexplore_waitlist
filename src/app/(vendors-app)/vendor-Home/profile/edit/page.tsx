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
import PasswordField from "@/components/UI/Inputs/PasswordField";
import { Button } from "@/components/UI/button";
import { toast } from "@/components/UI/use-toast";
import { inputStyling } from "@/utils/constant";
import { setupBusinessValidationSchema } from "@/types/authSchemas";

type UploadedFile = {
  preview: string;
} & File; // Extending the File type to include the preview property

const useCreateOnDrop = (setFileState: Function, multiple: boolean = false) => {
  return useCallback(
    (acceptedFiles: File[]) => {
      const previews = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );
      if (multiple) {
        setFileState((prev: UploadedFile[]) => [...prev, ...previews]);
      } else {
        setFileState(previews[0]);
      }
    },
    [setFileState, multiple]
  );
};
const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [businessPhotos, setBusinessPhotos] = useState<UploadedFile[]>([]);
  const [utilityBill, setUtilityBill] = useState<UploadedFile | null>(null);
  const [registrationCertificate, setRegistrationCertificate] =
    useState<UploadedFile | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [btnState, setBtnState] = useState(false);

  const onBusinessDrop = useCreateOnDrop(setBusinessPhotos, true);
  const onUtilityDrop = useCreateOnDrop(setUtilityBill);
  const onCertDrop = useCreateOnDrop(setRegistrationCertificate);

  const form = useForm<z.infer<typeof setupBusinessValidationSchema>>({
    resolver: zodResolver(setupBusinessValidationSchema),
    defaultValues: {
      spot_name: "",
      spot_address: "",
      opening_hour: "",
      closing_hour: "",
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
  const {
    getRootProps: getBusinessRootProps,
    getInputProps: getBusinessInputProps,
  } = useDropzone({ onDrop: onBusinessDrop, accept: { "image/*": [] } });

  const {
    getRootProps: getUtilityRootProps,
    getInputProps: getUtilityInputProps,
  } = useDropzone({ onDrop: onUtilityDrop, accept: { "image/*": [] } });

  const { getRootProps: getCertRootProps, getInputProps: getCertInputProps } =
    useDropzone({ onDrop: onCertDrop, accept: { "image/*": [] } });

  // // Handle reset for previews
  const handleReset = (
    setFileState: Function,
    file: UploadedFile | UploadedFile[] | null
  ) => {
    if (Array.isArray(file)) {
      file.forEach((f) => URL.revokeObjectURL(f.preview));
    } else if (file) {
      URL.revokeObjectURL(file.preview);
    }
    setFileState(Array.isArray(file) ? [] : null);
  };
  async function onSubmit(
    data: z.infer<typeof setupBusinessValidationSchema>
  ) {}

  return (
    <>
      <section className="">
        <Header title="Home" className="hidden md:block" />
      </section>
      <section className="px-7 py-6 w-[100%]">
        <div className="flex items-center">
          <Link href="/vendor-Home/profile">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className=" md:mt-0 flex justify-center items-center gap-3 w-full">
            <p className="font-bold text-lg md:text-3xl">
              Edit business profile
            </p>
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
                  <p className="text-2xl font-light">Upload Photo</p>
                </div>
              </div>
              {/* end of profile picture */}
              <p className="text-3xl font-semibold mt-5 text-center">
                Spot Details
              </p>

              {/* first name */}
              <FormField
                control={form.control}
                name="spot_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Spot Name:</FormLabel>
                    <FormControl>
                      <Input className={`${inputStyling}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* email */}
              {/* <FormField
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
              /> */}
              {/* phone number */}
              {/* <FormField
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
              /> */}
              {/*business address*/}
              <FormField
                control={form.control}
                name="spot_address"
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
                      <FormLabel className="text-lg">Opening hour:</FormLabel>
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
              <p className="text-center md:text-left text-2xl font-light mb-5">
                Sport Category
              </p>
              <ToggleGroup
                type="single"
                className="gap-5 justify-start flex-wrap"
              >
                <ToggleGroupItem
                  value="bars & pubs"
                  aria-label="Toggle bars & pubs"
                  className="bg-[#4D4D4D66] text-[#4D4D4D] w-[46%] md:w-[30%] text-2xl py-10 text-left border border-[#4D4D4D] hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  Bars & Pubs
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="clubs"
                  aria-label="Toggle clubs"
                  className="bg-[#4D4D4D66] text-[#4D4D4D] w-[46%] md:w-[30%] text-2xl py-10 text-left border border-[#4D4D4D] hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  Clubs
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="hotels"
                  aria-label="Toggle hotels"
                  className="bg-[#4D4D4D66] text-[#4D4D4D] w-[46%] md:w-[33%] text-2xl py-10 text-left border border-[#4D4D4D] hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  Hotels
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="resturants"
                  aria-label="Toggle resturants"
                  className="bg-[#4D4D4D66] text-[#4D4D4D] w-[46%] md:w-[30%] text-2xl py-10 text-left border border-[#4D4D4D] hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  Resturants
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="lounges"
                  aria-label="Toggle lounges"
                  className="bg-[#4D4D4D66] text-[#4D4D4D] w-[46%] md:w-[30%] text-2xl py-10 text-left border border-[#4D4D4D] hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  Lounges
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="beach parties"
                  aria-label="Toggle beach parties"
                  className="bg-[#4D4D4D66] text-[#4D4D4D] w-[46%] md:w-[33%] text-2xl py-10 text-left border border-[#4D4D4D] hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  Beach Parties
                </ToggleGroupItem>
              </ToggleGroup>

              <p className="text-lg md:text-2xl font-bold text-center mb-2 md:mb-5 mt-10">
                Business Features and Listings
              </p>
              {/*closing hour*/}
              <ToggleGroup
                type="multiple"
                className="gap-5 w-[100%] md:w-[60%] flex-wrap justify-center items-center mx-auto"
              >
                <ToggleGroupItem
                  value="beer"
                  aria-label="Toggle beer"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Beer</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="cocktails"
                  aria-label="Toggle cocktails"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Cocktails</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="security"
                  aria-label="Toggle security"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Security</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="dinning"
                  aria-label="Toggle dinning"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Dinning</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="takeaway"
                  aria-label="Toggle takeaway"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Takeaway</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="spirits"
                  aria-label="Toggle spirits"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Spirits</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="food"
                  aria-label="Toggle food"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Food</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="strippers"
                  aria-label="Toggle strippers"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Strippers</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="parking space"
                  aria-label="Toggle parking space"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Parking space</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="reservation"
                  aria-label="Toggle reservation"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Reservation</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="online payment"
                  aria-label="Toggle online payment"
                  className="border broder-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                >
                  <p>Online Payment</p>
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="max-w-lg mx-auto p-6">
                {/* Business Photos */}
                <section className="mb-10">
                  <p className="text-2xl font-bold text-center mb-5">
                    Add photos of business
                  </p>
                  {businessPhotos.length === 0 ? (
                    <div
                      {...getBusinessRootProps()}
                      className="border-2 border-dashed border-gold-500 bg-[#4D4D4D] rounded-lg p-6 text-center cursor-pointer"
                    >
                      <input {...getBusinessInputProps()} />
                      <UploadCloud className="mx-auto text-gold-500 text-lg" />
                      <p className="text-xl font-bold py-2">
                        Choose files or drag & drop
                      </p>
                      <p className="font-light">
                        JPEG, PNG formats, up to 50MB
                      </p>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <div className="flex gap-4 overflow-x-auto pb-4">
                        {businessPhotos.map((file, index) => (
                          <Image
                            key={index}
                            src={file.preview}
                            alt={`Business Preview ${index}`}
                            width={96}
                            height={96}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleReset(setBusinessPhotos, businessPhotos)
                        }
                        className="flex gap-2 p-2 text-white rounded-md hover:bg-gold-500 transition-colors"
                      >
                        <UploadCloud />
                        Change Photos
                      </button>
                    </div>
                  )}
                </section>

                {/* Utility Bill */}
                <section className="mb-10">
                  <p className="text-2xl font-bold text-center mb-5">
                    Add utility bill for business validation
                  </p>
                  {utilityBill === null ? (
                    <div
                      {...getUtilityRootProps()}
                      className="border-2 border-dashed border-gold-500 bg-[#4D4D4D] rounded-lg p-6 text-center cursor-pointer"
                    >
                      <input {...getUtilityInputProps()} />
                      <UploadCloud className="mx-auto text-gold-500 text-lg" />
                      <p className="text-xl font-bold py-2">
                        Choose a file or drag & drop
                      </p>
                      <p className="font-light">
                        JPEG, PNG formats, up to 50MB
                      </p>
                    </div>
                  ) : (
                    <div className="mt-4 text-center">
                      <Image
                        src={utilityBill.preview}
                        alt="Utility Bill Preview"
                        width={120}
                        height={120}
                        className="w-full h-44 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </section>

                {/* Registration Certificate */}
                <section>
                  <p className="text-2xl font-bold text-center mb-5">
                    Add CAC for business verification
                  </p>
                  {registrationCertificate === null ? (
                    <div
                      {...getCertRootProps()}
                      className="border-2 border-dashed border-gold-500 bg-[#4D4D4D] rounded-lg p-6 text-center cursor-pointer"
                    >
                      <input {...getCertInputProps()} />
                      <UploadCloud className="mx-auto text-gold-500 text-lg" />
                      <p className="text-xl font-bold py-2">
                        Choose a file or drag & drop
                      </p>
                      <p className="font-light">
                        JPEG, PNG formats, up to 50MB
                      </p>
                    </div>
                  ) : (
                    <div className="mt-4 text-center">
                      <Image
                        src={registrationCertificate.preview}
                        alt="Certification of Registration Preview"
                        width={120}
                        height={120}
                        className="w-full h-44 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </section>
              </div>
              <div className="w-[100%] md:w-[50%] mx-auto">
                {/*cac number*/}
                {/* <FormField
                  control={form.control}
                  name="cac_number_of_business"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">
                        Type Business CAC number:
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
                /> */}
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
