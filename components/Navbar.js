"use client";

import React, { useState } from "react"
import { IoIosNotifications } from "react-icons/io";
import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";
import AvatarModal from "./AvatarModal";
import Avatar from "./Avatar";
import MobileSidenav from "./MobileSidenav";

// import { ToggleButton } from "./Sidenav";

const Navbar = () => {

  const [avatarmodal, setAvatarModal] = useState(false);
  const [toggle, setToggle] = useState(false)
  

  const handleAvatarModal = () => {
      setAvatarModal(!avatarmodal)
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div className="top-0 w-full bg-white py-[13px] pr-[10px] pl-24 sm:pl-10 md:pl-10 sm:ml-0 md:ml-0 sm:w-full md:w-full">
        <div className="flex justify-between items-center ">
          
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

          {/* lg:hidden xl:hidden 2xl:hidden */}
              <div className="lg:hidden xl:hidden 2xl:hidden cursor-pointer sm:block md:block">
                <button onClick={handleToggle}>
                      {
                        toggle

                        ?
                        <BiX size={35} color="#121212"/>
                        :
                        <BiMenu size={35} color="#121212"/>
                      }
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
