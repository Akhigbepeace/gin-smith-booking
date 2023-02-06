import React from "react";
import NextLink from "next/link";

const LoggedInHeader = () => {
  return (
    <div className="flex items-center justify-between bg-[#D7B67E] h-[75px] border-b-[6px] border-[#A18451]  ">
      <NextLink href="/" legacyBehavior passHref>
        <h1 className="ml-[100px] font-[400] text-[30px] cursor-pointer font-water-brush  ">
          Ginsmith Booking
        </h1>
      </NextLink>

      <div className="mr-[57px] flex items-center">
        <div>
          <NextLink href="/registerProperty" legacyBehavior passHref>
            <a
              href="#"
              className={
                "bg-transparent rounded-[20px] font-[700] text-center text-[16px] font-sulphur-point text-[#011717] border-[3px] border-[#011717] py-[7px] px-[29px] "
              }
            >
              Partner Registration
            </a>
          </NextLink>
        </div>
        <div className="w-[3px] h-[34px] bg-black mx-[26px]   " />

        <NextLink href="/helpCenter" legacyBehavior passHref>
          <p className="font-sulphur-point cursor-pointer ml-[20px] text-[16px] font-[400] text-[#011717] ">
            Helpdesk
          </p>
        </NextLink>
      </div>
    </div>
  );
};

export default LoggedInHeader;
