import React from "react";
import DescBanner from "../../components/molecules/descBanner";
import Form from "./form";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Login</title>
      </Head>

      <div className="bg-[#035655] h-screen flex items-center justify-center">
        <div className="mr-[200px]">
          <DescBanner />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Index;
