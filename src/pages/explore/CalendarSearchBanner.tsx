import Image from "next/legacy/image";
import React from "react";

const CalendarSearchBanner = () => {
  const banner = "/assets/images/banner.svg";
  return (
    <>
      <div className="bg-[rgba(0,0,0,0.85)]  h-[350px] overflow-hidden relative">
        <Image src={banner} alt="banner" layout="fill" objectFit="cover" />
      </div>

      <div className="flex items-center justify-center h-[70px] bg-[rgba(0,0,0,0.7)] w-full absolute mt-[-81px] ">
        <input
          type="text"
          placeholder="Where are you going to?"
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
          <div className="flex flex-col items-center justify-center">
            <h1>Room</h1>
            <input
              type="number"
              className="w-[30px] p-[0] min-[1] max-[10]: h-[18px] text-white border-none bg-[#011717] text-[15px] font-sulphur-point  "
            />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <h1>Adult</h1>
            <input
              type="number"
              className="w-[30px] p-[0] min-[1] max-[10]: h-[18px] text-white border-none bg-[#011717] text-[15px] font-sulphur-point  "
            />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <h1>Child</h1>
            <input
              type="number"
              className="w-[30px] p-[0] min-[1] max-[10]: h-[18px] text-white border-none bg-[#011717] text-[15px] font-sulphur-point  "
            />
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
