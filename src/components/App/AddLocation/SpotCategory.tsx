import AppInput from "../../UI/Inputs/AppInput";
import FilterButton from "../../UI/Button/FilterButton";
import AppButton from "../../UI/Button/AppButton";
import GetApp from "../Home/GetApp/GetApp";

const SpotCategory = () => {
  return (
    <>
      <section className="mt-10 px-5 md:px-10">
        {/* spot category */}
        <h4 className="text-2xl font-bold ">Spot Category</h4>
        <div className="mt-7 flex flex-wrap gap-4 ">
          <p className="spotCategorySelection">Clubs</p>

          <p className="spotCategorySelection">Restaurants</p>

          <p className="spotCategorySelection">Bars</p>

          <p className="spotCategorySelection">Beach</p>

          <p className="spotCategorySelection">Lounge</p>

          <p className="spotCategorySelection">Hotel</p>
        </div>

        {/* Are you the proud owner */}
        <h4 className="text-xl mt-14 ">
          Are you the proud owner, one of the awesome team members, or the
          official ambassador for this location?
        </h4>

        <p className="text-xl mt-4 text-[#F9D9AD]">This field is required</p>

        <div className="my-7 flex flex-wrap gap-4">
          <p className="spotCategorySelection">Yes</p>

          <p className="spotCategorySelection">No</p>
        </div>

        {/* what is your role */}
        <h4 className="text-2xl font-bold mt-14">What is your role?</h4>
        <div className="mt-7 flex flex-wrap gap-4">
          <p className="spotCategorySelection">Owner</p>

          <p className="spotCategorySelection">Manager</p>

          <p className="spotCategorySelection">Guest</p>

          <p className="spotCategorySelection">Sales/Marketing</p>

          <p className="spotCategorySelection">Other</p>
        </div>

        {/* name of spot */}
        <h4 className="text-2xl font-bold mt-14">Official name of spot</h4>

        <AppInput placeholder="12B Club" inputClass="mt-5 " />

        {/* operation time */}
        <h4 className="text-2xl font-bold mt-14">Operation time</h4>

        <div className="flex gap-7 ">
          <div className="mt-4">
            <p className="text-[#8E8E8E] text-lg mb-3">Open time</p>
            <FilterButton btnText="8am" />
          </div>

          <div className="mt-4">
            <p className="text-[#8E8E8E] text-lg mb-3">Close time</p>
            <FilterButton btnText="8pm" />
          </div>
        </div>

        {/* Brief description about spot*/}
        <h4 className="text-2xl font-bold mt-14">
          Brief description about spot
        </h4>

        <AppInput
          placeholder="Nestled in the city's heart, this bar boasts warm lighting, expert mixologists, and a diverse menu. Perfect for intimate gatherings or lively nights out. An ideal spot for a memorable evening."
          inputClass="mt-5"
        />

        {/* Address of spot */}
        <h4 className="text-2xl font-bold mt-14">Address of spot </h4>

        <AppInput
          placeholder="12B Love street, Ikeja Lagos."
          inputClass="mt-5 "
        />

        {/* contact info */}
        <h4 className="text-2xl font-bold mt-14">Contact information</h4>

        <div className="mt-4">
          <p className="text-[#8E8E8E] text-lg mb-3">Telephone</p>

          <div className="flex gap-2">
            <FilterButton
              btnText="+234"
              className="border-2 border-[#E1BD8A]"
            />
            <AppInput placeholder="09090909090" type="number" />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[#8E8E8E] text-lg mb-3">
            Email address (Optional)
          </p>

          <AppInput placeholder="Maxxsmith@gmail.com" className="" />
        </div>

        <div className="my-10">
          <p className="text-[#8E8E8E] text-lg mb-3">Website (Optional)</p>

          <AppInput placeholder="club123.com" className="" />
        </div>

        {/* submit button */}
        <AppButton btnText="Submit location" className="mx-auto" />
      </section>

      {/* get app */}
      <GetApp />
    </>
  );
};

export default SpotCategory;
