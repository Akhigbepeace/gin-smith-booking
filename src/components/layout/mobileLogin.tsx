import MobileSubmitButton from "components/atoms/mobileSubmitButton";
import MobileMedia from "components/molecules/mobileMedia";
import Link from "next/link";
import React from "react";
import Home from "pages/mobile/home";

const MobileLoginPage = () => {
  const formInputs = [
    {
      placeholder: "Email",
      type: "email",
    },
    {
      placeholder: "Password",
      type: "password",
    },
  ];
  return (
    <div className="bg-[#003B3B]">
      <h2 className="text-[#C38317] font-sulphur-point font-[400] text-[24px] text-center py-[50px] ">
        LOGIN
      </h2>

      <div className="bg-white flex flex-col items-center  rounded-[20px_20px_0_0] p-[45px] ">
        <MobileMedia />
        <p className="capitalize font-sulphur-point text-[#003B3B] font-[400] text-[14px] text-center py-[30px] ">
          or sign up with e-mail
        </p>
        <form action="/mobile/home">
          {formInputs.map((item, index) => (
            <input
              key={index}
              required
              type={item.type}
              placeholder={item.placeholder}
              className="block shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[30px] w-[297px] h-[51px]  p-[15px_30px] text-[20px]  mb-[30px] placeholder:text-[#D2D2D2] text-[black] placeholder:text-[15px] font-[400] font-sulphur-point border-none"
            />
          ))}

          <div className="mt-[84px]">
            <MobileSubmitButton title="LOG IN" />
          </div>
        </form>
        <Link href="/forgotPassword" passHref legacyBehavior>
          <p className="text-[#EC1F25] font-[400] text-[14px] mb-[36px] mt-[19px]  font-sulphur-point cursor-pointer ">
            Forgot Password?
          </p>
        </Link>

        <div className="  flex items-center justify-center mt-[25px] ">
          <p className="capitalize text-[#003B3B] font-sulphur-point font-[400] text-[14px] ">
            Don&apos;t have an account ?
          </p>
          <Link
            href="/signup"
            className="text-[#06C3C1] font-sulphur-point font-[400] text-[14px] ml-[10px] "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileLoginPage;
