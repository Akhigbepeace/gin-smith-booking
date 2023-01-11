import React from "react";
import Medias from "../../components/molecules/medias";
import NextLink from "next/link";
import FormInput from "../../components/molecules/formInput";

const Form = () => {
  return (
    <div>
      <h1 className="text-[40px] font-[400] text-white leading-[40px] text-center font-sulphur-point mb-[36px]">
        SIGN UP
      </h1>

      <div className="flex flex-col items-center bg-white rounded-[30px] py-[37px] w-[508px]">
        <div>
          <Medias />
        </div>

        <NextLink href="#" legacyBehavior passHref>
          <p className="text-center text-[#035655] font-sulphur-point text-[15px] font-[400] cursor-pointer ">
            Or Sign Up with Email
          </p>
        </NextLink>

        <div className="mt-[35px] ">
          <FormInput />
        </div>

        <NextLink href="#" legacyBehavior passHref>
          <button
            type="submit"
            className="bg-[#035655] inline-block rounded-[20px] w-[357px] h-[40px] text-white font-sulphur-point text-[17px] font-[700] transition text-center py-[6px] hover:bg-[#024342]  "
          >
            Sign Up
          </button>
        </NextLink>

        <p className="w-[350px] font-[600] text-center text-[16px] text-[#035655] font-sulphur-point mt-[14px] ">
          By signing up you agree with Our Terms of Services and privacy policy
        </p>

        <div className="flex flex-row items-center ">
          <p className="font-[500] text-center text-[16px] text-[#035655] font-sulphur-point mt-[14px]">
            Already have an account?
          </p>
          <NextLink href="/login" legacyBehavior passHref>
            <a className=" font-sulphur-point text-[#011717] text-[16px] font-[800] mt-[15px] ml-[5px] ">
              Login
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Form;
