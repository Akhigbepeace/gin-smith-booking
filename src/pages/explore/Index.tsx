import MobileExplore from "components/layout/mobile/explore";
import Head from "next/head";
import React from "react";
import CalendarSearchBanner from "./CalendarSearchBanner";
import ExploreByStates from "./ExploreByCity";
import Header from "./Header";
import PopularDestinations from "./PopularDestinations";

const ExplorePage = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Explore</title>
      </Head>
      <div className="sm:hidden md:hidden lg:hidden xl:block 2xl:block ">
        <Header />
        <CalendarSearchBanner />
        <PopularDestinations />
        <ExploreByStates />
        <p className="font-sulphur-point font-[700] text-center p-[10px] bg-black text-white ">
          Copyright 2023. Ginsmith Booking
        </p>
      </div>

      <div className="xl:hidden 2xl:hidden ">
        <MobileExplore />
      </div>
    </>
  );
};

export default ExplorePage;
