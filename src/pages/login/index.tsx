import React from "react";
import DescBanner from "../../components/molecules/descBanner";
import Form from "./form";
import Head from "next/head";
import MobileLoginPage from "components/layout/mobileLogin";

const Index = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Login</title>
      </Head>

      <div className="bg-[#035655] h-screen xl:flex lg:hidden items-center justify-center sm:hidden ">
        <div className="mr-[200px]">
          <DescBanner />
        </div>
        <div>
          <Form />
        </div>
      </div>

      <div className=" sm:block xl:hidden ">
        <MobileLoginPage />
      </div>
    </>
  );
};

export default Index;
