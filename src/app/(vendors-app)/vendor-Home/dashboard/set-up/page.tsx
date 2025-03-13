"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/UI/toggle-group";
import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import { toast } from "@/components/UI/use-toast";
import { inputStyling } from "@/utils/constant";
import { Textarea } from "@/components/UI/textarea";
import { setupBusinessValidationSchema } from "@/types/authSchemas";
import {
  getSpotCategories,
  getSpotFeatures,
  getSpotOffers,
  createNewSpot,
  createNewSpotMedia,
} from "@/app/vendorAction";
import { vendorStore } from "@/store/vendor";

type UploadedFile = {
  preview: string;
} & File; // Extending the File type to include the preview property
interface Token {
  accessToken: string;
}
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
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [btnState, setBtnState] = useState(false);
  const [spotCategory, setSpotCategory] = useState<any[]>([]);
  const [spotFeatures, setSpotFeatures] = useState<any[]>([]);
  const [spotOffers, setSpotOffers] = useState<any[]>([]);
  const [selectedSpotCategory, setSelectedSpotCategory] = useState("");
  const [selectedSpotFeatures, setSelectedSpotFeatures] = useState<any[]>([]);
  const [selectedSpotOffer, setSelectedSpotOffer] = useState<any[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

  const onBusinessDrop = useCreateOnDrop(setBusinessPhotos, true);

  const token = vendorStore((state: any) => state?.token) as Token;

  const form = useForm<z.infer<typeof setupBusinessValidationSchema>>({
    resolver: zodResolver(setupBusinessValidationSchema),
    defaultValues: {
      spot_name: "",
      spot_address: "",
      spot_state: "",
      spot_description: "",
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

  useEffect(() => {
    const fetchSpotCategory = async () => {
      try {
        const responseData = await getSpotCategories(token.accessToken);
        const spotCategory = responseData;
        setSpotCategory(Array.isArray(spotCategory) ? spotCategory : []);
      } catch (error: any) {
        console.error("Error fetching spot categories:", error.message);
      }
    };
    fetchSpotCategory();
  }, [token]);
  console.log("spot category: ", spotCategory);
  useEffect(() => {
    const fetchSpotFeatures = async () => {
      try {
        const responseData = await getSpotFeatures(token.accessToken);
        console.log("Fetched Spot Features:", responseData); // Log fetched features
        const spotFeatures = responseData;
        setSpotFeatures(Array.isArray(spotFeatures) ? spotFeatures : []);
      } catch (error: any) {
        console.error("Error fetching spot features:", error.message);
      }
    };
    fetchSpotFeatures();
  }, [token]);
  console.log(spotFeatures);
  useEffect(() => {
    const fetchSpotOffers = async () => {
      try {
        const responseData = await getSpotOffers(token.accessToken);
        console.log("Fetched Spot Offers:", responseData); // Log fetched offers
        const spotOffers = responseData;
        setSpotOffers(Array.isArray(spotOffers) ? spotOffers : []);
      } catch (error: any) {
        console.error("Error fetching spot offers:", error.message);
      }
    };
    fetchSpotOffers();
  }, [token]);
  console.log(spotOffers);
  const handleSpotCategoryChange = (value: string) => {
    setSelectedSpotCategory(value);
  };
  const handleSpotFeatureChange = (value: any[]) => {
    setSelectedSpotFeatures(value);
  };

  const handleSpotOfferChange = (value: any[]) => {
    setSelectedSpotOffer(value);
  };
  // const handleSpotFeatureChange = (value: string[]) => {
  //   const featureNames = value
  //     .map((name) => {
  //       const feature = spotFeatures.find((f) => f.name === name);
  //       return feature ? feature.name : null;
  //     })
  //     .filter((name) => name !== null);

  //   setSelectedSpotFeatures(featureNames as string[]);
  //   console.log("Selected feature names:", featureNames); // Log selected feature names
  // };
  console.log(selectedSpotFeatures);
  // const handleSpotOfferChange = (value: string[]) => {
  //   const offerNames = value
  //     .map((name) => {
  //       const offer = spotOffers.find((o) => o.name === name);
  //       return offer ? offer.name : null;
  //     })
  //     .filter((name) => name !== null);

  //   setSelectedSpotOffer(offerNames as string[]);
  //   console.log("Selected offer names:", offerNames); // Log selected offer names
  // };
  console.log(selectedSpotOffer);

  const handleEntryChange = (value: string) => {
    setSelectedEntry(value);
    console.log("Selected value:", value);
  };
  console.log(selectedEntry);
  console.log("Selected features:", selectedSpotFeatures);
  console.log("Selected offers:", selectedSpotOffer);

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
    setBtnState(true);
    try {
      const spotDetailsFormData = new FormData();

      if (selectedFile) {
        spotDetailsFormData.append("primary_image", selectedFile);
      }

      spotDetailsFormData.append("name", data.spot_name);
      spotDetailsFormData.append("location", data.spot_address);
      spotDetailsFormData.append("state", data.spot_state);
      spotDetailsFormData.append("description", data.spot_description);
      spotDetailsFormData.append("opening_time", data.opening_hour);
      spotDetailsFormData.append("closing_time", data.closing_hour);
      spotDetailsFormData.append("category", selectedSpotCategory);
      // spotDetailsFormData.append(
      //   "features",
      //   JSON.stringify(selectedSpotFeatures)
      // );
      // spotDetailsFormData.append("offers", JSON.stringify(selectedSpotOffer));
      // spotDetailsFormData.append("features", selectedSpotFeatures);
      // spotDetailsFormData.append("offers", selectedSpotOffer);
      // Appending features and offers individually
      selectedSpotFeatures.forEach((feature, index) => {
        spotDetailsFormData.append(`feature_${index}`, feature);
      });

      selectedSpotOffer.forEach((offer, index) => {
        spotDetailsFormData.append(`offer_${index}`, offer);
      });
      spotDetailsFormData.append("entry", selectedEntry || "");

      // Log form data for debugging
      // for (let [key, value] of spotDetailsFormData.entries()) {
      //   console.log(key, ": ", value);
      // }

      const spotDetailsResponse = await createNewSpot(
        spotDetailsFormData,
        token.accessToken
      );

      if (!spotDetailsResponse.ok) {
        const error = await spotDetailsResponse.json();
        throw new Error(
          error.error.features ||
            error.error.offers ||
            "Failed to submit spot details"
        );
      }

      const spotDetailsResult = await spotDetailsResponse.json();
      const spotId = spotDetailsResult.slug;

      const photosFormData = new FormData();
      businessPhotos.forEach((file) => {
        photosFormData.append("photos", file);
      });

      // for (let [key, value] of photosFormData.entries()) {
      //   console.log(key, value);
      // }

      const photosResponse = await createNewSpotMedia(
        photosFormData,
        spotId,
        token.accessToken
      );

      if (!photosResponse.ok) {
        throw new Error("Failed to upload photos");
      }

      toast({
        title: "Spot setup successful",
        description: "Your spot has been successfully set up!",
        variant: "success",
      });
    } catch (error: any) {
      toast({
        title: "An error occurred!",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setBtnState(false);
    }
  }

  return (
    <>
      <section className="">
        <Header title="Home" className="hidden md:block" />
      </section>
      <section className="px-3 md:px-7 py-6 w-[100%]">
        <div className="flex items-center">
          <Link href="/vendor-Home/dashboard">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className=" md:mt-0 flex justify-center items-center gap-3 w-full">
            <p className="font-bold text-lg md:text-3xl">Continue Spot setup</p>
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
              {/*business location*/}
              <FormField
                control={form.control}
                name="spot_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Spot Address:</FormLabel>
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
              {/*business state*/}
              <FormField
                control={form.control}
                name="spot_state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Spot State:</FormLabel>
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
              <FormField
                control={form.control}
                name="spot_description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Spot description:</FormLabel>
                    <FormControl>
                      <Textarea className={`${inputStyling}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="font-semibold text-lg">Spot entry</p>
              <Select>
                <SelectTrigger className={`${inputStyling}`}>
                  <SelectValue placeholder="Select an entry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="free"
                    onClick={() => handleEntryChange("free")}
                  >
                    free
                  </SelectItem>
                  <SelectItem
                    value="paid"
                    onClick={() => handleEntryChange("paid")}
                  >
                    paid
                  </SelectItem>
                </SelectContent>
              </Select>
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
                onValueChange={handleSpotCategoryChange}
              >
                {spotCategory.map((category) => (
                  <ToggleGroupItem
                    key={category.name}
                    value={category.name}
                    aria-label={`Toggle ${category.name}`}
                    className="bg-[#4D4D4D66] text-[#4D4D4D] w-[46%] md:w-[30%] text-2xl py-10 text-left border border-[#4D4D4D] hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                  >
                    {category.name}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
              <p className="text-lg md:text-2xl font-bold text-center mb-2 md:mb-5 mt-10">
                Spot Features and Listings
              </p>
              <ToggleGroup
                type="multiple"
                className="gap-5 w-[100%] md:w-[60%] flex-wrap justify-center items-center mx-auto"
                onValueChange={handleSpotFeatureChange}
              >
                {spotFeatures.map((feature) => (
                  <ToggleGroupItem
                    key={feature.slug}
                    value={feature.slug}
                    aria-label={`Toggle ${feature.slug}`}
                    className="border border-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                  >
                    <p>{feature.name}</p>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
              <p className="text-lg md:text-2xl font-bold text-center mb-2 md:mb-5 mt-10">
                Spot Offers
              </p>
              <ToggleGroup
                type="multiple"
                className="gap-5 w-[100%] md:w-[60%] flex-wrap justify-center items-center mx-auto"
                onValueChange={handleSpotOfferChange}
              >
                {spotOffers.map((offer) => (
                  <ToggleGroupItem
                    key={offer.slug}
                    value={offer.slug}
                    aria-label={`Toggle ${offer.slug}`}
                    className="border border-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                  >
                    <p>{offer.name}</p>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
              <div className="max-w-lg mx-auto p-6">
                {/* Spot Photos */}
                <section className="mb-10">
                  <p className="text-xl md:text-2xl font-bold text-center mb-5">
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
              </div>
              <div className="w-[100%] md:w-[50%] mx-auto">
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
