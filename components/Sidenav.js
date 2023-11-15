"use client";

import React, { useState, useEffect } from "react";
import { BiCategoryAlt, BiSelection } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import Link from "next/link";

const Sidenav = () => {
    const [sidetoggle, setSideToggle] = useState(true);
    const [scroll, setScroll] = useState(false);

    
    const handleClick = () => {
        setSideToggle(!sidetoggle)
    }

   const handleScroll = () => {
    if(window.scrollY >= 20) {
        setScroll(true)
    }else{
        setScroll(false)
    }
    
   } 

useEffect(() => {
window.addEventListener("scroll", handleScroll)
return( () => {
 window.removeEventListener("scroll", handleScroll)   
})
},[])


    return (
        <>
    
            <div className="fixed overflow:[hidden] top-0 z-50 bg-white w-[296px] pl-7 pb-20 h-full sm:hidden md:hidden xl:block">

                <div className="pl-10 pt-5 mb-10">
                <h3 className="text-2xl font-semibold">Ayalabs</h3>
                </div>
                {/* <ToggleButton onClick={handleClick}><BiMenu size={30} color="white" /></ToggleButton> */}
                {/* Sidenav items */}

                <div>
                    {/* dashboard */}
                    <div className="pl-10 pt-5">
                        <Link href="/">
                            <button className="bg-[#5570F1] pr-20 pt-4 pb-4 pl-4 rounded-md">
                                <span className="flex items-center text-white">
                                    <BiCategoryAlt size={25} color="white" />
                                    <span>Dashboard</span>
                                </span>
                            </button>
                        </Link>
                    </div>

                    {/* Orders */}

                    <div className="pl-10 pt-5">
                    <Link href="/addelection">
                        <button className="pr-20 pt-4 pb-4 pl-4">
                            <span className="flex items-center text-[#53545C]">
                                <BiSelection size={25} />
                                <span className="ml-2">Add Election</span>
                            </span>
                        </button>
                        </Link>
                    </div>


                    {/* Customers */}
                    <div className="pl-10 pt-5">
                        <button className="pr-20 pt-4 pb-4 pl-4">
                            <span className="flex items-center text-[#53545C]">
                                <HiOutlineUsers size={25} />
                                <span className="ml-2 text-sm">Add Candidate</span>
                            </span>
                        </button>
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
        </>
    )
}

export default Sidenav;


export const ToggleButton = ({ children, onClick }) => {
    return (
        <>
            <button className="bg-[#5570F1] rounded-md py-2 px-2" onClick={onClick}>{children}</button>
        </>
    )
}