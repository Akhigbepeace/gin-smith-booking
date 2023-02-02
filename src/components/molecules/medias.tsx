import React from "react";
import NextLink from "next/link";

const Medias = () => {
  return (
    <div className="flex justify-center mb-[20px]">
      <NextLink href="#" legacyBehavior passHref>
        <a
          href="#"
          className={`text-center text-white font-sulphur-point bg-[#2C3192] text-[15px] font-[400] w-[185px] py-[3px] h-[27px] rounded-[20px] ml-[3px]`}
        >
          Facebook
        </a>
      </NextLink>

      <NextLink href="#" legacyBehavior passHref>
        <a
          href="#"
          className={`text-center text-white font-sulphur-point bg-[#EC1F25] text-[15px] font-[400] w-[185px] py-[3px] h-[27px] rounded-[20px] ml-[3px]`}
        >
          Gmail
        </a>
      </NextLink>
    </div>
  );
};

export default Medias;
