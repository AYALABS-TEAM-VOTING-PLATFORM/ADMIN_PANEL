import React from "react";
import DoughnutChart from "@/components/DoughnutChart";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

export default function AddElection() {
  return (
    <div className="ml-20 md:ml-20 mt-5 sm:ml-0 md:ml-0">
      <div className=" bg-white rounded-md py-5 w-full px-5 pt-10">
        <h3 className="mb-7 text-3xl font-semibold text-center text-[#121212]">
          Add Election
        </h3>
        <form className="">
          {/* first input */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              placeholder="Enter"
              className="text-[#121212] px-3 py-2 border-2"
            />
            <input
              type="text"
              placeholder="Enter"
              className="text-[#121212] px-3 py-2 border-2"
            />
          </div>

          {/* second input */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              placeholder="Enter"
              className="px-3 py-2 text-[#121212] border-2"
            />
            <input
              type="text"
              placeholder="Enter"
              className="px-3 py-2 text-[#121212] border-2"
            />
          </div>

          {/* third input */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Enter"
              className="px-3 py-2 text-[#121212] border-2"
            />
            <input
              type="text"
              placeholder="Enter"
              className="px-3 py-2 text-[#121212] border-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#5570F1] rounded-lg text-white p-2 px-4 font-semibold mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
