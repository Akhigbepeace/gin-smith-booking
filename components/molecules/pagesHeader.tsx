import React from "react";
import BackButton from "../atoms/BackButton";

type pagesHeaderProps = {
  title: string;
  href: string;
};

const PagesHeader = ({ title, href }: pagesHeaderProps) => {
  return (
    <div className="flex">
      <BackButton href={href} />
      <p>{title}</p>
    </div>
  );
};

export default PagesHeader;
