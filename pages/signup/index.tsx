import React from "react";
import DescBanner from "../../components/molecules/descBanner";
import Form from "./form";

const Index = () => {
  return (
    <div className="bg-[#035655] h-screen flex items-center justify-center">
      <div className="mr-[200px]">
        <DescBanner />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Index;
