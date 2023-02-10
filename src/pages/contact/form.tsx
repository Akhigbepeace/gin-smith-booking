import Head from "next/head";
import React from "react";

const ContactForm = () => {
  const formFields = [
    {
      label: "Email Address",
      type: "email",
      name: "name",
    },
    {
      label: "Phone Number",
      type: "tel",
      name: "number",
    },
  ];

  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Contact Us</title>
      </Head>

      <form className="bg-white rounded-[30px] m-[40px] p-[40px]">
        <h1 className="font-sulphur-point font-[700] text-[48px] mb-[40px] text-[#011717] text-center ">
          CONTACT US
        </h1>
        <div className="grid grid-flow-col">
          <div className="flex flex-col">
            <label
              htmlFor="first_name"
              className="font-sulphur-point block text-[24px] text-[#011717] mb-[16px] "
            >
              First Name
            </label>
            <input
              required
              type="text"
              className="block shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[30px] w-[297px] h-[51px]  p-[15px_30px] outline-[0] text-[20px] mb-[49px] text-[black] placeholder:text-[15px] font-[400] font-sulphur-point border-none "
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="last_name"
              className="font-sulphur-point inline-block text-[24px] text-[#011717] mb-[16px] "
            >
              Last Name
            </label>
            <input
              required
              type="text"
              className="block shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[30px] w-[297px] h-[51px]  p-[15px_30px] outline-[0] text-[20px] mb-[49px] text-[black] placeholder:text-[15px] font-[400] font-sulphur-point border-none "
            />
          </div>
        </div>

        {formFields.map((field, index) => (
          <>
            <label
              htmlFor={field.label}
              className="font-sulphur-point text-[24px] text-[#011717] mb-[16px] "
            >
              {field.label}
            </label>
            <input
              required
              key={index}
              type={field.type}
              className="block shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[30px] w-[620px] h-[51px]  p-[15px_30px] outline-[0] text-[20px] mb-[49px] text-[black] placeholder:text-[15px] font-[400] font-sulphur-point border-none "
            />
          </>
        ))}

        <div>
          <label
            htmlFor="message"
            className="font-sulphur-point text-[24px]  text-[#011717] mb-[16px] "
          >
            Message
          </label>
          <textarea
            required
            name="message"
            id="message"
            rows={5}
            className="block border-none shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-[30px] w-full p-[15px_30px] outline-[0] text-[20px] text-[black] placeholder:text-[15px] font-[400] font-sulphur-point "
          />
        </div>
        <button
          type="submit"
          className=" bg-[#011717] mt-[20px] inline-block rounded-[20px] w-full  text-white font-sulphur-point text-[25px] m-auto font-[700] transition text-center py-[6px] hover:bg-opacity-85   "
        >
          SEND
        </button>
      </form>
    </>
  );
};

export default ContactForm;
