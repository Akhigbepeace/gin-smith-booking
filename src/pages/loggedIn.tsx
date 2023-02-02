import Head from "next/head";
import React from "react";
import CalendarSearchBanner from "./explore/CalendarSearchBanner";
import ExploreByStates from "./explore/ExploreByCity";
import LoggedInHeader from "../components/molecules/loggedInHeader";
import PopularDestinations from "./explore/PopularDestinations";
import NextLink from "next/link";
import Image from "next/image";

const LoggedIn = () => {
  const user = "/assets/images/User.svg";
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Explore</title>
      </Head>
      <div>
        <LoggedInHeader />

        <div>
          <NextLink href="/profile" passHref legacyBehavior>
            <div className="relative cursor-pointer z-[2] bottom-[-28px] rounded-[0px_30px_30px_0px] w-[114px] p-[5px] bg-[#D7B67E] grid place-items-end ">
              <Image src={user} alt="user-icon" width={29} height={29} />
            </div>
          </NextLink>

          <div className="mt-[-40px]">
            <CalendarSearchBanner />
          </div>
        </div>

        <PopularDestinations />
        <ExploreByStates />
      </div>
      <p className="font-sulphur-point font-[700] text-center p-[10px] bg-black text-white ">
        Copyright 2023. Ginsmith Booking
      </p>
    </>
  );
};

export default LoggedIn;
