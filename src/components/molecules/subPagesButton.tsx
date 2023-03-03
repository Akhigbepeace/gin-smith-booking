import React, { ReactNode } from "react";
import NextLnk from "next/link";
import { pageLinks, PageLinksProps } from "components/layout/trips/constants";
import PagesHeader from "./pagesHeader";

type SubPagesButtonProps = {
  pageLinks: PageLinksProps[];
  activeItem: string;
  children: ReactNode;
};

const SubPagesButton = (props: SubPagesButtonProps) => {
  const { pageLinks, children, activeItem } = props;
  return (
    <div>
      <div className="xl:flex items-center justify-between w-[1286px] m-auto rounded-[30px] sm:hidden  ">
        {pageLinks.map((pageLink, index) => {
          const activeLink = pageLink.pageTitle === activeItem;

          return (
            <div key={index}>
              <NextLnk href={pageLink.href} legacyBehavior passHref>
                <a className="text-[#011717] font-sulphur-point text-[20px] bg-[#D7B67E] py-[20px] w-[429px]  font-[700] mx-auto grid place-items-center hover:opacity-90 transition ">
                  {pageLink.pageTitle}
                </a>
              </NextLnk>
            </div>
          );
        })}
      </div>

      <div>{children}</div>
    </div>
  );
};

export default SubPagesButton;
