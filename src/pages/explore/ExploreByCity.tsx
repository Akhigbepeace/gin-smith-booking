import React from "react";
import Image from "next/legacy/image";

const ExploreByStates = () => {
  const ibadan = "/assets/images/ibadan.svg";
  const ph = "/assets/images/ph.svg";
  const abj = "/assets/images/abj.svg";
  const benin = "/assets/images/benin.svg";
  const stateDetails = [
    {
      img: ibadan,
      title: "Ibadan",
    },
    {
      img: ph,
      title: "Port Harcourt",
    },
    {
      img: abj,
      title: "Abuja",
    },
    {
      img: benin,
      title: "Benin",
    },
    {
      img: ibadan,
      title: "Ibadan",
    },
    {
      img: ph,
      title: "Port Harcourt",
    },
    {
      img: abj,
      title: "Abuja",
    },
    {
      img: benin,
      title: "Benin",
    },
    {
      img: ibadan,
      title: "Ibadan",
    },
    {
      img: ph,
      title: "Port Harcourt",
    },
    {
      img: abj,
      title: "Abuja",
    },
    {
      img: benin,
      title: "Benin",
    },
  ];
  return (
    <div className="bg-[#035655] py-[47px] ">
      <h1 className="text-center font-sulphur-point font-[400] text-[28px] text-[#D7B67E] pt-[16px] pb-[23px] ">
        Explore by City
      </h1>

      <div className="flex items-center justify-center ">
        <div className="h-[160px] w-[2px] bg-[#D7B67E] relative z-[0] left-[1px] " />

        <div className=" scrollbar grid grid-flow-col gap-[13px] mt-[30px] place-items-center overflow-x-scroll w-[1112px] relative z-[4] ">
          {stateDetails.map((state, index) => (
            <div key={index} className="w-[265px] h-[146px]">
              <Image
                src={state.img}
                alt="state-images"
                className="rounded-[20px]"
                width={265}
                height={136}
              />

              <p className="grid bg-[rgba(0,0,0,0.9)] h-[40px] rounded-[0_0px_20px_20px] text-center font-sulphur-point font-[400] text-[16px] relative top-[-40px] text-[#D7B67E] place-items-center w-[auto] ">
                {state.title}
              </p>
            </div>
          ))}
        </div>

        <div className="h-[160px] w-[2px] bg-[#D7B67E] relative z-[0] right-[1px]" />
      </div>
    </div>
  );
};

export default ExploreByStates;
