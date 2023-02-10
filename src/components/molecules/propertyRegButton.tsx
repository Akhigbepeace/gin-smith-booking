import React from "react";
import NextLink from "next/link";
import CancelButton from "components/atoms/cancelButton";

type PropertyRegButtonProps = {
  href: string;
};

const PropertyRegButton = ({ href }: PropertyRegButtonProps) => {
  return (
    <div className="flex items-center justify-center w-[1244px] mx-auto mt-[86px] mb-[66px] ">
      <div>
        <NextLink href="#!" legacyBehavior passHref>
          <button className="bg-[#011717] w-[364px] rounded-[20px] text-white font-sulphur-point text-[20px] py-[15px] text-center  ">
            SAVE & CONTINUE LATER
          </button>
        </NextLink>

        <NextLink href={href} legacyBehavior passHref>
          <button className="bg-[#011717] w-[200px] rounded-[20px] ml-[18px] mr-[83px] text-white font-sulphur-point text-[20px] py-[15px] text-center  ">
            NEXT
          </button>
        </NextLink>
      </div>

      <CancelButton />
    </div>
  );
};

export default PropertyRegButton;
