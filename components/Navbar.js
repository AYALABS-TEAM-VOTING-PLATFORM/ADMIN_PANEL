"use client";

import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";
import AvatarModal from "./AvatarModal";
import Avatar from "./Avatar";
import MobileSidenav from "./MobileSidenav";
// import { ToggleButton } from "./Sidenav";
// import { ConnectButton } from "@web3uikit/web3";

const Navbar = () => {
  const [avatarmodal, setAvatarModal] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleAvatarModal = () => {
    setAvatarModal(!avatarmodal);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleConnect = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.log(error);
      }
      console.log("Connected");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);
    } else {
      console.log("Please install MetaMask");
    }
  };

  return (
    <>
      <div className="top-0 w-full bg-white py-[13px] pr-[10px] pl-24 sm:pl-10 md:pl-10 sm:ml-0 md:ml-0 sm:w-full md:w-full">
        <div className="flex justify-between items-center ">
          <div className="sm:ml-0 md:ml-0">
            <span>Dashboard</span>
          </div>
          <div className="flex justify-end items-center gap-[20px]">
            <button onClick={handleConnect}>Connect</button>

            <div className="bg-[#FEF5EA] flex items-center px-[5px] py-[12px] rounded-[8px] sm:hidden md:hidden">
              <span className="text-[14px]">Admin</span>
              <span>
                <BiChevronDown size={20} />
              </span>
            </div>

            <span>
              <IoIosNotifications color="#5570F1" size={25} />
            </span>
            <Avatar width={32} height={32} onClick={handleAvatarModal} />

            <div>{avatarmodal && <AvatarModal />}</div>

            {/* lg:hidden xl:hidden 2xl:hidden */}
            <div className="lg:hidden xl:hidden 2xl:hidden cursor-pointer sm:block md:block">
              <button onClick={handleToggle}>
                {toggle ? (
                  <BiX size={35} color="#121212" />
                ) : (
                  <BiMenu size={35} color="#121212" />
                )}
              </button>
            </div>
            <div className="absolute left-0 top-0">
              {toggle && <MobileSidenav />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
