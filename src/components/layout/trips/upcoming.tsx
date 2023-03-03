import Head from "next/head";
import React from "react";
import Image from "next/image";
import Mobileupcoming from "./mobile/upcoming";

const Upcoming = () => {
  const rating = "/assets/images/rating.svg";
  const tripImg = "/assets/images/tripImg.svg";

  const upcomingTrips = [
    {
      date: "12 December - 15th January",
      hotelImage: tripImg,
      hotelName: "Grand Royal Hotel",
      location: "Ikeja, Lagos | 2km to City",
      reviews: "24 Reviews",
      amt: "N85, 000",
    },
    {
      date: "12 December - 15th January",
      hotelImage: tripImg,
      hotelName: "Grand Royal Hotel",
      location: "Ikeja, Lagos | 2km to City",
      reviews: "24 Reviews",
      amt: "N85, 000",
    },
    {
      date: "12 December - 15th January",
      hotelImage: tripImg,
      hotelName: "Grand Royal Hotel",
      location: "Ikeja, Lagos | 2km to City",
      reviews: "24 Reviews",
      amt: "N85, 000",
    },
  ];

  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Trips</title>
      </Head>

      {upcomingTrips.map((item, index) => (
        <div key={index} className="lg:flex sm:hidden flex-col items-center ">
          <h2 className="font-sulphur-point w-[776px] mt-[64px] mb-[10px] mx-auto text-white text-[20px] font-[400]">
            {item.date}
          </h2>
          <div className="inline-grid grid-flow-col w-[1286px]  mx-auto ">
            <div className="flex flex-col items-center">
              <div className="w-[776px] mr-[21px] ">
                <Image
                  src={item.hotelImage}
                  alt="trip-img"
                  width={776}
                  height={312}
                />
              </div>
            </div>

            <div className=" bg-white font-sulphur-point w-[413px]   font-[700]  rounded-[20px] text-[#011717] p-[30px] ">
              <h1 className="text-[40px]">{item.hotelName}</h1>
              <h3 className="text-[30px]">{item.location}</h3>
              <div className="flex mt-[18px]">
                <Image src={rating} alt="ratings" width={164} height={27} />
                <p className="text-[25px] mx-[23px]">|</p>
                <p className="text-[25px]">{item.reviews}</p>
              </div>

              <div className="w-full h-[2px] bg-[#011717] mt-[28px] mb-[10px] " />

              <div className="flex items-baseline">
                <h1 className="text-[45px] mr-[19px]">{item.reviews}</h1>
                <p className="text-[25px] ">Per Night</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="xl:hidden sm:block ">
        <Mobileupcoming />
      </div>
    </>
  );
};

export default Upcoming;
