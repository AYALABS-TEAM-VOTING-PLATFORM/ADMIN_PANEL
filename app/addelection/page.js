"use client";

import React from "react";
import DoughnutChart from "@/components/DoughnutChart";
import Image from "next/image";
import { BiChevronDown} from "react-icons/bi";

export default function Dashboard() {
// const [loading, setLoading] = useState(false)

  return (
    <div className="flex lg:ml-10 justify-center items-center pl-20 pr-[20px] mt-[20px] sm:ml-[0px] md:ml-[0px] sm:pl-7 md:pl-7">
    
      {/* second */}
    
      <div className="bg-white rounded-md py-5 w-full px-5 sm:w-[100%] md:w-[100%]  pt-10">
            <h3 className="mb-7 text-3xl font-semibold text-center text-[#121212]">Add Election</h3>
            <form className="">
                  {/* first input */}
                <div className="flex gap-10 mb-10 lg:flex-col sm:flex-col md:flex-col">
                  <input type="text" placeholder="Enter" className="text-[#121212] px-1 py-2 pr-48 sm:pr-0 md:pr-0 border-2"/>
                  <input type="text" placeholder="Enter" className="text-[#121212] px-1 py-2 pr-48 border-2"/>
                </div>

                   {/* second input */}
                   <div className="flex gap-10 lg:flex-col sm:flex-col mb-10 md:flex-col">
                  <input type="text" placeholder="Enter" className="py-2 text-[#121212] pr-48 border-2"/>
                  <input type="text" placeholder="Enter" className=" px-1 py-2 text-[#121212] pr-48 border-2"/>
                </div>

                   {/* third input */}
                   <div className="flex gap-10 lg:flex-col sm:flex-col mb-3 md:flex-col">
                  <input type="text" placeholder="Enter" className=" px-1 py-2 text-[#121212] pr-48 border-2"/>
                  <input type="text" placeholder="Enter" className=" px-1 py-2 text-[#121212] pr-48 border-2"/>
                </div>
              <button type="submit" className="w-full bg-[#5570F1] rounded-lg text-white p-2 px-4 font-semibold mt-5">Submit</button>
            </form>

        </div>
    
      
    </div>
  );
}
