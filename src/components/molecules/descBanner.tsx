import React from "react";
import Image from "next/image";
import Link from "next/link";
import NextLink from "next/link";

const DescBanner = () => {
  const earthAbstract = "/assets/images/earthAbstract.png";
  return (
    <div className="flex flex-col items-center justify-center mr-[60px]">
      <NextLink href="/" legacyBehavior passHref>
        <Link href="/">
          <div className="">
            <h1 className="text-[60px] font-normal text-[#D7B67E] font-water-brush">
              GinSmith Booking
            </h1>

            <p className="text-[20px] font-[400] text-[#D7B67E] text-center font-sulphur-point">
              Your Trusted Lodging Agency
            </p>
          </div>
        </Link>
      </NextLink>

      <div className="mb-[50px] mt-[100px]   ">
        <Image
          src={earthAbstract}
          alt="abstract-earth"
          width={300}
          height={277}
          // width={346}
          // height={277}
        />
      </div>

      <p className="text-[24px] leading-[28px] font-[400] text-white text-center font-sulphur-point w-[313px]">
        With Our 24/7 operation, get around the world, via our trusted platform.
      </p>
    </div>
  );
};

export default DescBanner;
