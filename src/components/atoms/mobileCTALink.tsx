import Link from "next/link";
import React from "react";

type mobileCTALinkProps = {
  href: string;
  title: string;
};

const mobileCTALink = (props: mobileCTALinkProps) => {
  const { href, title } = props;
  return (
    <div className=" ">
      <Link
        href={href}
        className="  bg-[#014443] py-[10px] px-[130px] text-white text-center w-[300px] text-[14px] font-[400] rounded-[20px] "
      >
        {title}
      </Link>
    </div>
  );
};

export default mobileCTALink;
