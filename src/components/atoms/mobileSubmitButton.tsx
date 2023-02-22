import React from "react";

type MobileSubmitButtonProps = {
  title: string;
};

const MobileSubmitButton = ({ title }: MobileSubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="bg-[#014443] text-white text-center w-[300px] text-[14px] font-[700] py-[9px] rounded-[20px] "
    >
      {title}
    </button>
  );
};

export default MobileSubmitButton;
