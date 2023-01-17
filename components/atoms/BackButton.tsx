import React from "react";
import NextLink from "next/link";
import Image from "next/legacy/image";
import arrow from "../../assets/images/arrow.png";

type BackButtonProps = {
  href: string;
};

const BackButton = ({ href }: BackButtonProps) => {
  return (
    <>
      <NextLink href={href} legacyBehavior passHref>
        <div className=" grid place-items-center mr-[26px] bg-[#EC1F25] w-[37px] pr-[4px] h-[37px] rounded-[50%]  cursor-pointer ">
          <Image
            src={arrow}
            alt="arrow"
            width="20"
            height="20"
            className="grid place-items-center"
          />
        </div>
      </NextLink>
    </>
  );
};

export default BackButton;
