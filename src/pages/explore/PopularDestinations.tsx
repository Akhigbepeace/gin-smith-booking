import Image from "next/legacy/image";
import React from "react";

const PopularDestinations = () => {
  const arrowRight = "/assets/images/arrow-right.svg";
  const arrowLeft = "/assets/images/arrow-left.svg";
  const destinationImage1 = "/assets/images/destination1.png";
  const destinationImage2 = "/assets/images/destination2.png";
  const destinationImage3 = "/assets/images/destination3.png";
  const destinationImage4 = "/assets/images/destination4.png";
  const destinationImage5 = "/assets/images/destination5.png";
  const stars = "/assets/images/stars.svg";

  const destinationImgs = [
    {
      destImg: destinationImage1,
      width: 183,
      heigth: 94,
    },
    {
      destImg: destinationImage2,
      width: 186,
      heigth: 115,
    },
    {
      destImg: destinationImage3,
      width: 345,
      heigth: 184,
    },
    {
      destImg: destinationImage4,
      width: 186,
      heigth: 115,
    },
    {
      destImg: destinationImage5,
      width: 183,
      heigth: 94,
    },
  ];
  return (
    <div className="h-[258px] ">
      <h1 className="text-center font-sulphur-point font-[400] text-[28px]  text-[#011717] my-[16px] ">
        PopularDestinations
      </h1>

      <div className=" flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center ">
          <div className="cursor-pointer">
            <Image src={arrowLeft} alt="left-arrow" width={24} height={24} />
          </div>
          <div className="flex items-center mx-[50px] ">
            {destinationImgs.map((destinationImg, index) => {
              let middleDestinationImgs = index === 2 ? "mr-[12px]" : "";

              return (
                <div
                  key={index}
                  className={`mr-[12px]  ${middleDestinationImgs}`}
                >
                  <Image
                    src={destinationImg.destImg}
                    alt="destination-images"
                    width={destinationImg.width}
                    height={destinationImg.heigth}
                  />
                </div>
              );
            })}
          </div>
          <div className="cursor-pointer">
            <Image src={arrowRight} alt="right-arrow" width={24} height={24} />
          </div>
        </div>

        <div className="flex flex-col items-center bg-[rgba(0,0,0,0.95)] mt-[-57px] ml-[-12px] font-sulphur-point w-[344px] py-[10px] rounded-[0px_0px_20px_20px] z-[3]  ">
          <div className="flex flex-center text-white  text-center">
            <h2>Sparklight Hotel - LAGOS STATE</h2>
          </div>
          <Image src={stars} alt="stars" width={67} height={12} />
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
