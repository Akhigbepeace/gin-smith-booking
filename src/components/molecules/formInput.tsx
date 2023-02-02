import SubmitButton from "components/atoms/submitButton";
import React from "react";

const FormInput = () => {
  const inputs = [
    { placeholder: "First Name", type: "text" },
    { placeholder: "Last Name", type: "text" },
    { placeholder: "Email", type: "email" },
    { placeholder: "Password", type: "password" },
  ];
  return (
    <form
      action="/login"
      className="flex flex-col items-center justify-center "
    >
      {inputs.map((input, index) => {
        return (
          <input
            required
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            className="drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[30px] w-[351px] h-[41px] mb-[19px] p-[15px_30px] outline-[0] text-[black] placeholder:text-[15px] font-[400] placeholder:text-[#B3B3B3] font-sulphur-point "
          />
        );
      })}

      <SubmitButton text="Sign Up" />
    </form>
  );
};

export default FormInput;
