import Image from "next/legacy/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import MobileMenu from "./mobileMenu";

const MobileExplore = () => {
  const banner = "/assets/images/mobileHomeBanner.png";

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
    <>
      <div>
        <div className="h-[300px] relative">
          <Image src={banner} alt="banner" layout="fill" objectFit="cover" />
        </div>

        <p className="bg-[rgba(217,217,217,0.5)] absolute w-full mt-[-68px] pt-[10px] pb-[15px] pl-[39px]font-sulphur-point font-[300] text-[28px] text-[#011717] pl-[39px] rounded-[10px_10px_0px_0px] ">
          Where To ?
        </p>
      </div>

      <form className="mt-[-5px]">
        <div className="bg-[#003B3B] flex flex-col items-center font-sulphur-point py-[10px] rounded-[0px_0px_10px_10px_]  ">
          <div className="flex items-center bg-white w-[350px] h-[40px] rounded-[20px] ">
            <div className="text-[#949494] pl-[17px] ">
              <CiSearch />
            </div>

            <input
              required
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className=" w-full border-none rounded-[20px] focus:border-none "
            />
          </div>

          <div className="grid grid-flow-col w-[350px] gap-[10px] my-[10px] font-sulphur-point text-[#014443] font-[700] text-[14px] ">
            <div className="flex items-center justify-center bg-white h-[37px] rounded-[5px] pr-[70px] border-none pl-[15px]   ">
              <input
                type="checkbox"
                className="border-none bg-[#D9D9D9] mr-[7px] "
              />
              <p>Hotel</p>
            </div>

            <div className="flex items-center bg-white pr-[17px] h-[37px] rounded-[5px] border-none pl-[15px]">
              <input
                type="checkbox"
                className="border-none bg-[#D9D9D9] mr-[7px]  "
              />
              <p>Service Apartment</p>
            </div>
          </div>

          <div className="grid grid-flow-col w-[350px] gap-[10px]">
            <input
              required
              type="date"
              className="flex items-center justify-center bg-white h-[37px] rounded-[5px] border-none pl-[15px] "
            />
            <input
              required
              type="date"
              className="flex items-center justify-center bg-white h-[37px] rounded-[5px] border-none pl-[15px]"
            />
          </div>

          <div className="grid grid-flow-col items-center w-[350px] gap-[10px]">
            <div className="flex items-center my-[10px] bg-white font-sulphur-point text-[#014443] font-[700] text-[14px] rounded-[5px]">
              <div className="flex items-center   pr-[17px] h-[37px] rounded-[5px] border-none pl-[15px]">
                <p>Room</p>
                <input
                  type="checkbox"
                  className="border-none bg-[#D9D9D9] ml-[7px]  "
                />
              </div>
              <div className="flex items-center  pr-[17px] h-[37px] rounded-[5px] border-none pl-[15px]">
                <p>Child</p>
                <input
                  type="checkbox"
                  className="border-none bg-[#D9D9D9] ml-[7px]  "
                />
              </div>
            </div>

            <select
              name="Room Type"
              id=""
              placeholder="Room Type"
              className="border-none rounded-[5px] h-[36px] font-sulphur-point text-[#014443]"
            >
              <option value="kings">Room Type</option>
              <option value="kings">King&apos;s Court</option>
              <option value="kings">King&apos;s Court</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#C38317] grid mt-[10px] rounded-[20px] font-[700] text-[#011717] m-auto py-[12px] w-[350px]"
        >
          SEARCH
        </button>
      </form>

      <div className="mt-[64px] pl-[39px]">
        <h2 className="font-sulphur-point font-[300] text-[20px]   ">
          Last Searches
        </h2>

        <div className="grid grid-flow-col gap-[13px] mt-[14px] overflow-x-scroll  relative ">
          {stateDetails.map((state, index) => (
            <div key={index} className="w-[200px] relative">
              <Image
                src={state.img}
                alt="state-images"
                className="rounded-[20px]"
                objectFit="cover"
                width={200}
                height={200}
              />

              <p className="grid bg-[rgba(0,0,0,0.9)] h-[40px] rounded-[0_0px_20px_20px] text-center font-sulphur-point font-[400] text-[16px] relative top-[-45px] text-[#D7B67E] place-items-center w-[auto] ">
                {state.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#003B3B] pt-[24px] pl-[39px] mb-[29px] ">
        <h2 className="font-sulphur-point font-[300] text-[20px] text-white">
          Popular Destination
        </h2>

        <div className="grid grid-flow-col gap-[13px] mt-[14px] overflow-x-scroll relative">
          {stateDetails.map((state, index) => (
            <div key={index} className="w-[230px] relative">
              <Image
                src={state.img}
                alt="state-images"
                className="rounded-[20px]"
                objectFit="cover"
                width={230}
                height={120}
              />

              <p className="grid bg-[rgba(0,0,0,0.9)] h-[40px] rounded-[0_0px_20px_20px] text-center font-sulphur-point font-[400] text-[16px] relative top-[-40px] text-[#D7B67E] place-items-center w-[auto] ">
                {state.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <MobileMenu
        exploreIconColor="text-[#00AAA8]"
        tripsIconColor="text-black"
        profileIconColor="text-black"
      />
    </>
  );
};

export default MobileExplore;
