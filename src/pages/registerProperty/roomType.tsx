import PropertyRegButton from "components/molecules/propertyRegButton";
import Head from "next/head";
import React from "react";
import Footer from "./footer";
import PropertyHeader from "./header";

const RoomType = () => {
  const pricings = [
    "Single Room",

    "Twin or Double Room",

    "Studio Room",

    "Suites",

    "Presidential Suites",
  ];

  const meals = ["Breakfast", "Lunch", "Dinner"];

  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Register Property | Room Type</title>
      </Head>

      <PropertyHeader />

      <div className=" w-[1100px] mx-auto ">
        <div className="mt-[71px]">
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

          {pricings.map((pricing, index) => (
            <div key={index} className="flex items-center ">
              <input
                type="checkbox"
                className="bg-[#B1B1B1] rounded-[5px] border-none mr-[25px]  "
              />
              <p className="font-sulphur-point text-[23px]  ">{pricing}</p>
            </div>
          ))}
        </div>

        <div className="mt-[64px]">
          <div className="flex items-center font-sulphur-point ">
            <h2 className="font-[700] text-[30px] ">PROPERTY FEATURES</h2>
            <p className="font-[300] ml-[20px] text-[#035655] ">
              [Select all that applies]
            </p>
          </div>
          <textarea
            name="feat"
            id="feat"
            className="w-full h-[567px] bg-[#EFEFEF] border-none rounded-[20px] "
          />
        </div>

        <div>
          <div className="flex items-center font-sulphur-point ">
            <h2 className="font-[700] text-[30px] ">MEAL</h2>
            <p className="font-[300] ml-[20px] text-[#035655] ">
              [Select all that applies]
            </p>
          </div>
          <div className="flex items-center justify-between ">
            {meals.map((meal, index) => (
              <div key={index} className="flex items-center ">
                <input
                  type="checkbox"
                  className="bg-[#B1B1B1] rounded-[5px] border-none mr-[25px]  "
                />
                <p className="font-sulphur-point text-[23px]  ">{meal}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[64px]">
          <h2 className="font-[700] font-sulphur-point  text-[30px] ">
            HOUSE RULES
          </h2>
          <textarea
            name="feat"
            id="feat"
            className="w-full h-[280px] bg-[#EFEFEF] border-none rounded-[20px] "
          />
        </div>
      </div>

      <PropertyRegButton href="./uploadPropertyImages" />
      <Footer />
    </>
  );
};

export default RoomType;
