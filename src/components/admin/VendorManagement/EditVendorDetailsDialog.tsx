import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";
import { useState, useEffect, FormEvent } from "react";
import { adminActions } from "@/app/adminActions";

interface VendorData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  business_name: string;
  business_email: string;
  business_phone: string;
  business_address: string;
}

interface EditVendorDetailsDialogProps {
  vendorId: string;
  initialVendorData: VendorData;
  onSuccess?: () => void;
}

const EditVendorDetailsDialog: React.FC<EditVendorDetailsDialogProps> = ({ 
  vendorId, 
  initialVendorData,
  onSuccess 
}) => {
  const { updateVendorDetails, isLoading, error } = adminActions();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(
    `${initialVendorData.first_name} ${initialVendorData.last_name}`.trim()
  );

  const [formData, setFormData] = useState<VendorData>({
    first_name: initialVendorData.first_name || "",
    last_name: initialVendorData.last_name || "",
    email: initialVendorData.email || "",
    phone: initialVendorData.phone || "",
    address: initialVendorData.address || "",
    business_name: initialVendorData.business_name || "",
    business_email: initialVendorData.business_email || "",
    business_phone: initialVendorData.business_phone || "",
    business_address: initialVendorData.business_address || "",
  });

  useEffect(() => {
    if (initialVendorData) {
      setFormData(initialVendorData);
      setName(`${initialVendorData.first_name} ${initialVendorData.last_name}`.trim());
    }
  }, [initialVendorData]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fullName = e.target.value;
    setName(fullName);
    
    // Split the name into first and last name
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    setFormData(prev => ({
      ...prev,
      first_name: firstName,
      last_name: lastName
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
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
      await updateVendorDetails(vendorId, formData, token);
      setOpen(false);
      onSuccess?.();
    } catch (err) {
      console.error("Failed to update vendor", err);
      alert("Failed to update vendor details. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span className="md:w-[70%] cursor-pointer border border-[#b4ddb4] px-10 py-2 rounded-full text-white text-center font-semibold whitespace-nowrap">
          Edit
        </span>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[90%] md:max-w-[800px] bg-[#212121] rounded-xl border border-gold-500 md:gap-5">
        <DialogHeader>
          <DialogTitle className="text-white text-xl md:text-2xl text-center">
            Edit Vendor
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800 px-4 md:px-8">
            {/* Personal Information */}
            <div className="grid gap-4 py-2">
              <div className="p-2 text-center text-white font-semibold">
                Personal Information
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  name="fullName"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full h-[48px] md:h-[64px]"
                />
                <Input
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full h-[48px] md:h-[64px]"
                />
                <Input
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[48px] md:h-[64px]"
                />
                <Input
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-[48px] md:h-[64px]"
                />
              </div>
            </div>

            {/* Business Details */}
            <div className="grid gap-4 py-2">
              <div className="p-2 text-center text-white font-semibold">
                Business Details
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Business Name"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleChange}
                  className="w-full h-[48px] md:h-[64px]"
                />
                <Input
                  placeholder="Business Address"
                  name="business_address"
                  value={formData.business_address}
                  onChange={handleChange}
                  className="w-full h-[48px] md:h-[64px]"
                />
                <Input
                  placeholder="Business Email Address"
                  name="business_email"
                  value={formData.business_email}
                  onChange={handleChange}
                  className="w-full h-[48px] md:h-[64px]"
                />
                <Input
                  placeholder="Business Phone Number"
                  name="business_phone"
                  value={formData.business_phone}
                  onChange={handleChange}
                  className="w-full h-[48px] md:h-[64px]"
                />
              </div>
            </div>
          </div>

          <DialogFooter className="flex justify-center items-center">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-[70%] rounded-full py-2 md:py-3 bg-gray-400 justify-center text-white border-2 border-gray-400"
            >
              {isLoading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditVendorDetailsDialog;