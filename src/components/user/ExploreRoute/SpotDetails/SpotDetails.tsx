import React from "react";

const SpotDetails = () => {
  return (
    <section className="mt-8">
      {/* images */}
      <div className="grid grid-cols-2 gap-5 h-[380px]">
        <div className="bg-[#4D4D4D66]"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#4D4D4D66]"></div>
          <div className="bg-[#4D4D4D66]"></div>
          <div className="bg-[#4D4D4D66]"></div>
          <div className="bg-[#4D4D4D66]"></div>
          <div className="bg-[#4D4D4D66]"></div>
          <div className="bg-[#4D4D4D66]"></div>
        </div>
      </div>
      {/* details */}
      <div className="mt-7">
        <p className=" font-bold text-2xl">About</p>

        <div className="mt-2 grid grid-cols-3 gap-20">
          <p className="text-lg col-span-2">
            Maxx beach bar, where sun, sand, and sea come together to create the
            ultimate beach bar experience. Nestled along the pristine coastline,
            our bar offers a laid-back atmosphere where you can unwind with a
            refreshing cocktail in hand, savor fresh, locally-sourced bites, and
            enjoy the soothing sounds of the ocean. Whether you&apos;re here to catch
            the sunset, dance under the stars, or simply relax with friends, MBB
            is your go-to destination for unforgettable moments by the water.
            Come as you are, and let the beach be your backdrop for good times
            and great vibes.
          </p>

          <div className="col-span-1 flex flex-col gap-3">
            <div>
              <p className="text-lg font-bold">
                873 Ozumba Mbadiwe Ave, Victoria Island 106104, Lagos
              </p>
            </div>

            <p className="text-lg font-bold">4pm - 11pm</p>

            <div className="bg-gold-500 py-1 px-3 rounded-3xl font-bold text-brandDark self-start">
              Share spot
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <p className=" font-bold text-2xl">Contact</p>
          <p className="text-lg col-span-2">Website: www.maxxabeachbar.com</p>
          <p className="text-lg col-span-2">Call: +234 901 234 5678</p>
        </div>
      </div>
    </section>
  );
};

export default SpotDetails;
