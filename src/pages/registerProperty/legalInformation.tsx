import CancelButton from "components/atoms/cancelButton";
import Head from "next/head";
import React from "react";
import { informations } from "../../config/data";
import Footer from "./footer";
import PropertyHeader from "./header";
import NextLink from "next/link";

const LegalInformation = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Register Property | Legal Information</title>
      </Head>

      <PropertyHeader />

      <div className=" w-[1100px] mx-auto mb-[30px] ">
        <h2 className="font-sulphur-point font-[400] text-[25px] mt-[71px] mb-[34px] uppercase ">
          legal information
        </h2>

        <div className="bg-[#EFEFEF] rounded-[20px] p-[18px_63px_28px_51px]">
          {informations.map((information, index) => (
            <div key={index} className="mb-[30px] leading-[25px] ">
              <h3 className="font-sulphur-point font-[700] text-[20px] ">
                {information.title}
              </h3>
              <p className="font-sulphur-point font-[300] text-[20px] capitalize ">
                {information.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-sulphur-point text-[25px] text-center font-[300] ">
          By selecting “I AGREE” you are consenting to the agreement above.
        </p>

        <div className="grid grid-flow-col items-center justify-center ">
          <div className="flex  items-center mr-[90px]  ">
            <input
              type="checkbox"
              className="bg-[#B1B1B1] rounded-[5px] border-none   "
            />
            <p className="font-sulphur-point text-[20px] ml-[20px] text-center font-[300]">
              I AGREE
            </p>
          </div>

          <div className="flex  items-center">
            <input
              type="checkbox"
              className="bg-[#B1B1B1] rounded-[5px] border-none   "
            />
            <p className="font-sulphur-point text-[20px] ml-[20px] text-center font-[300]">
              I DISAGREE
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-[1244px] mx-auto mt-[86px] mb-[66px] ">
        <NextLink href="./successfulRegistration" legacyBehavior passHref>
          <button className="bg-[#011717] w-[364px] rounded-[20px] text-white font-sulphur-point text-[20px] py-[15px] text-center capitalize ">
            accept the TERMS & CONDITION
          </button>
        </NextLink>

        <CancelButton />
      </div>

      <Footer />
    </>
  );
};

export default LegalInformation;
