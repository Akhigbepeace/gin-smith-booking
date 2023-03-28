import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { BsGearFill } from "react-icons/bs";
import { FaTimes, FaTimesCircle, FaUser } from "react-icons/fa";

type MobileMenuProps = {
  profileIconColor: string;
};

const MobileMenuDrawer = (props: MobileMenuProps) => {
  const { profileIconColor } = props;

  const profileAvatar = "/assets/images/imgAvatar.png";

  const links = [
    {
      title: "Change Password",
      href: "/changePassword",
    },
    {
      title: "Trips",
      href: "/trips/upcoming",
    },
    {
      title: "Favourites",
      href: "/trips/favourites",
    },
    {
      title: "Payment History",
      href: "/paymentHistory",
    },
    {
      title: "Privacy Policy",
      href: "/registerProperty/legalInformation",
    },
    {
      title: "Help Center",
      href: "/helpdesk",
    },
  ];
  return (
    <>
      <button type="button" data-hs-overlay="#hs-full-screen-modal">
        <FaUser size="25px" className={profileIconColor} />
      </button>
      <div
        id="hs-full-screen-modal"
        className="hidden w-full h-full backdrop-blur fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 transition-all ">
          <div className="h-full w-[320px] bg-[#003B3B] p-[20px_50px] font-sulphur-point text-white ">
            <div className="flex justify-end">
              <div />

              <button
                data-hs-overlay="#hs-full-screen-modal"
                className="text-[#CACACA]"
              >
                <FaTimes size={25} />
              </button>
            </div>

            <div className=" pt-[20px] overflow-y-auto">
              <div>
                <Image
                  src={profileAvatar}
                  width={140}
                  height={140}
                  objectFit="cover"
                />

                <h2 className="text-[24px]">User Name</h2>
                <Link
                  href="/editProfile"
                  className="bg-[#C38317] text-[#003B3B] p-[3px_20px] font-[700] text-[16px] rounded-[10px]  "
                >
                  Edit Profile
                </Link>
              </div>

              <div className="flex flex-col pt-[50px] divide-y-[1px] divide-[#CACACA] ">
                {links.map((link, index) => (
                  <Link key={index} href={link.href} className="py-[28px]">
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className="flex justify-between pt-[80px] ">
                <div className="flex items-center  ">
                  <BsGearFill />
                  <p className="ml-[10px]">Settings</p>
                </div>

                <div className="flex items-center  text-[#EC1F25] ">
                  <FaTimesCircle />
                  <p className="ml-[10px]">Log Out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenuDrawer;
