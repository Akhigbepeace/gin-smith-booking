import React from "react";
import Medias from "../../components/molecules/medias";
import NextLink from "next/link";

const Form = () => {
  const inputs = [
    { placeholder: "Email", type: "email" },
    { placeholder: "Password", type: "password" },
  ];
  return (
    <div>
      <h1 className="text-[40px] font-[400] text-white leading-[40px] text-center font-sulphur-point mb-[36px]">
        LOG UP
      </h1>

      <div className="flex flex-col items-center bg-white rounded-[30px] py-[37px] w-[508px]">
        <div>
          <Medias />
        </div>

        <NextLink href="#" legacyBehavior passHref>
          <p className="text-center text-[#035655] font-sulphur-point text-[15px] font-[400] cursor-pointer ">
            Or Login with Email
          </p>
        </NextLink>

        <div className="mt-[35px] ">
          <form className="flex flex-col items-center justify-center ">
            {inputs.map((input, index) => {
              return (
                <input
                  required
                  key={index}
                  type={input.type}
                  placeholder={input.placeholder}
                  className="drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[30px] w-[351px] h-[41px] mb-[26px] p-[15px_30px] outline-[0] text-[black] placeholder:text-[15px] font-[400] text-[#B3B3B3] font-sulphur-point "
                />
              );
            })}
          </form>
        </div>

        <NextLink href="#" legacyBehavior passHref>
          <button
            type="submit"
            className="bg-[#035655] inline-block rounded-[20px] w-[357px] h-[40px] text-white font-sulphur-point text-[17px] font-[700] transition text-center py-[6px] hover:bg-[#024342]  "
          >
            Login
          </button>
        </NextLink>

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
