import MobileSubmitBtn from "components/atoms/mobileCTALink";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type MobileCTApageProps = {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  heading: string;
  desc: string;
  slider: ReactNode;
};

const MobileCTApage = (props: MobileCTApageProps) => {
  const { icon, heading, desc, iconWidth, iconHeight, slider } = props;

  return (
    <div className="flex flex-col items-center justify-between text-center ">
      <div>
        <div className="my-[75px]">
          <Image src={icon} alt="icon" width={iconWidth} height={iconHeight} />
        </div>
        <div>
          <h1 className="font-the-nautigal text-[48px] font-[700] text-[#003B3B] mb-[26px] ">
            {heading}
          </h1>
          <p className="font-sulphur-point font-[300] text-[16px] w-[230px] text-justify ">
            {desc}
          </p>
        </div>
      </div>

      <div className="mt-[100px]">
        <MobileSubmitBtn href="/login" title="LOGIN" />

        <div className="text-[#011717] font-sulphur-point text-[14px] mt-[17px] ">
          <Link href="/signup" passHref legacyBehavior>
            Create Account
          </Link>
        </div>

        <div className="flex justify-between items-center my-[24px]  ">
          {slider}

          <div className="text-[#011717] font-sulphur-point text-[14px] mt-[17px] ">
            <Link href="/login" legacyBehavior passHref>
              Skip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCTApage;
