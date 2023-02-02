import Head from "next/head";
import React from "react";
import FormTitle from "../components/atoms/formTitle";
import DescBanner from "../components/molecules/descBanner";
import SubmitButton from "../components/atoms/submitButton";

const ForgotPassword = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Forgot Password</title>
      </Head>

      <div className="bg-[#035655] h-screen flex items-center justify-center">
        <div className="mr-[200px]">
          <DescBanner />
        </div>

        <div>
          <FormTitle text="Forgot Password?" />

          <div className="flex flex-col items-center bg-white rounded-[30px] py-[37px] h-[508px] w-[508px]">
            <h1 className="text-center text-[#035655] font-sulphur-point text-[20px] font-[400] mt-[35px]">
              Enter email to reset Password
            </h1>

            <form action="#" className="flex flex-col items-center">
              <input
                required
                type="email"
                placeholder="Email"
                className="drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[30px] w-[351px] h-[41px] mt-[60px] p-[15px_30px] outline-[0] text-[black] placeholder:text-[15px] font-[400] font-sulphur-point mb-[27px] "
              />

              <SubmitButton text="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
