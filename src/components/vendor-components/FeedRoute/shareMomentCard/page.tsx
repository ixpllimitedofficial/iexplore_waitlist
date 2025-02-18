"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { PlusIcon } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

type UploadedFile = {
  preview: string;
  type: string; // Ensure type is included here
} & File;

const useCreateOnDrop = (setFileState: Function, multiple: boolean = false) => {
  return useCallback(
    (acceptedFiles: File[]) => {
      const previews = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );
      if (multiple) {
        setFileState((prev: UploadedFile[] | null) => {
          if (prev === null) {
            return previews;
          } else {
            return [...prev, ...previews];
          }
        });
      } else {
        setFileState(previews[0]);
      }
    },
    [setFileState, multiple]
  );
};
const Page = () => {
  const [contentUpload, setContentUpload] = useState<UploadedFile[] | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [files, setFiles] = useState<UploadedFile[] | null>(null);
  const router = useRouter();
  const onContentDrop = useCreateOnDrop(setContentUpload, true);
  const {
    getRootProps: getContentRootProps,
    getInputProps: getContentInputProps,
  } = useDropzone({
    onDrop: onContentDrop,
    accept: { "image/*": [], "video/*": [] },
  });

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const mobileHandleOpen = () => {
    setIsMobileOpen(true);
  };
  const MobileHandleClose = () => {
    setIsMobileOpen(false);
  };
  const fileInputRef = React.createRef<HTMLInputElement>();

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  useEffect(() => {
    if (contentUpload && Array.isArray(contentUpload)) {
      // Ensure each file includes the type property
      const updatedContentUpload = contentUpload.map((file) => ({
        ...file,
        type: file.type || "unknown", // Ensure type is set or default to "unknown"
      }));

      setFiles(updatedContentUpload);
      localStorage.setItem(
        "uploadedFiles",
        JSON.stringify(updatedContentUpload)
      );
      router.push("/vendor-Home/feed/select-post");
    }
  }, [contentUpload, router]);
  return (
    <>
      <div>
        <p
          onClick={handleOpen}
          className="hidden md:flex gap-1 items-center bg-gold-500 py-2 px-5 text-brandDark rounded-3xl cursor-pointer w-fit"
        >
          <PlusIcon /> Share moment
        </p>
        {isOpen && (
          // Modal backdrop
          <div
            className="fixed z-30 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={handleClose}
          >
            {/* // Modal container */}
            {contentUpload === null ? (
              <div
                {...getContentRootProps()}
                className="bg-[#0E0E0E] text-center border-2 border-gold-500 rounded-lg shadow-lg p-5 w-1/2 md:w-1/3 lg:w-1/4"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-lg font-bold mb-2">Share a Moment</h2>
                <input {...getContentInputProps()} ref={fileInputRef} />
                <p className="text-[#B0B0B0] mb-4">
                  Drag photoes or videos here or select from your computer
                </p>
                <button
                  className="bg-gold-500 hover:bg-gold-700 text-white font-bold py-2 px-8 rounded-3xl"
                  onClick={() => {
                    if (fileInputRef.current) {
                      fileInputRef.current.click();
                    }
                  }}
                >
                  Select from computer
                </button>
              </div>
            ) : (
              "Redirecting....."
            )}
          </div>
        )}
      </div>
      <div
        onClick={mobileHandleOpen}
        className="md:hidden fixed z-[200] top-[80%] right-10 border border-gold-500 p-1 rounded-full cursor-pointer"
      >
        <div className="bg-gold-500 text-brandDark p-3 text-3xl rounded-full">
          <PlusIcon />
        </div>
      </div>
      {isMobileOpen && (
        //Mobile modal backdrop
        <div
          className="fixed z-[100] inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center"
          onClick={MobileHandleClose}
        >
          {contentUpload === null ? (
            <div
              {...getContentRootProps()}
              onClick={(e) => e.stopPropagation()}
              className="fixed bottom-12 right-28"
            >
              <div className="bg-[#4D4D4D] border border-white border-opacity-30 p-3 px-5 flex gap-2 rounded-3xl">
                <input {...getContentInputProps()} ref={fileInputRef} />
                <p
                  onClick={() => {
                    if (fileInputRef.current) {
                      fileInputRef.current.click();
                    }
                  }}
                  className="text-sm flex gap-1 items-center font-bold"
                >
                  <CollectionsOutlinedIcon />
                  Share post
                </p>
                <p className="text-sm flex gap-1 items-center font-bold text-[#B0B0B0]">
                  <VideocamOutlinedIcon />
                  Go live
                </p>
              </div>
            </div>
          ) : (
            "Redirecting...."
          )}
        </div>
      )}
    </>
  );
};

export default Page;
