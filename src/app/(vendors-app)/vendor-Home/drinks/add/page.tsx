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
import { Toggle } from "@/components/UI/toggle";
import { Checkbox } from "@/components/UI/checkbox";
import { Input } from "@/components/UI/input";
import { Textarea } from "@/components/UI/textarea";
import PasswordField from "@/components/UI/Inputs/PasswordField";
import { Button } from "@/components/UI/button";
import { toast } from "@/components/UI/use-toast";
import { inputStyling } from "@/utils/constant";
import { addDrinksValidationSchema } from "@/types/authSchemas";
import {
  createNewDrink,
  getAllSpots,
  getDrinksCategories,
} from "@/app/vendorAction";

import { vendorStore } from "@/store/vendor";

type UploadedFile = {
  preview: string;
} & File; // Extending the File type to include the preview property

interface Token {
  accessToken: string;
}
interface Spot {
  id: number;
  name: string;
}
const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [btnState, setBtnState] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(""); // Store as string
  const [selectedVolume, setSelectedVolume] = useState<number | null>(null);
  const [spots, setSpots] = useState<Spot[]>([]);
  const [drinksCategory, setDrinksCategory] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [spotSelectedIndex, setSpotSelectedIndex] = useState<number | null>(
    null
  );
  const token = vendorStore((state: any) => state.token) as Token;
  const savedVendor = vendorStore((state: any) => state.savedVendor);
  const vendorId = savedVendor.data.user.id;

  useEffect(() => {
    const fetchDrinkCategory = async () => {
      try {
        const responseData = await getDrinksCategories(token.accessToken);
        const drinksCategoryData = responseData.results;
        setDrinksCategory(
          Array.isArray(drinksCategoryData) ? drinksCategoryData : []
        );
      } catch (error: any) {
        console.error("Error fetching drink categories:", error.message);
      }
    };
    fetchDrinkCategory();
  }, [token]);
  const handleValueChange = (value: string) => {
    setSelectedCategory(value); // Update state with string value
  };
  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const spots = await getAllSpots(token.accessToken);
        setSpots(spots);
      } catch (error: any) {
        console.error("Error fetching spots:", error.message);
      }
    };
    fetchSpots();
  }, [token]);

  const handleSelectChange = (value: string) => {
    const spot = spots.find((spot) => spot.name === value);
    if (spot) {
      console.log("Selected Spot ID:", spot.id);
      setSpotSelectedIndex(spot.id);
    }
  };
  const handleVolumeChange = (value: string) => {
    const numericValue = parseFloat(value.replace(/[^\d.]/g, ""));
    setSelectedVolume(numericValue);
    console.log("Selected Volume:", numericValue);
  };
  console.log(selectedVolume);
  const form = useForm<z.infer<typeof addDrinksValidationSchema>>({
    resolver: zodResolver(addDrinksValidationSchema),
    defaultValues: {
      drinks_name: "",
      drinks_price: "",
      drink_location: "",
      drinks_description: "",
    },
  });
  const { handleSubmit } = form;

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
    try {
      setBtnState(true);

      // Initialize FormData for file and other fields
      const formData = new FormData();
      formData.append("name", data.drinks_name);
      formData.append("description", data.drinks_description || "");
      formData.append("location", data.drink_location);
      formData.append("vendor", vendorId);
      formData.append("spot", spotSelectedIndex.toString());
      if (selectedCategory !== null) {
        formData.append("category_id", selectedCategory); // Pass as string
      }
      formData.append("volume", selectedVolume.toString()); // Ensure this is a string if required by the backend
      formData.append("price", data.drinks_price);

      // Attach the selected file
      if (selectedFile) {
        formData.append("images[0][drink]", "0"); // Replace "0" with a valid drink ID if required
        formData.append("images[0][image]", selectedFile);
      }

      // Send FormData to createNewDrink function
      const result = await createNewDrink(formData, token.accessToken);
      console.log("API Response:", result);

      if (result.status === "success") {
        toast({
          title: "Drink added successfully!",
          variant: "success",
        });
      } else {
        toast({
          title: "An error occurred!",
          description: result.message || "Unable to add drink.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("Error adding drink:", error);
      toast({
        title: "An error occurred!",
        description: error.message || "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setBtnState(false);
    }
  }

  return (
    <>
      <section className="">
        <Header title="Drinks" className="hidden md:block" />
      </section>
      <section className="px-3 md:px-7 md:py-6 w-[100%]">
        <div className="flex items-center">
          <Link href="/vendor-Home/drinks">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="md:mt-0 flex justify-center items-center gap-3 w-full">
            <p className="font-bold text-lg md:text-3xl">Add Drink</p>
          </div>
        </div>
        <div className="mt-10 w-[100%] md:w-[80%] mx-auto">
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
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
              {/* drink location */}
              <FormField
                control={form.control}
                name="drink_location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Drink Location</FormLabel>
                    <FormControl>
                      <Input className={`${inputStyling}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* select spot */}
              {/* <FormField
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
              /> */}
              <p className="font-semibold text-lg">Select a spot</p>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className={`${inputStyling}`}>
                  <SelectValue placeholder="Select a spot" />
                </SelectTrigger>
                <SelectContent>
                  {spots.map((spot: any) => (
                    <SelectItem key={spot.id} value={spot.name}>
                      {spot.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <p className="text-lg md:text-lg mb-2 md:mb-5">Drinks category</p>
              {/*closing hour*/}
              <ToggleGroup
                type="single"
                value={selectedCategory}
                onValueChange={handleValueChange}
                className="gap-5 w-[100%] flex-wrap justify-center items-center mx-auto mb-5"
              >
                {" "}
                {Array.isArray(drinksCategory) &&
                  drinksCategory.map((category, index) => (
                    <ToggleGroupItem
                      key={category.id}
                      value={category.name}
                      aria-label={`Toggle ${category.name}`}
                      className="border border-[#4D4D4D] text-[#4D4D4D] p-4 px-4 rounded-full hover:bg-gold-500 data-[state=on]:bg-gold-500 data-[state=on]:border-none"
                    >
                      {" "}
                      <p>{category.name}</p>{" "}
                    </ToggleGroupItem>
                  ))}{" "}
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
                type="single"
                value={selectedVolume !== null ? `${selectedVolume}cl` : ""}
                onValueChange={(value: string) => handleVolumeChange(value)}
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
                  className="mb-3 bg-[#4D4D4D] w-full mt-10 hover:bg-white transition duration-200 text-[#B0B0B0] px-8 py-5 lg:py-6 rounded-3xl font-bold text-base flex-grow"
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
