import ClubCard from "./ClubCard";
import ClubImage from "@/assets/img/ClubImage.png";

const spots = [
  {
    slug: "spot-1",
    primary_image: ClubImage,
    name: "Club One",
    location: "Location One",
    category: "Category One",
    opening_time: "09:00:00",
    closing_time: "23:00:00",
  },
  // Add more spot objects as needed
  {
    slug: "spot-2",
    primary_image: ClubImage,
    name: "Club Two",
    location: "Location Two",
    category: "Category Two",
    opening_time: "10:00:00",
    closing_time: "22:00:00",
  },
];

const ClubsPage = () => {
  return (
    <section className="">
      <div>
        <h1 className="text-center text-3xl font-bold mx-auto">Clubs</h1>
      </div>

      <div className="flex flex-wrap justify-around mt-5 w-[80vw] mx-auto gap-5">
        {spots.map((spot, index) => (
          <ClubCard key={index} spot={spot} />
        ))}
      </div>
    </section>
  );
};

export default ClubsPage;
