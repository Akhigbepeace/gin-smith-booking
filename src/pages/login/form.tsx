import React from "react";
import Medias from "../../components/molecules/medias";
import NextLink from "next/link";
import FormTitle from "../../components/atoms/formTitle";
import SubmitButton from "../../components/atoms/submitButton";

const Form = () => {
  const inputs = [
    { placeholder: "Email", type: "email" },
    { placeholder: "Password", type: "password" },
  ];
  return (
    <div>
      <FormTitle text="LOG IN" />

      <div className="flex flex-col items-center bg-white rounded-[30px] py-[37px] h-[508px] w-[508px]">
        <div>
          <Medias />
        </div>

        <p className="text-center text-[#035655] font-sulphur-point text-[15px] font-[400] cursor-pointer mt-[35px]   ">
          Or Login with Email
        </p>

        <div className="mt-[15px] ">
          <form action="/loggedIn" className="flex flex-col justify-center ">
            {inputs.map((input, index) => {
              return (
                <input
                  required
                  key={index}
                  type={input.type}
                  placeholder={input.placeholder}
                  className="drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[30px] w-[351px] h-[41px] mt-[26px] p-[15px_30px] outline-[0] text-[black] placeholder:text-[15px] font-[400] font-sulphur-point "
                />
              );
            })}

            <NextLink href="../forgotPassword" passHref legacyBehavior>
              <p className="text-[#EC1F25] font-[400] text-[14px] mb-[36px] mt-[19px] text-right font-sulphur-point cursor-pointer ">
                Forgot Password?
              </p>
            </NextLink>

            <SubmitButton text="Login" />
          </form>
        </div>

        <div className="flex flex-row items-center ">
          <p className="font-[500] text-center text-[16px] text-[#035655] font-sulphur-point mt-[14px]">
            Don’t have an account?
          </p>
          <NextLink href="/signup" legacyBehavior passHref>
            <a className=" font-sulphur-point text-[#011717] text-[16px] font-[800] mt-[15px] ml-[5px] ">
              Sign Up
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Form;
