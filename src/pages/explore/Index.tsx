import Head from "next/head";
import React from "react";
import CalendarSearchBanner from "./CalendarSearchBanner";
import ExploreByStates from "./ExploreByCity";
import Header from "./Header";
import PopularDestinations from "./PopularDestinations";

const Index = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Explore</title>
      </Head>
      <div>
        <Header />
        <CalendarSearchBanner />
        <PopularDestinations />
        <ExploreByStates />
      </div>
      <p className="font-sulphur-point font-[700] text-center p-[10px] bg-black text-white ">
        Copyright 2023. Ginsmith Booking
      </p>
    </>
  );
};

export default Index;
