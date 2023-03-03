import Image from "next/legacy/image";
import React from "react";

const Mobileupcoming = () => {
  const ratingImage = "/assets/images/favStars.png";

  const upcoming = [
    {
      image: "",
      hotelName: "Hotel Name",
      location: "Location",
      amt: "N0. 00",
    },
    {
      image: "",
      hotelName: "Hotel Name",
      location: "Location",
      amt: "N0. 00",
    },
    {
      image: "",
      hotelName: "Hotel Name",
      location: "Location",
      amt: "N0. 00",
    },
  ];

  return (
    <div>
      {upcoming.map((item, index) => {
        return (
          <div
            key={index}
            className="h-[166px] w-[361px] mx-auto flex rounded-[10px] items-center justify-center shadow-[0px_7px_5px_rgba(0,0,0,0.25)] mb-[30px]  "
          >
            {/* <Image src={item.image} width={130} height={166} /> */}
            <div className=" w-[130px] h-[166px] bg-black rounded-[10px_0px_0px_10px] " />

            <div className="bg-[#D9D9D9] p-[10px_18px] h-[166px] w-[231px] font-sulphur-point rounded-[0px_10px_10px_0] ">
              <h1 className="text-[26px] font-[300] leading-[26px] ">
                {item.hotelName}
              </h1>

              <p className="text-[14px] my-[10px]">{item.location}</p>

              <Image src={ratingImage} width={77} height={16} />

              <div className="bg-[#A7A7A7] h-[1px] mt-[10px] mb-[7px] " />

              <h1>{item.amt}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Mobileupcoming;
