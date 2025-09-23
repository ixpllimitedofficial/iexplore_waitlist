you create 'use client';

import React, { useState, ChangeEvent } from "react";
import UploadSvgIcon from "@/assets/svg/AdminIconsSvg/UploadSvgIcon.svg";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

interface Plan {
  id: number;
  type: string;
  price: number;
  duration: string;
}

const CreateAd: React.FC = () => {
  const router = useRouter();
  const [adName, setAdName] = useState<string>("");
  const [adDescription, setAdDescription] = useState<string>("");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const plans: Plan[] = [
    { id: 1, type: "Basic", price: 5000, duration: "7 Days" },
    { id: 2, type: "Premium", price: 15000, duration: "14 Days" },
    { id: 3, type: "Basic", price: 9000, duration: "14 Days" },
    { id: 4, type: "Premium", price: 25000, duration: "30 Days" },
  ];

  const handlePlanSelect = (plan: Plan): void => setSelectedPlan(plan);

  const handleSubmit = (): void => {
    if (!adName || !adDescription || !selectedPlan) {
      alert("Please fill all the details and select a plan.");
      return;
    }
    console.log("Ad submitted", { adName, adDescription, selectedPlan });
    // Navigate to Checkout (e.g., router.push("/checkout"))
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const triggerFileInput = (): void => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  // const handleCheckOut = () => {
  //   router.push("/checkout");
  // };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white md:p-6">
      <div className="flex items-center justify-between w-full mb-4">
        {/* Back Icon */}
        <div
          className="bg-[#4D4D4D] rounded-md p-2 cursor-pointer flex-shrink-0"
          onClick={() => router.back()}
        >
          <ChevronLeft size={24} className="text-white md:size-[32]" />
        </div>

        {/* Header Text */}
        <h1 className="text-xl md:text-3xl font-bold text-white text-center flex-grow">
          Create ad
        </h1>
      </div>

      <div className="w-[343px] md:w-[573px] mb-6 flex flex-col justify-center items-center">
        <p className="text-gray-300 mb-1">Ad details</p>
        <div className="flex flex-col items-center">
          <div
            className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] bg-[#33333399] flex items-center justify-center rounded-full mb-4"
            onClick={triggerFileInput}
            style={{
              backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!selectedImage && <p className="text-white">No Image</p>}
          </div>
          <div
            className="flex flex-row justify-center items-center gap-2 my-4 cursor-pointer"
            onClick={triggerFileInput}
          >
            <Image src={UploadSvgIcon} alt="Upload Icon" width={24} height={24} />
            <p className="text-sm">Upload photo</p>
          </div>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <input
          type="text"
          placeholder="Ad name"
          value={adName}
          onChange={(e) => setAdName(e.target.value)}
          className="w-full bg-[#33333399] p-3 rounded text-white mb-4"
        />
        <textarea
          placeholder="Ad description"
          value={adDescription}
          onChange={(e) => setAdDescription(e.target.value)}
          className="w-full bg-[#33333399] p-3 rounded text-white mb-4"
          rows={4}
        />
      </div>
      <div className="w-[343px] md:w-[573px]">
        <h2 className="text-2xl font-bold mb-4">Choose plan</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {plans.map((plan) => (
            <button
              key={plan.id}
              className={`p-4 rounded-xl bg-[#33333399] hover:bg-gold-500 ${selectedPlan?.id === plan.id ? "border-yellow-400 border-2" : ""
                }`}
              onClick={() => handlePlanSelect(plan)}
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Price:</p>
                <span>₦{plan.price.toLocaleString()}</span>
              </div>
              <p className="text-gray-400 border mt-2 border-[#47454599] py-1 rounded-full ">
                {plan.duration}
              </p>
            </button>
          ))}
        </div>
        <Link href='/admin/ads-management/checkout'>
          <button
            // onClick={handleSubmit}
            // onClick={handleCheckOut}
            className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-full"
          >
            Proceed to checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateAd;
