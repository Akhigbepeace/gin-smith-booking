import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";
import Footer from "./footer";
import PropertyHeader from "./header";

const SuccessfulRegistration = () => {
  const verify = "/assets/images/verify.png";
  return (
    <>
      <Head>
        <title>
          GINSMITH BOOKING | Register Property | Successful Registraion
        </title>
      </Head>

      <PropertyHeader />

      <div className="flex flex-col font-[700] mt-[50px] items-center font-sulphur-point text-[#011717] ">
        <h2 className="text-[50px] mb-[9px] ">PROPERTY REGISTERED</h2>
        <h1 className="text-[78px]">SUCCESSFULLY</h1>

        <Image src={verify} width={600} height={600} />
      </div>

      <Footer />
    </>
  );
};

export default SuccessfulRegistration;
