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
        <div className="pl-[51px] flex items-center bg-white w-full font-sulphur-point font-[700] text-[30px] py-[19px] ">
          <PagesHeader title="Change Password" href="/MyProfile" />
        </div>

        <div className="bg-[#035655] pt-[52px] pl-[187px] ">
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
              className="rounded-[30px] w-[684.88px] h-[83.16px] py-[22px] pl-[62px] placeholder:font-sulphur-point font-[400] text-[20px] "
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
              className="rounded-[30px] w-[684.88px] h-[83.16px] py-[22px] pl-[62px] placeholder:font-sulphur-point font-[400] text-[20px] mb-[20px] "
            />
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm New Password"
              className="rounded-[30px] w-[684.88px] h-[83.16px] py-[22px] pl-[62px] font-[400] text-[20px] placeholder:font-sulphur-point  "
            />
          </div>

          <button
            type="submit"
            className="bg-[#011717] text-white w-[684.88px] h-[70px] font-sulphur-point font-[700] text-center text-[40px] rounded-[30px] mt-[25px] mb-[40px] "
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
