import { useState, useEffect } from "react";
import AppInputOTP from "@/components/UI/Inputs/AppInputOTP";
import { useStore } from "zustand";
import { vendorStore } from "@/store/vendor";
import { toast } from "@/components/UI/use-toast";
interface State {
  emailForOTP: string;
}
const InputCode = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [resendVisible, setResendVisible] = useState(false);

  const { emailForOTP } = useStore(vendorStore) as State;
  const email = emailForOTP;
  const shortenedEmail = email.replace(
    /^(.{1}).*(.{1})@(.*)$/,
    "$1*********$2@$3"
  );

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      setResendVisible(true);
    }
  }, [timeLeft]);
  // zustand
  const requestVendorOTP = vendorStore((state: any) => state.requestVendorOTP);
  const isVendorOTPVerified = vendorStore(
    (state: any) => state.isVendorOTPVerified
  );
  const setisVendorOTPVerified = vendorStore(
    (state: any) => state.setisVendorOTPVerified
  );
  const handleResend = () => {
    // Logic to resend code
    const formData = { email: emailForOTP };
    requestVendorOTP(formData, "requestOTP")
      .then((response:any) => {
        console.log(response);
        toast({
          title: "Code Resent to your email",
          variant: "success",
        });
      })
      .catch((error: any) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      });
    setTimeLeft(30);
    setResendVisible(false);
  };

  return (
    <section className="h-full flex flex-col gap-2 pt-16 lg:pt-28">
      <h1 className=" font-bold hidden lg:block text-3xl text-center leading-snug self-center">
        Cofirm OTP
      </h1>

      <h1 className="text-white md:text-xl md:w-[70%] text-center leading-snug self-center">
        We have sent a code to <span className="block">{shortenedEmail}</span>
        <span className="block">insert the code below</span>
        {/* <span className="text-white"> Maxxconnect127@gmail.com</span> */}
      </h1>

      <AppInputOTP />

      {/* <p className="text-gold-500 font-medium text-center leading-snug self-center">
        Resend code: <span className="text-white"> 00:30</span>
      </p> */}
      <div className="otp-container">
        <p className="text-gold-500 font-medium text-center leading-snug self-center">
          {resendVisible ? (
            <u className="cursor-pointer text-white" onClick={handleResend}>
              Resend code
            </u>
          ) : (
            <span className="text-white">
              00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
            </span>
          )}
        </p>
      </div>
    </section>
  );
};

export default InputCode;
