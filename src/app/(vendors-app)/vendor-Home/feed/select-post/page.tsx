"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/vendor-components/MiniHeader/Header";
import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import { useRouter } from "next/navigation";

interface File {
  type: string;
  preview: string;
  name: string;
}

const page = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[] | null>(null);
  const [checkedFiles, setCheckedFiles] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [posting, setPosting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const files = localStorage.getItem("uploadedFiles");
    if (files) {
      setUploadedFiles(JSON.parse(files));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(checkedFiles).length > 0) {
      handlePost();
    }
  }, [checkedFiles]);

  const handleFileSelect = (index: number) => {
    setCheckedFiles((prevCheckedFiles) => {
      const newCheckedFiles = { ...prevCheckedFiles };
      if (newCheckedFiles[index]) {
        delete newCheckedFiles[index];
      } else {
        newCheckedFiles[index] = true;
      }
      return newCheckedFiles;
    });
  };

  // const handlePost = () => {
  //   setPosting(true);
  //   setTimeout(() => {
  //     // Redirect to post page
  //     router.push("/vendor-Home/feed/post-feed");
  //   }, 2000); // Wait for 2 seconds before redirecting
  // };
  const handlePost = () => {
    setPosting(true);
    const selectedFiles = uploadedFiles?.filter(
      (file, index) => checkedFiles[index]
    );
    localStorage.setItem("selectedFiles", JSON.stringify(selectedFiles));
    setTimeout(() => {
      // Redirect to post page
      router.push("/vendor-Home/feed/post-feed");
    }, 5000); // Wait for 2 seconds before redirecting
  };

  return (
    <main>
      <Header title="Feed" className="hidden md:block" />
      <section className="px-3 md:px-7 md:py-6 w-[100%] h-screen md:h-fit">
        <div className="flex items-center">
          <Link href="/vendor-Home/feed">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className=" md:mt-0 flex justify-center items-center gap-3 w-full">
            <p className="font-bold text-lg md:text-3xl">Select post</p>
          </div>
        </div>

        <div className="mt-5">
          {uploadedFiles ? (
            <div className="grid grid-cols-3 gap-4 ">
              {uploadedFiles.map((file: File, index: number) => (
                <div key={index} className="relative">
                  {checkedFiles[index] ? (
                    <div className="absolute top-0 right-0 bg-gold-500 text-white px-2 py-1 rounded-lg">
                      Selected
                    </div>
                  ) : null}
                  <input
                    type="checkbox"
                    className="absolute top-0 right-0 z-10"
                    checked={checkedFiles[index] || false}
                    onChange={() => handleFileSelect(index)}
                  />
                  {file.type && file.type.startsWith("image/") ? (
                    <Image
                      src={file.preview}
                      alt={file.name}
                      width={100}
                      height={48}
                      className="w-full h-24 md:h-48 object-cover rounded-lg"
                    />
                  ) : (
                    <video
                      src={file.preview}
                      controls
                      className="w-full h-24 md:h-48 object-cover rounded-lg"
                    />
                  )}
                  <p className="mt-2">{file.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No files uploaded</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default page;
