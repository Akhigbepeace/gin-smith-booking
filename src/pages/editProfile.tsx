import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";
import BackButton from "../components/atoms/backButton";

const EditProfile = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Edit Profile</title>
      </Head>

      <header className="pt-[70px] relative h-[200px]">
        <Image
          src="/assets/images/editbanner.svg"
          alt="profile"
          objectFit="cover"
          layout="fill"
          className="z-[-1]"
        />

        <div className="flex items-center ml-[85px] ">
          <BackButton linkTo="/profile" />
        </div>
        <h1 className=" text-center font-sulphur-point font-[700] text-[40px] text-[#011717] ">
          Edit Profile
        </h1>
      </header>
    </>
  );
};

export default EditProfile;
