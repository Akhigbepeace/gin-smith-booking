import React from "react";
import NextLink from "next/link";
import Image from "next/image";

const PropertyHeader = () => {
  const banner = "/assets/images/registerProperty.png";

  return (
    <>
      <div className="flex items-center justify-between bg-[#D7B67E] h-[75px] border-b-[6px] border-[#A18451]  ">
        <NextLink href="/loggedIn" legacyBehavior passHref>
          <h1 className="ml-[100px] font-[400] text-[30px] cursor-pointer font-water-brush  ">
            Ginsmith Booking
          </h1>
        </NextLink>

        <div className="mr-[57px] flex items-center">
          <NextLink href="/helpCenter" legacyBehavior passHref>
            <p className="font-sulphur-point cursor-pointer ml-[20px] text-[16px] font-[400] text-[#011717] ">
              Helpdesk
            </p>
          </NextLink>
        </div>
      </div>
      <div className="h-[145px] overflow-hidden relative">
        <Image src={banner} alt="banner" layout="fill" objectFit="cover" />
        <h1 className="font-sulphur-point font-[700] text-[30px] ml-[134px] absolute bottom-[22px] text-[#011717] ">
          REGISTER PROPERTY
        </h1>
      </div>
    </>
  );
};

export default PropertyHeader;
