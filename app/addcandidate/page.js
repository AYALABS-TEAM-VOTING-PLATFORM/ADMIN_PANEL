"use client";

import React from "react";
import DoughnutChart from "@/components/DoughnutChart";
import Image from "next/image";
import { BiChevronDown} from "react-icons/bi";
import AvatarImage from "@/public/profile.svg"
import Link from "next/link";

export default function AddCandidate() {
// const [loading, setLoading] = useState(false)

  return (
    <div className="ml-20 md:ml-20 mt-5 sm:ml-0 md:ml-0 bg-white rounded-md p-10 pl-20 pr-[20px] mt-[20px] sm:ml-[0px] md:ml-[0px] sm:pl-7 md:pl-7">
        <div className="">
            <div className="flex justify-between">
                <div className="flex items-center gap-10">
                    <Image
                      src={AvatarImage}
                      width={50}
                      height={50}

                    />
                    <span>Shake Spell</span>
                </div>
                  <Link href="/Candidateprofile">
                      <button className="pr-6 pt-4 pb-4 pl-4 rounded-md bg-[#5570F1] text-white">View Candidate</button>
                  </Link>
                
            </div>
        </div>
    </div>
  );
}
