import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const mobileHomePage = () => {
  const PlanYourTrip = "./planYourTrip";
  const earthAbstract = "/assets/images/earth.png";

  return (
    <div
      id="mobile-index"
      className="flex flex-col  items-center pt-[50px] pb-[180px] text-center bg-[#003B3B]  text-[#C38317] font-sulphur-point"
    >
      <div className=" ">
        <h1 className="text-[50px] font-normal font-water-brush">
          GinSmith Booking
        </h1>
        <p className="text-[13px] font-[400]">Your Trusted Lodging Agency</p>
      </div>

      <div className="my-[75px]">
        <Image src={earthAbstract} alt="earth" width={230} height={230} />
      </div>

      <h1 className="text-[30px] font-[400] mb-[25px] ">WELCOME</h1>

      <p className=" text-[14px] m-auto w-[279px] mb-[54px] ">
        With our 24/7 operation, get around the world via our trusted platform.
      </p>

      <div className="bg-[#C38317] m-auto text-[#011717] text-center w-[258px] text-[20px] font-[700] py-[9px] rounded-[20px] ">
        <Link href="./planYourTrip" legacyBehavior passHref>
          BOOK NOW
        </Link>
      </div>
    </div>
  );
};

export default mobileHomePage;
