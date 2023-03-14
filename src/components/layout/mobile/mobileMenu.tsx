import React from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";
import MobileMenuDrawer from "../mobileMenuDrawer";

type MobileMenuProps = {
  exploreIconColor: string;
  tripsIconColor: string;
  profileIconColor: string;
};

const MobileMenu = (props: MobileMenuProps) => {
  const { exploreIconColor, tripsIconColor, profileIconColor } = props;

  return (
    <div className="w-[226px] mx-auto  pb-[15px] pt-[12px] flex items-center justify-between border-t-[2px] border-t-[80%] border-t-[#035655] ">
      <Link href="/explore/Index">
        <BsFillHouseFill size="25px" className={exploreIconColor} />
      </Link>

      <Link href="/trips/upcoming">
        <MdLocationPin size="25px" className={tripsIconColor} />
      </Link>

      <MobileMenuDrawer profileIconColor={profileIconColor} />
    </div>
  );
};

export default MobileMenu;
