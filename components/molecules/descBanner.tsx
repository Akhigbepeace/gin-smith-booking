import React from "react";
import Image from "next/image";
import earthAbstract from "../../assets/images/earth-abstract.png";
import NextLink from "next/link";
import Link from "next/link";

const DescBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center mr-[60px]">
      <NextLink href="/" legacyBehavior passHref>
        <Link href="/">
          <div className="">
            <h1 className="text-[80px] font-normal text-[#D7B67E] font-water-brush">
              GinSmith Booking
            </h1>

            <p className="text-[20px] font-[400] text-[#D7B67E] text-center font-sulphur-point">
              Your Trusted Lodging Agency
            </p>
          </div>
        </Link>
      </NextLink>
      <div className="mb-[50px] mt-[100px]">
        <Image
          src={earthAbstract}
          alt="abstract-earth"
          width="243"
          height="243"
          className="object-cover"
        />
      </div>

      <p className="text-[28px] leading-[28px] font-[400] text-white text-center font-sulphur-point w-[313px]">
        With Our 24/7 operation, get around the world, via our trusted platform.
      </p>
    </div>
  );
};

export default DescBanner;
