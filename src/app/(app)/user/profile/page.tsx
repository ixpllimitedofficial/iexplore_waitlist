import ProfileDetails from "@/components/user/ProfileRoute/ProfileDetails";
import ProfileSections from "@/components/user/ProfileRoute/ProfileSections";

const page = () => {
  return (
    <section className="px-6 pb-5">
      <ProfileDetails />
      <ProfileSections />
    </section>
  );
};

export default page;
