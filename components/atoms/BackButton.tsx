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
        <div className="mr-[89px] bg-[#EC1F25] w-[47px] h-[47px] rounded-[50%] p-[5px] ">
          <Image
            src={arrow}
            alt="arrow"
            width="30"
            height="30"
            className="grid place-items-center"
          />
        </div>
      </NextLink>
    </>
  );
};

export default BackButton;
