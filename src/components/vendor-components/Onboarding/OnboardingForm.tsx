import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import LoginForm from "./Login/LoginForm";

const OnboardingForm = () => {
  return (
    <div className="sm:mt-36 mt-0">
      <LoginForm />
    </div>
  );
};

export default OnboardingForm;
