import React from "react";
import PropertyHeader from "./header";
import Form from "./form";
import Head from "next/head";
import NextLink from "next/link";
import Image from "next/image";

const LandingPage = () => {
  const propertyType = [
    {
      name: "Hotel",
      icon: "",
      href: <Form />,
    },
    {
      name: "Service Apartment",
      icon: "",
      href: <Form />,
    },
  ];

  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Register Property</title>
      </Head>

      <PropertyHeader />

      {/* <div>
        {propertyType.map((property, index) => (
          <div key={index}>
            <p>{property.name}</p>
          </div>
        ))}
      </div> */}

      <div className="flex items-center justify-center mt-[85px] ">
        <div className="w-[244px]">
          <p className="font-sulphur-point text-center text-[#011717] font-[400] text-[20px] mb-[20px] ">
            Hotel
          </p>
          <NextLink href="./registerProperty/form" legacyBehavior passHref>
            <div className="cursor-pointer bg-[#D9D9D9] w-[244px] h-[206px] grid place-items-center rounded-[20px] ">
              <Image
                src="/assets/images/home.png"
                alt="home"
                width={72}
                height={68}
              />
            </div>
          </NextLink>
        </div>

        <p className="font-sulphur-point text-[#011717] mt-[52px] mx-[35px] font-[400] text-[25px] mb-[35px] ">
          OR
        </p>

        <div className="w-[244px]">
          <p className="font-sulphur-point text-center text-[#011717] font-[400] text-[20px] mb-[20px] ">
            Service Apartment
          </p>
          <NextLink href="./registerProperty/form" legacyBehavior passHref>
            <div className="cursor-pointer bg-[#D9D9D9] w-[244px] h-[206px] grid place-items-center rounded-[20px] ">
              <Image
                src="/assets/images/service.png"
                alt="home"
                width={93}
                height={68}
              />
            </div>
          </NextLink>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
