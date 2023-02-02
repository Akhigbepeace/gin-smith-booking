import React from "react";

type SubmitButtonProps = {
  text: string;
};

const SubmitButton = ({ text }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="bg-[#035655] inline-block rounded-[20px] w-[357px] h-[40px] text-white font-sulphur-point text-[17px] font-[700] transition text-center py-[6px] hover:bg-[#024342]  "
    >
      {text}
    </button>
  );
};

export default SubmitButton;
