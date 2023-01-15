import Image from "next/legacy/image";
import React from "react";
import banner from "../../assets/images/banner.svg";

const CalendarSearchBanner = () => {
  return (
    <>
      <div className="bg-[rgba(0,0,0,0.85)] w-full h-[350px] overflow-hidden relative">
        <Image src={banner} alt="banner" layout="responsive" />
      </div>

      <div className="flex items-center justify-center h-[70px] bg-[rgba(0,0,0,0.7)] w-full absolute mt-[-81px] ">
        <input
          type="text"
          placeholder="Search"
          className="h-[47px] rounded-[20px_5px_5px_20px] w-[315.03px] pl-[26px] placeholder:text-[14px] font-sulphur-point font-[400] text-[rgba(0,0,0,0.4)] mr-[5px] "
        />
        <input
          type="date"
          className="h-[47px] rounded-[5px] w-[142.27px] p-[9px] font-sulphur-point font-[700] text-[13px] text-[#011717] mr-[5px] "
        />
        <input
          type="date"
          className="h-[47px] rounded-[5px] w-[142.27px] p-[9px] font-sulphur-point font-[700] text-[13px] text-[#011717] mr-[5px] "
        />
        <div className="flex justify-around bg-white h-[47px] rounded-[5px] w-[284.54px] p-[9px] font-sulphur-point font-[700] text-[13px] text-[#011717] mr-[5px] ">
          <div className="flex flex-col items-center">
            <h1>Room</h1>
            <input type="checkbox" />
          </div>
          <div className="flex flex-col items-center">
            <h1>Adult</h1>
            <input type="checkbox" />
          </div>
          <div className="flex flex-col items-center">
            <h1>Child</h1>
            <input type="checkbox" />
          </div>
        </div>
        <button
          type="submit"
          className="h-[47px] rounded-[5px_20px_20px_5px] w-[238.81px] pl-[26px] text-[17px] font-sulphur-point font-[700] text-white mr-[5px] bg-[#035655]  "
        >
          SEARCH
        </button>
      </div>
    </>
  );
};

export default CalendarSearchBanner;