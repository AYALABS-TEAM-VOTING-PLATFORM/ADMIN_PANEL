
 "use client";

import React from "react";
import DoughnutChart from "@/components/DoughnutChart";
import Image from "next/image";
import { BiChevronLeft} from "react-icons/bi";
import AvatarImage from "@/public/profile.svg"
import Link from "next/link";

export default function AddCandidate() {
// const [loading, setLoading] = useState(false)

  return (
    <div className="ml-20 md:ml-20 mt-5 sm:ml-0 md:ml-0">
          <Link href="/addelection">
          <div className="bg-[#FEF5EA] flex items-center px-[5px] py-[5px] rounded-[8px] sm:hidden md:hidden w-20">
            <span className="flex items-center">
              <BiChevronLeft size={30} /> 
              <span className="text-xs text-[#121212]">Back</span>
            </span>
          </div>
          </Link>
        <div className=" p-10 pl-20 pr-[20px] mt-[20px] sm:ml-[0px] md:ml-[0px] sm:pl-7 md:pl-7">
        <div className="">
        <div className="flex justify-end items-center gap-[20px]">
       
          </div>

            <div className="flex justify-between">
                <div className="flex items-center gap-10">
                    <Image
                      src={AvatarImage}
                      width={120}
                      height={120}

                    />
                    <span>Shake Spell</span>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
