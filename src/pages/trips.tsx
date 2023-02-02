import Head from "next/head";
import React from "react";
import PagesHeader from "../components/molecules/pagesHeader";
import NextLnk from "next/link";
import Image from "next/image";
const rating = "/assets/images/rating.svg";
const tripImg = "/assets/images/trip-img.svg";

const Trips = () => (
  <>
    <Head>
      <title>GINSMITH BOOKING | Trips</title>
    </Head>

    <PagesHeader title="Trips" href="/profile" />

    <div className=" bg-[#035655] h-[calc(100vh-83px)] pt-[65px] ">
      <div className="flex items-center justify-between w-[1286px] m-auto ">
        <div className="upcoming">
          <NextLnk href="#" legacyBehavior passHref>
            <a className="text-[#011717] font-sulphur-point text-[20px] bg-[#D7B67E] py-[20px] w-[429px] rounded-[30px_0px_0px_30px] font-[700] mx-auto grid place-items-center hover:opacity-90 transition ">
              Upcoming
            </a>
          </NextLnk>
        </div>

        <div className="upcoming">
          <NextLnk href="#" legacyBehavior passHref>
            <a className="text-[#011717] font-sulphur-point text-[20px] hover:opacity-90 transition bg-white py-[20px] w-[429px] font-[700] mx-auto grid place-items-center ">
              Finished
            </a>
          </NextLnk>
        </div>

        <div className="">
          <NextLnk href="#" legacyBehavior passHref>
            <a className="upcoming text-[#011717] font-sulphur-point text-[20px] py-[20px] w-[429px] rounded-[0px_30px_30px_0px] bg-white  font-[700] mx-auto grid place-items-center hover:opacity-90 transition ">
              Favourites
            </a>
          </NextLnk>
        </div>
      </div>

      <h2 className="font-sulphur-point w-[776px] mt-[64px] mb-[10px] mx-auto text-white text-[20px] font-[400]">
        12 December - 15th January
      </h2>
      <div className="flex w-[1286px] mx-auto ">
        <div className="flex flex-col items-center">
          <div className="w-[776px] mr-[21px] ">
            <Image src={tripImg} alt="trip-img" width={776} height={312} />
          </div>
        </div>

        <div className=" bg-white font-sulphur-point w-[413px] h-[312px]  font-[700]  rounded-[20px] text-[#011717] p-[30px] ">
          <h1 className="text-[40px]">Grand Royal Hotel</h1>
          <h3 className="text-[30px]">Ikeja, Lagos | 2km to City</h3>
          <div className="flex mt-[18px]">
            <Image src={rating} alt="ratings" width={164} height={27} />
            <p className="text-[25px] mx-[23px]">|</p>
            <p className="text-[25px]">24 Reviews</p>
          </div>

          <div className="w-full h-[2px] bg-[#011717] mt-[28px] mb-[10px] " />

          <div className="flex items-baseline">
            <h1 className="text-[45px] mr-[19px] ">N85, 000</h1>
            <p className="text-[25px] ">Per Night</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Trips;
