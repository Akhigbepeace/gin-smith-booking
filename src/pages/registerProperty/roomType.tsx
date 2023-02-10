import PropertyRegButton from "components/molecules/propertyRegButton";
import Head from "next/head";
import React from "react";
import Footer from "./footer";
import PropertyHeader from "./header";

const RoomType = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Register Property | Room Type</title>
      </Head>

      <PropertyHeader />

      <div className=" w-[1100px] mx-auto ">
        <label
          htmlFor="name"
          className="font-sulphur-point font-[400] text-[25px] "
        >
          ROOMS TYPE
        </label>
        <input
          type="text"
          className="w-full mt-[19px] rounded-[15px] h-[56px] shadow-[0px_10px_15px_rgba(0,0,0,0.25)] border-none "
        />
      </div>

      <PropertyRegButton href="./uploadPropertyImages" />
      <Footer />
    </>
  );
};

export default RoomType;
