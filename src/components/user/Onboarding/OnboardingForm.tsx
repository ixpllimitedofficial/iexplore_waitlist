import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import SignupForm from "./Signup/SignupForm";

const OnboardingForm = () => {
  return (
    <Tabs defaultValue="login" className="lg:mt-20">
      <TabsList className="grid w-full grid-cols-2 h-[60px] bg-brandGold text-brandDark">
        <TabsTrigger value="login" className="py-3">Login</TabsTrigger>
        <TabsTrigger value="signup" className="py-3">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Login />
      </TabsContent>
      <TabsContent value="signup">
        <SignupForm />
      </TabsContent>
    </Tabs>
  );
};

export default OnboardingForm;
