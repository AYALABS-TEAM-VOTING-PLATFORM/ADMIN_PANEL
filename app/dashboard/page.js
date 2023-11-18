
import DoughnutChart from "@/components/DoughnutChart";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

export default function Dashboard() {

  return (
    <div className="lg:ml-20 pl-20 pr-[20px] mt-[20px] sm:ml-[0px] md:ml-[0px] sm:pl-7 md:pl-7">
    
      {/* second */}
      <div className="grid grid-cols-3 gap-3 mt-5 mb-8 lg:gap-8  sm:flex-col md:flex-col sm:flex md:flex">
      <div className="bg-white rounded-md py-5 px-5 sm:w-[100%] md:w-[100%]">
          <div className="flex justify-between flex-wrap align-center mb-10 px-[15px] py-[15px]">
            <div className="">
            <span className="text-[#45464E]">Marketing</span>
            </div>

            <div className="flex">
              <span className="text-[#BEC0CA]">This Week</span>
              <span>
                <BiChevronDown size={20} color="#BEC0CA" />
              </span>
            </div>
          </div>

          <div className="flex justify-around flex-wrap align-center mb-5">
            <div className="flex"><span className="bg-[#5570F1] w-[10%] h-[10px]"></span> Acquisition</div>
            <div className="flex"><span className="bg-[#5570F1]"></span> Rentention</div>
            <div className="flex"><span className="bg-[#5570F1]"></span> Purchase</div>
        </div>
          

          <DoughnutChart />
        </div>

          <div className="">
                <div className="mb-5 bg-[#5570F1] rounded-md py-5 px-5 sm:w-[100%] md:w-[100%]">
                <div className="flex justify-between mb-10 px-[15px] py-[15px]">
                  <div className="bg-[#F4F5FA] rounded-[8px] py-2 px-2">
                    <Image src="/folder.svg" width={25} height={25} alt="graph_image" />
                  </div>

                </div>

                <div className="flex justify-between mb-3">
                  <span className="text-[#FFFFFF]">All Products</span>
                  <span className="text-[#FFFFFF]">Active</span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <span className="text-[#FFFFFF]">45</span>
                   
                  </div>

                  <div>
                    <span className="text-[#FFFFFF]">32</span>
                    <span className="ml-2 text-xs text-[#DBDEEE]">+24%</span>
                  </div>
                </div>
              </div>  

              <div className="bg-white rounded-md py-5 px-5 sm:w-[100%] md:w-[100%]">
                <div className="flex justify-between mb-10 px-[15px] py-[15px]">
                  <div className="bg-[#FFCC91] rounded-[8px] py-2 px-2">
                    <Image src="/User.svg" width={25} height={25} alt="graph_image" />
                  </div>

                  <div className="flex">
                    <span className="text-[#BEC0CA]">This Week</span>
                    <span>
                      <BiChevronDown size={20} color="#BEC0CA" />
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mb-3">
                  <span className="text-[#8B8D97]">Customers</span>
                  <span className="text-[#8B8D97]">Active</span>
                </div>

                <div className="flex justify-between">
                  <div>
                    <span className="text-[#45464E]">1,250</span>
                    <span className="ml-2 text-xs text-[#519C66]">+15.80%</span>
                  </div>

                  <div>
                    <span className="text-[#45464E]">1,180</span>
                    <span className="ml-2 text-xs text-[#519C66]">85%</span>
                  </div>
                </div>
              </div> 
          </div>        

          {/* Phone category */}
          <div className="">
                <div className="mb-5 bg-[#FFFFFF] rounded-md py-5 pl-[10px] pr-[10px] sm:w-[100%] md:w-[100%]">
                <div className="mb-10 px-[15px] py-[15px]">
                  <div className="px-2">
                  <span className="text-[#000000]">Recents Order</span>
                  </div>

                </div>

                <div>
                  


                </div>

                </div>
            


              </div>
      </div>
      
    </div>
  );
}
