import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

// User Profile Picture import
import UserProfilePicture from "../../../../../Assets/Images/Panel/User/UserProfilePicture/UserProfilePicture.jpg";

import Style from "./PanelEditProfileUserProfilePicture.module.css";

const PanelEditProfileUserProfilePicture = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <div className="col-span-4"></div>
      <div className="w-full h-[250px] col-span-4">
        <figure
          className={`${Style.EditProfilePictureUserFigure}  border-[5px] border-solid border-bluePrimary w-[170px] h-[170px] relative rounded-full mx-auto my-2`}
        >
          <img
            className="w-[145px] h-[145px] rounded-full mx-auto my-[7px] shadow-lg shadow-gray-400"
            src={UserProfilePicture}
            alt="User Profile Picture"
          />

          <div className="opacity-0 hover:opacity-100 transition-opacity ease-out duration-300  absolute top-2 right-2 w-[145px] h-[145px] bg-black/40 backdrop-blur-md rounded-full text-center text-[12px] text-gray-500 ">
            <div
              {...getRootProps()}
              className="rounded-full w-full py-12 h-full"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-white">
                  لطفا فایل ها را اینجا قرار دهید . . .{" "}
                </p>
              ) : (
                <p className="text-white">
                  برخی از فایل‌ها را به اینجا بکشید یا رها کنید یا برای انتخاب
                  فایل‌ها کلیک کنید
                </p>
              )}
            </div>
          </div>
        </figure>
        <button className="w-[210px] h-[35px] bg-red-500 rounded-full shadow-lg shadow-red-500/60 py-[5px] indent-2 flex mx-auto mt-6 transform hover:scale-125 ease-out duration-300 hover:shadow-inner hover:shadow-red-800">
          <i className="fi fi-rr-trash text-white text-[20px] "></i>
          <p className=" leading-[-10px]  text-white">پاک کردن عکس پروفایل</p>
        </button>
      </div>
      <div className="col-span-4 "></div>

      <div className="col-span-4"></div>
      <div className="col-span-4"></div>

      <div className="col-span-4"></div>
    </>
  );
};

export { PanelEditProfileUserProfilePicture };
