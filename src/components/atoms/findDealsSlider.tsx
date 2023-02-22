import Link from "next/link";
import React from "react";

const FindDealBtnSlider = () => {
  return (
    <Link href="./planYourTrip" legacyBehavior passHref>
      <div className="grid grid-flow-col grid-cols-2  w-[25px] h-[13px] bg-[#D7B67E] rounded-[20px]">
        <div />
        <div className=" w-[11px] h-[11px] rounded-full m-[1px] bg-[#C38317] " />
      </div>
    </Link>
  );
};

export default FindDealBtnSlider;
