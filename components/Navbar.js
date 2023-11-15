import { AiFillHome } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import Image from "next/image";
// import { ToggleButton } from "./Sidenav";

const Navbar = ({ handleClick }) => {

  // const [toggle, setToggle] = useState(false)

  return (
    <>
      <div className="flex justify-between top-0 items-center w-full bg-white py-[13px] pr-[10px] pl-24 sm:ml-0 md:ml-0 sm:w-full md:w-full">
        
      {/* <button onClick={toggleSidebar}>Toggle Sidenav</button> */}
      {/* <ToggleButton onClick={handleClick}>BB</ToggleButton> */}
        <div className="sm:ml-[0px] md:ml-[0px]">
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

          <Image
            src="/profile.svg"
            width={32}
            height={32}
            alt="profile image"
            className="rounded-[8px]"
          />

          <div >
          {/* className="2xl:hidden xl:hidden lg:hidden sm:block md:block" */}
            {/* <button className="bg-[#5570F1] rounded-md py-2 px-2">
                <BiMenu size={30} color="white"/>
            </button> */}

      
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
