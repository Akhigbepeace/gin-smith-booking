import React from "react";

type FormTitleProps = {
  text: string;
};

const FormTitle = ({ text }: FormTitleProps) => (
  <h1 className="text-[40px] font-[400] text-white leading-[40px] text-center font-sulphur-point mb-[26px]">
    {text}
  </h1>
);

export default FormTitle;
