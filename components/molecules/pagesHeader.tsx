import React from "react";
import BackButton from "../atoms/BackButton";

type pagesHeaderProps = {
  title: string;
  href: string;
};

const PagesHeader = ({ title, href }: pagesHeaderProps) => {
  return (
    <div className="pl-[51px] flex items-center bg-white w-full font-sulphur-point font-[700] text-[30px] py-[19px] ">
      <BackButton href={href} />
      <p>{title}</p>
    </div>
  );
};

export default PagesHeader;
