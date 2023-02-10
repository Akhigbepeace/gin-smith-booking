import PropertyRegButton from "components/molecules/propertyRegButton";
import Head from "next/head";
import React from "react";
import Footer from "./footer";
import PropertyHeader from "./header";

const Pricing = () => {
  const pricings = [
    "Single Room",

    "Twin or Double Room",

    "Studio Room",

    "Suites",

    "Presidential Suites",
  ];

  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Register Property | Pricing</title>
      </Head>

      <PropertyHeader />

      <div className=" w-[1100px] mx-auto mb-[30px] ">
        <h2 className="font-sulphur-point font-[400] text-[25px] mt-[71px] mb-[34px] ">
          PRICING
        </h2>

        <div>
          <h1 className="font-sulphut-point font-[700] text-[23px] mb-[55px] ">
            How Much Do You Charge Per Night ?
          </h1>

          <div className="grid gap-[30px] ">
            {pricings.map((pricing, index) => (
              <div key={index} className="flex justify-between items-center ">
                <p className="font-sulphur-point text-[20px] font-[300]  ">
                  {pricing}
                </p>
                <input
                  type="text"
                  name="price"
                  placeholder="#"
                  className="bg-[#035655] rounded-[10px] w-[238px] h-[43px] text-white font-sulphur-point text-[20px] placeholder:text-white placeholder:font-sulphur-point placeholder:text-[20px] "
                />
              </div>
            ))}
          </div>
        </div>

        <PropertyRegButton href="./legalInformation" />
      </div>

      <Footer />
    </>
  );
};

export default Pricing;
