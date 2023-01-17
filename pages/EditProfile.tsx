import React from "react";
import BackButton from "../components/atoms/BackButton";

const EditProfile = () => {
  return (
    <div>
      <header className="bg-[url('../assets/images/profilebanner.png')] h-[200px] pt-[70px] bg-no-repeat w-screen ">
        <div className="flex items-center ml-[85px] ">
          <BackButton href="/loggedIn" />
        </div>
        <h1 className=" text-center font-sulphur-point font-[700] text-[40px] text-[#011717] ">
          Edit Profile
        </h1>
      </header>
    </div>
  );
};

export default EditProfile;
