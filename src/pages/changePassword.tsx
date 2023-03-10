import Head from "next/head";
import React from "react";
import PagesHeader from "../components/molecules/pagesHeader";

const ChangePassword = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Change Password</title>
      </Head>

      <div className="bg-[#035655] h-[100vh] ">
        <PagesHeader title="Change Password" href="/profile" />

        <div className="pt-[30px] pl-[120px]">
          <div className="flex flex-col mb-[65px] ">
            <label
              htmlFor="old-Password"
              className="font-sulphur-point font-[700] text-[30px] text-white mb-[10px] "
            >
              Old Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Recent Password"
              className="rounded-[30px] w-[684.88px] py-[15px] pl-[62px] placeholder:font-sulphur-point font-[400] text-[20px] "
            />
          </div>

          <div className="flex flex-col ">
            <label
              htmlFor="old-Password"
              className="font-sulphur-point font-[700] text-[30px] text-white mb-[20px] "
            >
              New Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Recent Password"
              className="rounded-[30px] w-[684.88px] py-[15px] pl-[62px] placeholder:font-sulphur-point font-[400] text-[20px] mb-[20px] "
            />
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm New Password"
              className="rounded-[30px] w-[684.88px] py-[15px] pl-[62px] font-[400] text-[20px] placeholder:font-sulphur-point  "
            />
          </div>

          <button
            type="submit"
            className="bg-[#011717] text-white w-[684.88px]  font-sulphur-point font-[700] text-center text-[30px] rounded-[30px] mt-[25px] mb-[40px] py-[9px] "
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
