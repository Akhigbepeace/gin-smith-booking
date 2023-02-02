import PagesHeader from "components/molecules/pagesHeader";
import Head from "next/head";
import React from "react";

const paymentHistory = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Payment History</title>
      </Head>
      <div className="bg-[#035655] h-[100vh]">
        <PagesHeader title="Payment History" href="/profile" />
      </div>
    </>
  );
};

export default paymentHistory;
