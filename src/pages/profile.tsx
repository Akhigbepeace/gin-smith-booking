import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";
import BackButton from "../components/atoms/backButton";
import NextLink from "next/link";

const MyProfile = () => {
  const userProfileImage = "/assets/images/userImage.svg";

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
      title: "Contact Us",
      href: "/contact",
    },
  ];
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Profile</title>
      </Head>

      <header className="pt-[70px] relative h-[200px]">
        <Image
          src="/assets/images/profilebanner.png"
          alt="profile"
          objectFit="cover"
          layout="fill"
          className="z-[-1]"
        />

        <div className="flex items-center ml-[85px] ">
          <BackButton linkTo="/loggedIn" />
        </div>
        <h1 className=" text-center font-sulphur-point font-[700] text-[40px] text-[#011717] ">
          My Profile
        </h1>
      </header>

      <div className="flex justify-center pb-[37px] mb-[20px] border-b-[2px] border-[#011717] mx-[45px]">
        <div className="flex flex-col w-[300px]   mr-[254px] ">
          <div className="flex flex-col items-center mt-[-60px] ">
            <div className="mb-[-60px] ">
              <Image
                src={userProfileImage}
                alt="user-profile"
                objectFit="cover"
                width={300}
                height={300}
              />
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

          <div className="font-sulphur-point font-[700] mt-[90px] mx-auto text-[20px] text-[#EC1F25]  ">
            <NextLink href="/explore/Index" passHref legacyBehavior>
              <a>Log out</a>
            </NextLink>
          </div>
        </div>

        <div className="flex flex-col items-center divide-y-[1px]  divide-[#011717] ">
          {datas.map((data, index) => (
            <div
              key={index}
              className="font-sulphur-point font-[400] text-[30px] text-[#011717] py-[20px] "
            >
              <NextLink href={data.href} passHref legacyBehavior>
                <a>{data.title}</a>
              </NextLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
