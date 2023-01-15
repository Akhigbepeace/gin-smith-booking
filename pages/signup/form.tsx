import React from "react";
import Medias from "../../components/molecules/medias";
import NextLink from "next/link";
import FormInput from "../../components/molecules/formInput";
import FormTitle from "../../components/atoms/FormTitle";
import SubmitButton from "../../components/atoms/submitButton";

const Form = () => {
  return (
    <div>
      <FormTitle title="SIGN UP" />

      <div className="flex flex-col items-center bg-white rounded-[30px] py-[37px]  w-[508px]">
        <div>
          <Medias />
        </div>

        <p className="text-center text-[#035655] font-sulphur-point my-[5px] text-[15px] font-[400] cursor-pointer ">
          Or Sign Up with Email
        </p>

        <div className="mt-[20px] ">
          <FormInput />
        </div>

        <SubmitButton text="Sign Up" />

        <p className="w-[350px] font-[600] text-center text-[16px] text-[#035655] font-sulphur-point mt-[14px] ">
          By signing up you agree with Our Terms of Services and privacy policy
        </p>

        <div className="flex flex-row items-center mb-[-20px] mt-[10px] ">
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
