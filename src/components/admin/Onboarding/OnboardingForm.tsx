import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/tabs";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import LoginForm from "./Login/LoginForm";

const OnboardingForm = () => {
  return (
    <Tabs defaultValue="login" className="mt-10 lg:mt-20">
      {/* <TabsList className="grid grid-cols-2 h-[60px] bg-brandGold text-brandDark"> */}
      <TabsList className="flex items-center w-[50%] mx-auto h-[60px] bg-brandGold text-brandDark">
        <TabsTrigger value="login" className="py-3 w-4/5">Login</TabsTrigger>
        {/* <TabsTrigger value="signup" className="py-3">Signup</TabsTrigger> */}
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="signup">
        <Signup />
      </TabsContent>
    </Tabs>
  );
};

export default OnboardingForm;
