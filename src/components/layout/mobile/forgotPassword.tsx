import MobileSubmitButton from "components/atoms/mobileSubmitButton";
import React from "react";

const MobileForgotPassword = () => {
  return (
    <div className="bg-[#003B3B]">
      <h2 className="text-[#C38317] font-sulphur-point font-[400] text-[24px] text-center py-[50px] ">
        FORGOT PASSWORD
      </h2>

      <div className="bg-white flex flex-col items-center  rounded-[20px_20px_0_0] p-[45px] ">
        <form>
          <input
            required
            type="email"
            placeholder="Enter Email"
            className="block shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[30px] w-[297px] h-[51px]  p-[15px_30px] text-[20px]  mb-[30px] placeholder:text-[#D2D2D2] text-[black] placeholder:text-[15px] font-[400] font-sulphur-point border-none"
          />

          <div className="mt-[84px]">
            <MobileSubmitButton title="SUBMIT" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MobileForgotPassword;
