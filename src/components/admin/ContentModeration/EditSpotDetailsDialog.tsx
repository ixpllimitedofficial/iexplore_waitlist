import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/UI/input";
import fileSvg from "@/assets/svg/AdminIconsSvg/fileSvg.svg";
import { Button } from "@/components/UI/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";
import { adminActions } from "@/app/adminActions";
import { formatTo12Hour } from "@/utils/functions/timeFormatter";

interface Creator {
  id: string;
  username: string;
  email: string;
}

interface SpotData {
  id: string;
  creator: Creator;
  category: string;
  features: string | string[];
  offers: string[];
  primary_image: string;
  name: string;
  location: string;
  state: string;
  description: string;
  slug: string;
  entry: string;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
  opening_time: string;
  closing_time: string;
}

interface EditSpotDetailsDialogProps {
  spotId: string;
  initialSpotData: SpotData;
  onSuccess?: () => void;
}

const EditSpotDetailsDialog: React.FC<EditSpotDetailsDialogProps> = ({
  spotId,
  initialSpotData,
  onSuccess,
}) => {
  const { updateSpotDetails, isLoading, error } = adminActions();
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState<Partial<SpotData>>({
    name: initialSpotData.name,
    location: initialSpotData.location,
    // features: initialSpotData.features || [],
    description: initialSpotData.description,
    opening_time: initialSpotData.opening_time,
    closing_time: initialSpotData.closing_time,
    primary_image: initialSpotData.primary_image
  });

  // Sync formData with initialSpotData if it changes
  useEffect(() => {
    setFormData({
      name: initialSpotData.name,
      location: initialSpotData.location,
      features: Array.isArray(initialSpotData.features)
        ? initialSpotData.features
        : typeof initialSpotData.features === "string"
          ? initialSpotData.features.split(",").map((item) => item.trim())
          : [],
      description: initialSpotData.description,
      opening_time: initialSpotData.opening_time,
      closing_time: initialSpotData.closing_time,
      primary_image: initialSpotData.primary_image
    });
  }, [initialSpotData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You need to be logged in.");
      return;
    }

    try {
      await updateSpotDetails(spotId, formData, token);
      setOpen(false);
      onSuccess?.();
    } catch (err) {
      console.error("Failed to update spot", err);
      alert("Failed to update spot details. Please try again.");
    }
  };

  const displayFeatures = () => {
    if (initialSpotData.features) {
      if (Array.isArray(initialSpotData.features)) {
        return initialSpotData.features.filter(feature => feature).join(", ") || "No features available";
      }
      return typeof initialSpotData.features === 'string' ? initialSpotData.features : "No features available";
    }
    return "No features available";
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full md:w-[196px] bg-transparent text-white rounded-full px-8 py-2 border hover:bg-transparent">
          <p className="text-lg font-bold">Edit</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[800px] bg-[#212121] p-4 md:p-6 rounded-xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-3xl font-bold text-center">
            Edit Spot Details
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 md:gap-5">
            {/* Spot Information */}
            <h2 className="text-center my-2 md:my-3 text-sm md:text-base">
              Spot Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              <div>
                <Input
                  placeholder="Spot name"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className="w-full h-[48px] md:h-[64px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
                />
              </div>
              <div>
                <Input
                  placeholder="Spot location"
                  name="location"
                  value={formData.location || ""}
                  onChange={handleChange}
                  className="w-full h-[48px] md:h-[64px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full h-12 md:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full h-12 md:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
                />
              </div>
            </div>


            {/* Spot Details */}
            <h2 className="text-center my-2 md:my-3 text-sm md:text-base">
              Spot Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              <div className="w-full h-[48px] md:h-[64px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white flex items-center">
                <span className="text-gray-400">Features: </span>
                <span className="text-sm">{displayFeatures()}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-5">
                <div>
                  <Input
                    type="time"
                    placeholder="Opening Time"
                    name="opening_time"
                    value={formData.opening_time || ""}
                    onChange={handleChange}
                    className="w-full h-[48px] md:h-[64px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
                  />
                </div>
                <div>
                  <Input
                    type="time"
                    placeholder="Closing Time"
                    name="closing_time"
                    value={formData.closing_time || ""}
                    onChange={handleChange}
                    className="w-full h-[48px] md:h-[64px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              <div>
                <Input
                  placeholder="Spot description"
                  name="feature"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full h-[48px] md:h-[64px] bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Business phone number"
                  className="w-full h-12 md:h-14 bg-[#333333] border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[440px] h-[200px] mx-auto  mt-4 md:mt-5 border-2 border-gold-500 border-dotted p-4 md:p-6 rounded-xl text-center mb-4 md:mb-6">
            {initialSpotData.primary_image ? (
              <div className="w-full h-full flex justify-center items-center">
                <Image
                  src={initialSpotData.primary_image}
                  alt={initialSpotData.name || 'Spot image'}
                  width={300}
                  height={150}
                  className="object-cover rounded-lg h-48 w-full"
                  priority
                />
              </div>
            ) : (
              <>
                <div className="flex justify-center items-center">
                  <Image src={fileSvg} alt="file icon" />
                </div>
                <p className="text-sm md:text-base text-gray-400">
                  No image available
                </p>
                <p className="text-xs md:text-sm text-gray-500">
                  This spot primary image will be displayed here
                </p>
              </>
            )}
          </div>
          <DialogFooter className="mt-4 md:mt-6 text-center">
            <Button
              type="submit"
              className="w-full bg-[#333333] text-white px-4 md:px-6 py-2 rounded-full hover:bg-gold-600 transition"
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditSpotDetailsDialog;
