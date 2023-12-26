import React from "react";

const AppSearchInput = () => {
  return (
    <>
      <form className="w-[90vw] md:w-[70vw] mx-auto flex items-center mt-10 bg-[#424242] py-1 px-2 rounded-xl text-[#E1BD8A] border-2 border-[#E1BD8A] focus:outline-none  focus:ring-1 focus:ring-[#E1BD8A]">
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              width="20"
              height="20"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.875 20.875L26.5 26.5"
                stroke="#999999"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 12.75C24 6.5368 18.9632 1.5 12.75 1.5C6.5368 1.5 1.5 6.5368 1.5 12.75C1.5 18.9632 6.5368 24 12.75 24C18.9632 24 24 18.9632 24 12.75Z"
                stroke="#999999"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <input
            type="search"
            value=""
            className="bg-transparent outline-none block w-full pl-10 p-2.5 placeholder:md:text-lg"
            placeholder="Search"
            required={true}
          />
        </div>
      </form>
    </>
  );
};

export default AppSearchInput;
