import Link from "next/link";
import React from "react";

const TripPlanningBtnSlider = () => {
  return (
    <Link href="/findDeals">
      <div className=" w-[25px] h-[13px] bg-[#D7B67E] rounded-[20px]">
        <div className=" w-[11px] h-[11px] rounded-full m-[1px] bg-[#C38317] " />
      </div>
    </Link>
  );
};

export default TripPlanningBtnSlider;
