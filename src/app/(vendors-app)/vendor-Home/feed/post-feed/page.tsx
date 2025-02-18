"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import { useRouter } from "next/navigation";
import { inputStyling } from "@/utils/constant";
import { feedPostValidationSchema } from "@/types/authSchemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";
import { Textarea } from "@/components/UI/textarea";
import { Button } from "@/components/UI/button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";

interface File {
  type: string;
  preview: string;
  name: string;
}

const Page = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null);
  const [btnState, setBtnState] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const files = localStorage.getItem("selectedFiles");
    if (files) {
      setSelectedFiles(JSON.parse(files));
    }
  }, []);

  const form = useForm<z.infer<typeof feedPostValidationSchema>>({
    resolver: zodResolver(feedPostValidationSchema),
    defaultValues: {
      post_caption: "",
    },
  });

  async function onSubmit(data: z.infer<typeof feedPostValidationSchema>) {
    // ...
    // Share post logic here...
    setIsModalOpen(true);
  }

  return (
    <main>
      <Header title="Feed" className="hidden md:block" />
      <section className="px-3 md:px-7 md:py-6 w-[100%]">
        <div className="flex items-center">
          <Link href="/vendor-Home/feed/select-post">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className=" md:mt-0 flex justify-center items-center gap-3 w-full">
            <p className="font-bold text-lg md:text-3xl">Share a moment</p>
          </div>
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-7 flex flex-col gap-4"
            >
              <div className="flex flex-col md:flex-row gap-3 md:bg-[#4D4D4D1A]">
                <div className="md:w-1/2">
                  {selectedFiles && selectedFiles.length > 0 ? (
                    <div>
                      {selectedFiles[0].type.startsWith("image/") ? (
                        <Image
                          src={selectedFiles[0].preview}
                          alt="Selected image"
                          width={100}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video controls className="w-full h-full object-cover">
                          <source
                            src={selectedFiles[0].preview}
                            type={selectedFiles[0].type}
                          />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  ) : (
                    <div>No file selected</div>
                  )}
                </div>
                <div className="md:w-1/2 p-3">
                  <div className="hidden md:flex gap-1 items-center mb-3">
                    <Image
                      src={StoryImg}
                      alt="profile image"
                      width="50"
                      height="50"
                    />
                    <p>John Doe</p>
                  </div>
                  {/*phone description*/}
                  <FormField
                    control={form.control}
                    name="post_caption"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Post caption</FormLabel>
                        <FormControl>
                          <Textarea className={`${inputStyling}`} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="mb-8 md:mb-3 bg-gold-500 w-full mt-5 hover:bg-gold-600 transition duration-200 text-brandDark px-8 py-5 lg:py-6 rounded-3xl font-bold text-base flex-grow"
                    type="submit"
                    disabled={btnState}
                  >
                    {!btnState ? "Share post" : "Sharing..."}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50  backdrop-filter backdrop-blur-sm md:backdrop-filter-none md:backdrop-blur-none  flex items-center justify-center">
            <div className="bg-[#0E0E0E] text-center w-[90%] md:w-[30%] mx-auto rounded-lg p-4 border-2 border-gold-500">
              <h2 className="text-lg font-bold mb-2">
                Your post has been shared
              </h2>
              <div className="bg-[#4D4D4D] w-fit mx-auto my-5 p-4 rounded-full border border-white border-opacity-30">
                <CheckCircleOutlineIcon className="text-4xl text-gold-500" />
              </div>
              <button
                className="bg-gold-500 hover:bg-gold-600 transition duration-200 text-brandDark px-8 py-3 w-full rounded-3xl font-bold text-base flex-grow"
                onClick={() => {
                  setIsModalOpen(false);
                  // Navigate to another page
                  router.push("/vendor-Home/feed");
                }}
              >
                Return to Feed
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Page;
