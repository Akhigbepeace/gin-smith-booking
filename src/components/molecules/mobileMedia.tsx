import React from "react";
import NextLink from "next/link";

const MobileMedia = () => {
  return (
    <div className="flex justify-center mb-[20px]">
      <NextLink
        href="https://www.facebook.com/profile.php?id=100090356522636"
        legacyBehavior
        passHref
      >
        <a
          href="https://www.facebook.com/profile.php?id=100090356522636"
          className={`text-center text-white font-sulphur-point bg-[#646BEA] text-[15px] py-[7px] font-[400] w-[165px]  rounded-[20px]`}
        >
          Facebook
        </a>
      </NextLink>

      <NextLink href="#" legacyBehavior passHref>
        <a
          href="#"
          className={`text-center py-[7px] text-white font-sulphur-point bg-[#EC1F25] text-[15px] font-[400] w-[165px]  rounded-[20px] ml-[9px]`}
        >
          Gmail
        </a>
      </NextLink>
    </div>
  );
};

export default MobileMedia;
