import Link from "next/link";
import React from "react";

type mobileCTALinkProps = {
  href: string;
  title: string;
};

const mobileCTALink = (props: mobileCTALinkProps) => {
  const { href, title } = props;
  return (
    <div className="bg-[#014443] text-white text-center w-[300px] text-[14px] font-[400] py-[9px] rounded-[20px] ">
      <Link href={href} legacyBehavior passHref>
        {title}
      </Link>
    </div>
  );
};

export default mobileCTALink;
