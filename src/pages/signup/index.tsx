import MobileSignup from "components/layout/mobileSignup";
import Head from "next/head";
import React from "react";
import DescBanner from "../../components/molecules/descBanner";
import Form from "./form";

const Index = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Signup</title>
      </Head>

      <div className="bg-[#035655] h-screen xl:flex items-center justify-center lg:hidden sm:hidden ">
        <div className="mr-[200px]">
          <DescBanner />
        </div>
        <div>
          <Form />
        </div>
      </div>

      <div className="sm:block xl:hidden ">
        <MobileSignup />
      </div>
    </>
  );
};

export default Index;
