import Image from "next/legacy/image";
import React from "react";
const { Upload } = require("upload-js");
const upload = Upload({ apiKey: "free" });

const UploadButton = () => {
  const onFileSelected = async (event: any) => {
    try {
      const { fileUrl } = await upload.uploadFile(event.target.files[0], {
        onProgress: ({ progress }: any) => console.log(`${progress}% complete`),
      });
      alert(`File uploaded!\n${fileUrl}`);
    } catch (e) {
      alert(`Error!\n${event.message}`);
    }
  };
  return (
    // <button
    //   className="w-[300px] h-[57px] flex items-center justify-center rounded-[15px] mx-auto bg-[#011717] text-white text-[20px] font-[700] font-sulphur-point"
    //   onClick={onFileSelected}
    // >
    //   <Image
    //     src="/assets/images/camera.png"
    //     alt="camera"
    //     width={30}
    //     height={30}
    //     // objectFit="cover"
    //   />
    //   <p className="ml-[30px]">UPLOAD IMAGES</p>
    // </button>

    <input type="file" onChange={onFileSelected} />
  );
};

export default UploadButton;
