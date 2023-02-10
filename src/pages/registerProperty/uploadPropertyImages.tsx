import UploadButton from "components/atoms/uploadButton";
import PropertyRegButton from "components/molecules/propertyRegButton";
import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";
import Footer from "./footer";
import PropertyHeader from "./header";

const UploadPropertyImages = () => {
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Register Property | Upload Image</title>
      </Head>

      <PropertyHeader />

      <div className=" w-[1100px] mx-auto ">
        <h2 className="font-sulphur-point mt-[70px] font-[400] text-[25px] ">
          UPLOAD PROPERTY IMAGES
        </h2>

        <div className="flex flex-col items-center justify-center mt-[60px] ">
          <h2 className="font-sulphur-point font-[700] text-[30px]">
            Upload At Least Five [5] Images
          </h2>
          <p className="font-sulphur-point font-[300] text-[25px] mt-[5px] mb-[60px] capitalize ">
            the more you upload, the more likely you are to get bookings.
          </p>

          <div className="w-[600px] mb-[150px] ">
            <div className=" bg-[#71AAA9] relative rounded-[30px] h-[400px]  ">
              <div className="w-full flex flex-col items-center absolute bottom-[20px] ">
                <Image
                  src="/assets/images/addImage.png"
                  width={150}
                  height={150}
                />

                <button className="w-[300px] h-[57px] flex items-center justify-center rounded-[15px] mx-auto bg-[#011717] text-white text-[20px] font-[700] mt-[100px] font-sulphur-point">
                  <Image
                    src="/assets/images/camera.png"
                    alt="camera"
                    width={30}
                    height={30}
                  />
                  <p className="ml-[30px]">UPLOAD IMAGES</p>
                </button>
              </div>
            </div>

            <div className=" flex justify-between mt-[40px]  ">
              <div className="bg-[#71AAA9] p-[20px_35px] rounded-[20px] ">
                <Image
                  src="/assets/images/uploadIcon.png"
                  width={35}
                  height={35}
                />
              </div>
              <div className="bg-[#71AAA9] p-[20px_35px] rounded-[20px] ">
                <Image
                  src="/assets/images/uploadIcon.png"
                  width={35}
                  height={35}
                />
              </div>
              <div className="bg-[#71AAA9] p-[20px_35px] rounded-[20px] ">
                <Image
                  src="/assets/images/uploadIcon.png"
                  width={35}
                  height={35}
                />
              </div>
              <div className="bg-[#71AAA9] p-[20px_35px] rounded-[20px] ">
                <Image
                  src="/assets/images/uploadIcon.png"
                  width={35}
                  height={35}
                />
              </div>
              <div className="bg-[#71AAA9] p-[20px_35px] rounded-[20px] ">
                <Image
                  src="/assets/images/uploadIcon.png"
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PropertyRegButton href="./pricing" />
      <Footer />
    </>
  );
};

export default UploadPropertyImages;
