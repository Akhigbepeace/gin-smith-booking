import React from "react";
import ContactForm from "./form";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from "next/legacy/image";
import BackButton from "components/atoms/backButton";

const Index = () => {
  const hotelBg = "/assets/images/contactPageBg.png";
  const enquires = [
    {
      icon: <TfiEmail />,
      text: "ginsmithbooking@email.com",
      heading: "Email Support",
    },
    {
      heading: "Direct Line",
      icon: <FaPhoneAlt />,
      text: "+234 812 820 9510",
    },

    {
      icon: <BsFacebook />,
      heading: "Facebook",
      text: "Ginsmith Booking",
    },
    {
      icon: <AiFillTwitterCircle />,
      heading: "Twitter",
      text: "@ginsmithbooking",
    },
  ];
  return (
    <div className=" bg-[url('/assets/images/contactPageBg.png')] bg-[#011717]">
      <div className="p-[40px]">
        <BackButton linkTo="/profile" />
      </div>

      <div className="mt-[-50px] flex items-center justify-center">
        <div className="font-sulphur-point text-white w-[456px] mr-[50px] ">
          <h1 className="font-[300] leading-[35px] mb-[90px] text-[35px] ">
            We are open for suggestion and feedback
          </h1>

          {enquires.map((data, index) => (
            <div key={index} className="flex items-start mb-[70px]">
              <div className="w-[30px] h-[30px] ">{data.icon}</div>

              <div className="ml-[50px]">
                <h2 className="font-[700] text-[23px]   ">{data.heading}</h2>
                <p className="font-[300] text-[20px] ">{data.text}</p>
              </div>
            </div>
          ))}
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
