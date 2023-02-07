import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";
import BackButton from "../components/atoms/backButton";
import NextLink from "next/link";

const EditProfile = () => {
  const userProfileImage = "/assets/images/userImage.svg";
  const camera = "/assets/images/camera.svg";

  const formInputs = [
    {
      inputType: "text",
      placeHolder: "Username:",
    },
    {
      inputType: "email",
      placeHolder: "Email:",
    },
    {
      inputType: "tel",
      placeHolder: "Phone:",
    },
    {
      inputType: "date",
      placeHolder: "Date of Birth:",
    },
    {
      inputType: "text",
      placeHolder: "Address:",
    },
  ];

  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Edit Profile</title>
      </Head>

      <header className="pt-[70px] relative h-[200px]">
        <Image
          src="/assets/images/editbanner.svg"
          alt="profile"
          objectFit="cover"
          layout="fill"
          className="z-[-1]"
        />

        <div className="flex items-center ml-[85px] ">
          <BackButton linkTo="/profile" />
        </div>
        <h1 className=" text-center font-sulphur-point font-[700] text-[40px] text-[#011717] ">
          Edit Profile
        </h1>
      </header>

      <div className="flex  border-b-[2px] border-[#011717] mb-[27px] justify-center items-center ">
        <div className="flex mr-[123px] flex-col items-center">
          <div className="flex  mt-[-80px] items-center flex-col ">
            <Image
              src={userProfileImage}
              alt="user-profile"
              objectFit="cover"
              width={300}
              height={300}
              className="relative"
            />

            <div className="flex flex-col absolute mt-[200px] items-end ">
              <NextLink href="#!" legacyBehavior passHref>
                <Image
                  src={camera}
                  alt="user-profile"
                  objectFit="cover"
                  width={44}
                  height={44}
                  className=" cursor-pointer  "
                />
              </NextLink>

              <h2 className="font-sulphur-point font-[700] text-center text-[30px] mt-[13px] text-[#011717] ">
                Promise Akhigbe
              </h2>
            </div>
          </div>

          <NextLink href="/explore/Index" passHref legacyBehavior>
            <a className="font-sulphur-point font-[700] text-[20px] text-[#EC1F25] mb-[40px] mt-[140px]">
              Log out
            </a>
          </NextLink>
        </div>

        <form
          action="#!"
          className="flex mt-[50px] mb-[20px] divide-y-2  flex-col w-[524px] "
        >
          {formInputs.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b-black"
            >
              <label
                htmlFor={item.placeHolder}
                className="font-sulphur-point font-[500] text-[25px] text-[#979797] "
              >
                {item.placeHolder}
              </label>

              <input
                type={item.inputType}
                className="text-right focus-within:shadow-none font-sulphur-point font-[700] text-[20px] text-[#011717]  focus:shadow-none w-[69%] my-[10px] border-none "
              />
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default EditProfile;
