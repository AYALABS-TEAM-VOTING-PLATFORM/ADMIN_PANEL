"use client";

import React, { useState } from "react"
import { IoIosNotifications } from "react-icons/io";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import AvatarModal from "./AvatarModal";
import Avatar from "./Avatar";
// import { ToggleButton } from "./Sidenav";

const Navbar = () => {

  const [avatarmodal, setAvatarModal] = useState(false);

  const handleAvatarModal = () => {
      setAvatarModal(!avatarmodal)
  }

  return (
    <>
      <div className="flex justify-between top-0 items-center w-full bg-white py-[13px] pr-[10px] pl-24 sm:pl-10 md:pl-10 sm:ml-0 md:ml-0 sm:w-full md:w-full">
      
        <div className="sm:ml-0 md:ml-0">
          <span>Dashboard</span>
        </div>

        <div className="flex justify-end items-center gap-[20px]">
          <div className="bg-[#FEF5EA] flex items-center px-[5px] py-[12px] rounded-[8px] sm:hidden md:hidden">
            <span className="text-[14px]">Admin</span>
            <span>
              <BiChevronDown size={20} />
            </span>
          </div>

          <span>
            <IoIosNotifications color="#5570F1" size={25} />
          </span>
          <Avatar width={32} height={32} onClick={handleAvatarModal}/>

          <div >
            {avatarmodal && <AvatarModal /> }
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
