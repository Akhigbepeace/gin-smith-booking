import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";
// import BackButton from "../components/atoms/backButton";
import BackButton from "../components/atoms/BackButton";
import userProfile from "../assets/images/user-image.svg";
import NextLink from "next/link";

const MyProfile = () => {
  const datas = [
    {
      title: "Change Password",
      href: "/changePassword",
    },
    {
      title: "Trips",
      href: "/trips",
    },
    {
      title: "Payment History",
      href: "/paymentHistory",
    },
    {
      title: "Help Center",
      href: "/helpCenter",
    },
  ];
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Profile</title>
      </Head>

      <header className="bg-[url('../assets/images/profilebanner.png')] h-[200px] pt-[70px] bg-no-repeat w-screen ">
        <div className="flex items-center ml-[85px] ">
          <BackButton href="/loggedIn" />
        </div>
        <h1 className=" text-center font-sulphur-point font-[700] text-[40px] text-[#011717] ">
          My Profile
        </h1>
      </header>

      <div className="flex items-center border-b-[2px] border-[#011717] mx-[45px] mb-[37px] pb-[20px] ">
        <div className="flex flex-col items-center mt-[-140px] ml-[90px] mr-[162px] ">
          <div className=" w-[342px] mb-[-60px] ">
            <Image src={userProfile} alt="user-profile" objectFit="cover" />
          </div>
          <h2 className="font-sulphur-point font-[700] text-[30px] text-[#011717] ">
            Promise Akhigbe
          </h2>
          <NextLink href="/editProfile" legacyBehavior passHref>
            <a className=" text-white bg-[#011717] rounded-[40px] font-sulphur-point font-[400] text-[20px] text-center w-[216px] py-[6px] ">
              Edit Profile
            </a>
          </NextLink>
        </div>

        <div className="flex flex-col  mt-[80px] divide-y divide-[#011717] ">
          {datas.map((data, index) => (
            <div key={index} className="font-sulphur-point font-[400] text-[30px] text-[#011717] py-[12px] ">
              <NextLink href={data.href} passHref legacyBehavior>
                <a>{data.title}</a>
              </NextLink>
            </div>
          ))}
        </div>
      </div>

      <NextLink href="/explore/Index" passHref legacyBehavior>
        <a className="font-sulphur-point font-[700] text-[20px] text-[#011717] mt-[37px] ml-[190px] ">
          Log out
        </a>
      </NextLink>
    </>
  );
};

export default MyProfile;
