import React from "react";
import NextLink from "next/link";
import PartnerRegistrationButton from "components/atoms/partnerRegistrationButton";

const LoggedInHeader = () => {
  return (
    <div className="flex items-center justify-between bg-[#D7B67E] h-[75px] border-b-[6px] border-[#A18451]  ">
      <div className="flex items-center">
        <NextLink href="/explore/Index" legacyBehavior passHref>
          <h1 className="ml-[100px] font-[400] text-[30px] cursor-pointer font-water-brush  ">
            Ginsmith Booking
          </h1>
        </NextLink>
        <div className="w-[2px] h-[19px] bg-[#7B6031] ml-[26px]" />

        <NextLink href="/contact" legacyBehavior passHref>
          <p className="font-sulphur-point cursor-pointer ml-[20px] text-[16px] font-[400] text-[#011717] ">
            Contact Us
          </p>
        </NextLink>
      </div>

      <div className="mr-[57px] flex items-center">
        <PartnerRegistrationButton />

        <div className="w-[2px] h-[19px] bg-[#7B6031] ml-[26px]" />

        <NextLink href="/helpdesk" legacyBehavior passHref>
          <p className="font-sulphur-point cursor-pointer ml-[10px] text-[16px] font-[400] text-[#011717] ">
            Help desk
          </p>
        </NextLink>
      </div>
    </div>
  );
};

export default LoggedInHeader;
