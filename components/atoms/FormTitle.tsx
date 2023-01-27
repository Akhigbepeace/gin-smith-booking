import React from "react";

type FormTitleProps = {
  title: string;
};

const FormTitle = ({ title }: FormTitleProps) => (
  <h1 className="text-[40px] font-[400] text-white leading-[40px] text-center font-sulphur-point mb-[26px]">
    {title}
  </h1>
);

export default FormTitle;
