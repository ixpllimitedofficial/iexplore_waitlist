import Image from "next/image";
import EditOutlineIconSvg from "@/assets/svg/AdminIconsSvg/EditOutlineIconSvg.svg";
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

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  country: string;
  is_active: boolean;
}

interface EditUserDetailsDialogProps {
  userId: string;
  initialUserData: UserData;
}

const EditUserDetailsDialog: React.FC<EditUserDetailsDialogProps> = ({ userId, initialUserData }) => {
  const { updateUserDetails, isLoading, error } = adminActions(); // Accessing updateUserDetails action

  const [formData, setFormData] = useState<UserData>({
    first_name: initialUserData.first_name || "",
    last_name: initialUserData.last_name || "",
    email: initialUserData.email || "",
    phone: initialUserData.phone || "",
    date_of_birth: initialUserData.date_of_birth || "",
    country: initialUserData.country || "",
    is_active: initialUserData.is_active || false,
  });

  useEffect(() => {
    // Update the form data when initialUserData changes
    setFormData({
      first_name: initialUserData.first_name || "",
      last_name: initialUserData.last_name || "",
      email: initialUserData.email || "",
      phone: initialUserData.phone || "",
      date_of_birth: initialUserData.date_of_birth || "",
      country: initialUserData.country || "",
      is_active: initialUserData.is_active || false,
    });
  }, [initialUserData]);

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
      await updateUserDetails(userId, formData, token);
    } catch (err) {
      console.error("Failed to update user", err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="col-end-12">
        <span className="w-[53%] cursor-pointer border border-[#b4ddb4] px-4 py-2 rounded-full text-white text-center font-semibold whitespace-nowrap">
          Edit
        </span>
      </DialogTrigger>
      <DialogContent className="w-[90%] max-w-screen-sm md:max-w-[800px] bg-[#212121] border border-gold-500 text-white rounded-lg max-h-[600px] overflow-y-auto p-5 lg:p-10">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl text-center">
            Edit user details
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="p-2 text-center text-white font-semibold">
              Personal Information
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="dob"
                value={formData.date_of_birth}
                onChange={handleChange}
                placeholder="Date of Birth"
                className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Preferences Section */}
          <div className="grid gap-4 py-2 justify-center items-center">
            <div className="p-2 text-center text-white font-semibold">
              Preferences
            </div>
            <div className="flex justify-center items-center flex-wrap gap-2">
              {["Bar", "Club", "Beach", "Lounge", "Hotel"].map((pref) => (
                <span
                  key={pref}
                  className="px-4 py-1.5 bg-[#444444] text- border border-gold-500 rounded-full cursor-pointer hover:bg-gold-500 hover:text-black"
                >
                  {pref}
                </span>
              ))}
            </div>
          </div>

          {/* Account Status Section */}
          <div className="grid gap-4 py-2">
            <div className="p-2 text-center text-white font-semibold">
              Account Status
            </div>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className={`px-4 py-2 ${formData.is_active ? "bg-green-500" : "bg-transparent border border-gold-500"} text-white hover:bg-gold-500 hover:text-black rounded-full`}
                onClick={() => setFormData((prev) => ({ ...prev, is_active: true }))}
              >
                Active
              </button>
              <button
                type="button"
                className={`px-4 py-2 ${!formData.is_active ? "bg-red-500" : "bg-transparent border border-gold-500"} text-white hover:bg-gold-500 hover:text-black rounded-full`}
                onClick={() => setFormData((prev) => ({ ...prev, is_active: false }))}
              >
                Disabled
              </button>
            </div>
          </div>

          <DialogFooter className="w-full flex justify-center py-4">
            <Button
              type="submit"
              className="bg-[#444444] hover:bg-gold-500 hover:text-black hover:border-black w-full justify-center items-center rounded-full text-white border-2 px-6 py-2"
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserDetailsDialog;
