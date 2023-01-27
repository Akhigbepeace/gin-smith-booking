import Image from "next/image";
import React from "react";
import arrowRight from "../../assets/images/arrow-right.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";
import destinationImage1 from "../../assets/images/destination1.png";
import destinationImage2 from "../../assets/images/destination2.png";
import destinationImage3 from "../../assets/images/destination3.png";
import destinationImage4 from "../../assets/images/destination4.png";
import destinationImage5 from "../../assets/images/destination5.png";
import stars from "../../assets/images/stars.svg";

const PopularDestinations = () => {
  const destinationImgs = [
    destinationImage1,
    destinationImage2,
    destinationImage3,
    destinationImage4,
    destinationImage5,
  ];
  return (
    <div className="h-[258px] ">
      <h1 className="text-center font-sulphur-point font-[400] text-[28px]  text-[#011717] my-[16px] ">
        PopularDestinations
      </h1>

      <div className=" flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center ">
          <div className="cursor-pointer">
            <Image src={arrowLeft} alt="left-arrow" />
          </div>
          <div className="flex items-center mx-[50px] ">
            {destinationImgs.map((destinationImg, index) => {
              let middleDestinationImgs = index === 2 ? "mr-[12px]" : "";

              return (
                <div
                  key={index}
                  className={`mr-[12px]  ${middleDestinationImgs}`}
                >
                  <Image src={destinationImg} alt="destination-images" />
                </div>
              );
            })}
          </div>
          <div className="cursor-pointer">
            <Image src={arrowRight} alt="right-arrow" />
          </div>
        </div>

        <div className="flex flex-col items-center bg-[rgba(0,0,0,0.95)] mt-[-57px] ml-[-23px] font-sulphur-point w-[344px] py-[10px] rounded-[0px_0px_20px_20px]  ">
          <div className="flex flex-center text-white  text-center">
            <h2>Sparklight Hotel - LAGOS STATE</h2>
          </div>
          <Image src={stars} alt="stars" />
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
