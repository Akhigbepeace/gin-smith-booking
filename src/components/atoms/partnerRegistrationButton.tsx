import React from "react";
import NextLink from "next/link";

const PartnerRegistrationButton = () => {
  return (
    <NextLink href="/registerProperty" legacyBehavior passHref>
      <a
        className={
          "rounded-[20px] font-[400] text-center text-[16px] font-sulphur-point text-white bg-[#7B6031] py-[3px] px-[29px] mr-[7px] "
        }
      >
        Partner Register HERE
      </a>
    </NextLink>
  );
};

export default PartnerRegistrationButton;
