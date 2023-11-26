"use client";

import React, { useEffect, useState } from "react";
import DoughnutChart from "@/components/DoughnutChart";
import Image from "next/image";
import { BiChevronLeft } from "react-icons/bi";
import AvatarImage from "@/public/profile.svg";
import Link from "next/link";
import {
  _verifyVoter,
  getVoters,
  verifyVoter,
} from "@/constants/_helperFunctions";

export default function Voters() {
  const [loading, setLoading] = useState(false);
  const [voters, setVoters] = useState([]);

  const _getVoters = async () => {
    const response = await getVoters({ loading, setLoading });

    console.log(response);
    setVoters(response.voters);
  };

  const _verifyVoterFunc = async ({ voterWalletAddress }) => {
    setLoading(true);
    await verifyVoter({
      loading,
      setLoading,
      walletAddress: voterWalletAddress,
    });

    await _verifyVoter({
      loading,
      setLoading,
      voterAddress: voterWalletAddress,
    });
    setLoading(false);
  };

  useEffect(() => {
    _getVoters();
  }, []);

  return (
    <div>
      <h2 className="text-center">Please Check Voter's ID before verifying</h2>
      {voters.length == 0 ? (
        <div>No Voter</div>
      ) : (
        voters.map((val) => (
          <div className="ml-20 md:ml-20 mt-5 sm:ml-0 md:ml-0 bg-white">
            <div className=" p-10 pl-20 pr-[20px] mt-[20px] sm:ml-[0px] md:ml-[0px] sm:pl-7 md:pl-7">
              <div className="">
                <div className="flex justify-end items-center gap-[20px]"></div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-10">
                    <Image src={val.voterID} width={120} height={120} />
                    <span>
                      {val.voterWalletAddress.slice(0, 7) +
                        "..." +
                        val.voterWalletAddress.slice(-3)}
                    </span>
                    <div>
                      <button
                        className="w-full bg-[#5570F1] rounded-lg text-white p-2 px-4 font-semibold mt-5"
                        onClick={() =>
                          _verifyVoterFunc({
                            voterWalletAddress: val.voterWalletAddress,
                          })
                        }
                        disabled={val.verified || loading}
                      >
                        {val.verified
                          ? "Already Verified"
                          : loading
                          ? "Verifying"
                          : "Verify Voter"}
                      </button>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
