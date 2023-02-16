import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const PlanYourTrip = () => {
  const flag = "/assets/images/plan.png";

  return (
    <div className="flex flex-col items-center justify-between text-center ">
      <div>
        <div className="my-[75px]">
          <Image src={flag} alt="earth" width={92} height={124} />
        </div>
        <div>
          <h1 className="font-the-nautigal text-[48px] font-[700] text-[#003B3B] mb-[26px] ">
            Plan Your Trip
          </h1>
          <p className="font-sulphur-point font-[300] text-[16px] w-[230px] text-justify ">
            Make request for a hotel room and get it prepared for you.
          </p>
        </div>
      </div>

      <div className="mt-[100px]">
        <div className="bg-[#014443] text-white text-center w-[300px] text-[14px] font-[400] py-[9px] rounded-[20px] ">
          <Link href="./mobile/planYourTrip" legacyBehavior passHref>
            LOGIN
          </Link>
        </div>

        <div className="text-[#011717] font-sulphur-point text-[14px] mt-[17px] ">
          <Link href="" passHref legacyBehavior>
            Create Account
          </Link>
        </div>

        <div className="flex justify-between items-center my-[24px]">
          <Link href="/mobile/findDeals" legacyBehavior passHref>
            <div className=" w-[25px] h-[13px] bg-[#D7B67E] rounded-[20px]">
              <div className=" w-[11px] h-[11px] rounded-full m-[1px] bg-[#C38317] " />
            </div>
          </Link>

          <div className="text-[#011717] font-sulphur-point text-[14px] mt-[17px] ">
            <Link href="" legacyBehavior passHref>
              Skip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanYourTrip;
