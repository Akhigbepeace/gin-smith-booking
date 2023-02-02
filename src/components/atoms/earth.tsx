import Image from "next/image";
import React from "react";

const Earth = () => {
  const earthAbstract = "/assets/earth-abstract.png";
  return (
    <div className="w-[500px]">
      <Image
        src={earthAbstract}
        alt="abstract-earth"
        width="635"
        height="521"
        className="object-cover"
      />
      <p className="text-[#D7B67E] w-[325px]">
        With Our 24/7 operation, get around the world, via our trusted platform.
      </p>
    </div>
  );
};

export default Earth;
