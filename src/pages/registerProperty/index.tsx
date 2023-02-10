import React from "react";
import NextLink from "next/link";
import Head from "next/head";
import PropertyHeader from "./header";
import { propertyDatas } from "./data";
import Footer from "./footer";
import CancelButton from "components/atoms/cancelButton";
import PropertyRegButton from "components/molecules/propertyRegButton";

const RegisterProperty = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Register Property</title>
      </Head>

      <PropertyHeader />

      <form action="#!" className="mt-[93px]  ">
        <div className=" w-[1100px] mx-auto mb-[30px] ">
          <label
            htmlFor="name"
            className="font-sulphur-point font-[400] text-[25px] "
          >
            Property Name:
          </label>
          <input
            type="text"
            className="w-full mt-[19px] rounded-[15px] h-[56px] shadow-[0px_10px_15px_rgba(0,0,0,0.25)] border-none "
          />
        </div>

        <div>
          {propertyDatas.map((data, index) => {
            return (
              <div key={index}>
                <h1 className="font-sulphur-point font-[400] w-[1100px] mx-auto text-[26px] mt-[115px] mb-[21px] ">
                  {data.title}
                </h1>

                <div className="w-[1244px] pt-[25px] pb-[52px] mx-auto bg-[#F2F2F2] rounded-[20px] px-[66px]  shadow-[0px_10px_10px_rgba(0,0,0,0.25)] ">
                  {data.fields.map((items, index) => {
                    return (
                      <div key={index}>
                        <label
                          htmlFor={items.fieldName}
                          className="block font-sulphur-point font-[400] text-[20px] "
                        >
                          {items.fieldName}
                        </label>
                        <input
                          type={items.type}
                          className="w-full mb-[19px] rounded-[15px] h-[56px] shadow-[0px_5px_10px_rgba(0,0,0,0.25)] border-none "
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <PropertyRegButton href="/registerProperty/roomType" />
      </form>

      <Footer />
    </>
  );
};

export default RegisterProperty;
