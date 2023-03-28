import Image from "next/legacy/image";
import React from "react";
import { AiFillCamera } from "react-icons/ai";
import MobileMenu from "./mobileMenu";

const MobileEditProfile = () => {
  const formFields = [
    {
      placeholder: "Username",
      type: "text",
    },
    {
      placeholder: "Email",
      type: "email",
    },
    {
      placeholder: "Phone",
      type: "tel",
    },
    {
      placeholder: "Date of Birth",
      type: "date",
    },
    {
      placeholder: "Address",
      type: "text",
    },
  ];

  const avatar = "/assets/images/imgAvatar.png";

  return (
    <>
      <div className="font-sulphur-point p-[52px_40px] ">
        <h1 className="font-[300] text-[32px]">Edit Profile</h1>

        <div className="relative flex flex-col items-center justify-center my-[25px] ">
          <Image src={avatar} width={193} height={193} />
          <div className="w-[27px] h-[27px] bg-[#9B9B9B] rounded-full flex items-center justify-center absolute bottom-[23%] right-[30%] ">
            <AiFillCamera />
          </div>
        </div>

        <form className="flex flex-col items-center divide-y-[2px] divide-[#BABABA] ">
          {formFields.map((item) => (
            <input
              type={item.type}
              placeholder={item.placeholder}
              className="font-[300] text-[20px] mb-[20px] border-0 w-[312px]  "
            />
          ))}
          <button
            type="submit"
            className="font-[400] mt-[110px] mb-[80px] text-white bg-[#014443] w-[300px] h-[40px] rounded-[20px] uppercase text-center "
          >
            apply changes
          </button>
        </form>
      </div>

      <MobileMenu
        exploreIconColor="text-black"
        tripsIconColor="text-black"
        profileIconColor="text-[#00AAA8]"
      />
    </>
  );
};

export default MobileEditProfile;
