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
      <section className="px-3 md:px-7 py-6 w-[100%]">
        <div className="flex items-center">
          <Link href="/vendor-Home/business">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className=" md:mt-0 flex justify-center items-center gap-3 w-full">
            <p className="font-bold text-lg md:text-3xl">
              Continue Spot Verification
            </p>
          </div>
        </div>
        <div className="mt-10 w-[100%] md:w-[80%] mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-7 flex flex-col gap-4"
            >
              {/* end of profile picture */}
              <p className="text-3xl font-semibold mt-5 text-center">
                Spot Credentials
              </p>
              <div className="max-w-lg mx-auto p-6">
                {/* Utility Bill */}
                <section className="mb-10">
                  <p className="text-xl md:text-2xl font-bold text-center mb-5">
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
                  <p className="text-xl md:text-2xl font-bold text-center mb-5">
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
                <FormField
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
