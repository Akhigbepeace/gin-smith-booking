import React from "react";
import NextLink from "next/link";

type ButtonProps = {
  text: string;
  bg: string;
  href: string;
  color: string;
};

const Button = (props: ButtonProps) => {
  const { text, bg, color, href } = props;
  return (
    <div>
      <NextLink href={href} legacyBehavior passHref>
        <a
          href="#"
          className={`bg-[${bg}] w-[198px] rounded-[20px] h-[34px] font-[700] text-center text-[16px] font-sulphur-point text-[${color}] `}
        >
          {text}
        </a>
      </NextLink>
    </div>
  );
};

export default Button;
