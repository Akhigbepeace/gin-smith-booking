import React from "react";
import NextLink from "next/link";
import Image from "next/legacy/image";

type BackButtonProps = {
  href: string;
};

const BackButton = ({ href }: BackButtonProps) => {
  return (
    <>
      <NextLink href={href} legacyBehavior passHref>
        <a
          href={href}
          className="flex flex-col items-center justify-center pl-[51px] flex items-center bg-white w-full bg-[#EC1F25] w-[47px] h-[47px] rounded-[50%] mr-[89px]"
        >
          <Image src={""} alt={""} />
        </a>
      </NextLink>
    </>
  );
};

export default BackButton;
