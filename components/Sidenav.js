"use client";

import React, { useState, useEffect } from "react";
import { BiCategoryAlt, BiSelection } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidenav = () => {
  const [activeButton, setActiveButton] = useState("dashboard");
  const path = usePathname();

  useEffect(() => {
    const pathSegments = path.split("/");
    const currentButton = pathSegments[1] || "dashboard";
    setActiveButton(currentButton);
  }, [path]);

  return (
    <div className="fixed overflow:[hidden] top-0 z-50 bg-white w-[296px] pl-7 pb-20 h-full sm:hidden md:hidden xl:block">
      <div className="pl-10 pt-5 mb-10">
        <h3 className="text-2xl font-semibold">Ayalabs</h3>
      </div>

      <div>
        {/* Dashboard */}
        <div className="pl-10 pt-5">
          <Link href="/" onClick={() => setActiveButton("dashboard")}>
            <button
              className={`pr-20 pt-4 pb-4 pl-4 rounded-md ${
                activeButton === "dashboard" ? "bg-[#5570F1] text-white" : ""
              }`}
            >
              <span className="flex items-center">
                <BiCategoryAlt size={25} />
                <span>Dashboard</span>
              </span>
            </button>
          </Link>
        </div>
        <div className="pl-10 pt-5">
          <Link href="/voters" onClick={() => setActiveButton("addelection")}>
            <button
              className={`pr-20 pt-4 pb-4 pl-4 rounded-md ${
                activeButton === "voters" ? "bg-[#5570F1] text-white" : ""
              }`}
            >
              <span className="flex items-center">
                <BiSelection size={25} />
                <span className="ml-2">All Voters</span>
              </span>
            </button>
          </Link>
        </div>

        <div className="pl-10 pt-5">
          <Link
            href="/addelection"
            onClick={() => setActiveButton("addelection")}
          >
            <button
              className={`pr-20 pt-4 pb-4 pl-4 rounded-md ${
                activeButton === "addelection" ? "bg-[#5570F1] text-white" : ""
              }`}
            >
              <span className="flex items-center">
                <BiSelection size={25} />
                <span className="ml-2">Add Election</span>
              </span>
            </button>
          </Link>
        </div>

        {/* Add Candidate */}
        <div className="pl-10 pt-5">
          <Link
            href="/addcandidate"
            onClick={() => setActiveButton("addcandidate")}
          >
            <button
              className={`pr-20 pt-4 pb-4 pl-4 rounded-md ${
                activeButton === "addcandidate" ? "bg-[#5570F1] text-white" : ""
              }`}
            >
              <span className="flex items-center">
                <HiOutlineUsers size={25} />
                <span className="ml-2 text-sm">Candidates</span>
              </span>
            </button>
          </Link>
        </div>

        {/* View Candidate */}
        <div className="pl-10 pt-5">
          <Link
            href="/Candidateprofile"
            onClick={() => setActiveButton("Candidateprofile")}
          >
            <button
              className={`pr-20 pt-4 pb-4 pl-4 rounded-md ${
                activeButton === "Candidateprofile"
                  ? "bg-[#5570F1] text-white"
                  : ""
              }`}
            >
              <span className="flex items-center">
                <HiOutlineUsers size={25} />
                <span className="ml-2 text-xs">View Candidate</span>
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="pl-7 pt-5 mt-32">
        <button className="">
          <span className="flex flex-col items-center text-[#53545C]">
            <div className="flex mb-4">
              <TbLogout size={25} color="#CC5F5F" />
              <span className="text-[#CC5F5F] ml-3">Logout</span>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
