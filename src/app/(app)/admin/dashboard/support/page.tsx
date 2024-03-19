import SupportCard from "@/components/admin/Support/SupportCard";

const page = () => {
  return (
    <section className=" mt-5">
      <div className="grid grid-cols-4 gap-4 ">
        {[1, 2, 3, 4, 5, 6].map((card) => {
          return <SupportCard key={card} />;
        })}
      </div>
    </section>
  );
};

export default page;
