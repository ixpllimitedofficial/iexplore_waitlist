const AllFeatures = () => {
  return (
    <>
      {/* divider */}
      <div className="my-5 border-t-2 border-gold-500 flex-grow"></div>

      <h1 className="text-xl md:text-2xl font-bold mb-2">Features</h1>

      <div className="md:text-xl flex flex-col gap-8 mt-5">
        <p>Sounds</p>
        <p>Strippers</p>
        <p>Reservations</p>
        <p>Security</p>
        <p>Dinning</p>
        <p>Delivery</p>
        <p>Outdoor seating</p>
      </div>
    </>
  );
};

export default AllFeatures;
