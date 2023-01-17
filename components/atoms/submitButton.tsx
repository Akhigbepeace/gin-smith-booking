import React from "react";
import NextLink from "next/link";

type SubmitButtonProps = {
  text: string;
  href: string;
};

const SubmitButton = ({ text, href }: SubmitButtonProps) => {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <button
        type="submit"
        className="bg-[#035655] inline-block rounded-[20px] w-[357px] h-[40px] text-white font-sulphur-point text-[17px] font-[700] transition text-center py-[6px] hover:bg-[#024342]  "
      >
        {text}
      </button>
    </NextLink>
  );
};

export default SubmitButton;
