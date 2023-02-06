import React from "react";
import NextLink from "next/link";
import Head from "next/head";
import Image from "next/legacy/image";
import HelpCenter from "./helpCenter";

const RegisterProperty = () => {
  const banner = "/assets/Images/register_property.png";

  const propertyDatas = [
    {
      title: "PROPERTY CONTACT DETAILS",
      fields: [
        {
          fieldName: "Contact Name:",
          type: "text",
        },
        {
          fieldName: "Contact Number:",
          type: "tel",
        },
        {
          fieldName: "Alternative Number [Optional]:",
          type: "tel",
        },
        {
          fieldName: "Email:",
          type: "email",
        },
      ],
    },
    {
      title: "PROPERTY LOCATION",
      fields: [
        {
          fieldName: "Street Number & Address:",
          type: "text",
        },
        {
          fieldName: "City:",
          type: "text",
        },
        {
          fieldName: "State:",
          type: "text",
        },
        {
          fieldName: "Postal Code:",
          type: "text",
        },
        {
          fieldName: "Country:",
          type: "text",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Register Property</title>
      </Head>
      <div className="flex items-center justify-between bg-[#D7B67E] h-[75px] border-b-[6px] border-[#A18451]  ">
        <NextLink href="/" legacyBehavior passHref>
          <h1 className="ml-[100px] font-[400] text-[30px] cursor-pointer font-water-brush  ">
            Ginsmith Booking
          </h1>
        </NextLink>

        <div className="mr-[57px] flex items-center">
          <NextLink href="/helpCenter" legacyBehavior passHref>
            <p className="font-sulphur-point cursor-pointer ml-[20px] text-[16px] font-[400] text-[#011717] ">
              Helpdesk
            </p>
          </NextLink>
        </div>
      </div>

      <div className="h-[145px] overflow-hidden relative">
        <Image src={banner} alt="banner" layout="fill" objectFit="cover" />
        <h1 className="font-sulphur-point font-[700] text-[30px] ml-[134px] absolute bottom-[22px] text-[#011717] ">
          REGISTER PROPERTY
        </h1>
      </div>

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

        <div className="flex items-center justify-center w-[1244px] mx-auto mt-[86px] mb-[66px] ">
          <div>
            <button className="bg-[#011717] w-[364px] rounded-[20px] text-white font-sulphur-point text-[20px] py-[15px] text-center  ">
              SAVE & CONTINUE LATER
            </button>
            <button className="bg-[#011717] w-[200px] rounded-[20px] ml-[18px] mr-[83px] text-white font-sulphur-point text-[20px] py-[15px] text-center  ">
              NEXT
            </button>
          </div>

          <button className=" border-[#011717] border-[2px] w-[200px] rounded-[20px] ml-[18px] mr-[83px] text-[#011717] font-sulphur-point text-[20px] py-[15px] text-center  ">
            CANCEL
          </button>
        </div>
      </form>

      <div className="bg-[#011717] py-[15px] flex items-center justify-between">
        <div className="text-white font-sulphur-point text-[18px] flex items-center ml-[80px] ">
          <NextLink href="#!" legacyBehavior passHref>
            <p className="cursor-pointer">About Us</p>
          </NextLink>
          <p className="mx-[20px]">|</p>
          <NextLink href="/helpCenter" legacyBehavior passHref>
            <p className="cursor-pointer">FAQ</p>
          </NextLink>
        </div>

        <div className="text-[#D7B67E] font-sulphur-point text-[18px]  flex items-center mr-[80px]">
          <p>Copyright 2023</p>

          <p className="mx-[20px]">|</p>

          <p>Ginsmith Booking</p>
        </div>
      </div>
    </>
  );
};

export default RegisterProperty;
