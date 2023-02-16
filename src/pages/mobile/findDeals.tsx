import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const FindDeals = () => {
  const cart = "/assets/images/cart.png";

  return (
    <div className="flex flex-col items-center justify-between text-center ">
      <div>
        <div className="my-[75px]">
          <Image src={cart} alt="earth" width={120} height={125} />
        </div>
        <div>
          <h1 className="font-the-nautigal text-[48px] font-[700] text-[#003B3B] mb-[26px] ">
            Find Best Deals
          </h1>
          <p className="font-sulphur-point font-[300] text-[16px] w-[230px] text-justify ">
            Get the best deal that fits your schedule and visit
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

        <div className="flex justify-between items-center my-[24px]  ">
          <Link href="/mobile/planYourTrip" legacyBehavior passHref>
            <div className="grid grid-flow-col grid-cols-2  w-[25px] h-[13px] bg-[#D7B67E] rounded-[20px]">
              <div />
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

export default FindDeals;
