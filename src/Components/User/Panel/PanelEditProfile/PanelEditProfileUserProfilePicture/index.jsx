import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { SuccessToastify } from "../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";

// User Profile Picture import
import UserProfilePicture from "../../../../../Assets/Images/Panel/User/UserProfilePicture/UserProfilePicture.png";

import Style from "./PanelEditProfileUserProfilePicture.module.css";
import { useSelector } from "react-redux";
import { onSetFormData } from "../../../../../Core/Utils/onSetFormData/onSetFormData";
import { AddImageProfile } from "../../../../../Core/Services/Api/UserPanel/AddImageProfile";
import { ErrorToastify } from "../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";
import { useState } from "react";
import { onSetEditProfileImageFormData } from "../../../../../Core/Utils/onSetEditProfileImageFormData/onSetEditProfileImageFormData";
import { DeleteImageProfile } from "../../../../../Core/Services/Api/UserPanel/DeleteImageProfile";
import { onSelectEditProfileImageFormData } from "../../../../../Core/Utils/onSelectEditProfileImageFormData/onSelectEditProfileImageFormData";
import { SelectImageProfile } from "../../../../../Core/Services/Api/UserPanel/SelectImageProfile";
import { onDeleteEditProfileImageFormData } from "../../../../../Core/Utils/onDeleteEditProfileImageFormData/onDeleteEditProfileImageFormData";
import { useNavigate } from "react-router-dom";

const PanelEditProfileUserProfilePicture = () => {
  const userInfo = useSelector((reducer) => reducer.user.userInformations);

  const navigate = useNavigate();

  const [getDeleteUserImages, setGetDeleteUserImages] = useState([]);

  const [listDeleteImages, setListDeleteImages] = useState([]);

  const handleDeleteCheckbox = (event) => {
    const checked = event.target.checked;
    const value = String(event.target.value);
    if (checked) {
      setListDeleteImages([...listDeleteImages, value]);
    } else {
      setListDeleteImages(listDeleteImages.filter((items) => items !== value));
    }
  };

  const onDeleteUserProfileImage = async (value) => {
    console.log(value);

    try {
      const deleteImageData = onDeleteEditProfileImageFormData(value);

      const result = await DeleteImageProfile(deleteImageData);

      if (result.success === true) {
        return SuccessToastify(result.message);
      } else if (result.success === false) {
        return ErrorToastify(result.message);
      }
    } catch (error) {
      return false;
    }
  };

  const onDeleteUserProfileImages = (value) => {
    value.map(async (item, index) => {
      try {
        const imageData = onDeleteEditProfileImageFormData(item);
        console.log(imageData);

        const result = await DeleteImageProfile(imageData);

        if (result.success === true) {
          SuccessToastify(result.message);
          setTimeout(() => {
            navigate("/User/Panel/Dashboard");
          }, 2000);
        } else if (result.success === false) {
          return ErrorToastify(result.message);
        }
      } catch (error) {
        return false;
      }
    });
  };

  const onSelectUserProfileImage = async (value) => {
    try {
      const selectImageData = onSelectEditProfileImageFormData(value);
      const result = await SelectImageProfile(selectImageData);

      if (result.success === true) {
        SuccessToastify(result.message);
        setTimeout(() => {
          navigate("/User/Panel/Dashboard");
        }, 2000);
      } else if (result.success === false) {
        return ErrorToastify(result.message);
      }
    } catch (error) {
      return false;
    }
  };

  // console.log(userInfo);
  const onDrop = useCallback((acceptedFiles) => {
    {
      acceptedFiles.map(async (file) => {
        try {
          const imageData = onSetEditProfileImageFormData(file);

          const result = await AddImageProfile(imageData);

          if (result.success === true) {
            return SuccessToastify(result.message);
          } else if (result.success === false) {
            return ErrorToastify();
          }

          console.log(result);
        } catch (error) {
          return false;
        }
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <div className="col-span-4"></div>
      <div className="w-full h-[190px] relative z-50 col-span-4">
        <figure
          className={`${Style.EditProfilePictureUserFigure}  border-[5px] border-solid border-bluePrimary w-[170px] h-[170px] relative rounded-full mx-auto my-2`}
        >
          <img
            className="w-[145px] h-[145px] rounded-full mx-auto my-[7.5px] shadow-lg shadow-gray-400"
            src={
              userInfo.currentPictureAddress
                ? userInfo.currentPictureAddress
                : UserProfilePicture
            }
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
        <div
          className={`${Style.EditProfilePictureUserPicturesList} w-full h-[410px] rounded-[10px] bg-gray-100 border-2 border-solid border-gray-300 shadow-2xl shadow-black/40`}
        >
          <div className="w-full h-[350px] overflow-y-scroll rounded-t-[10px] flex-row-all-center content-start justify-start px-[14px] py-2">
            {userInfo.userImage.map((item, index) => {
              return (
                <figure
                  key={index}
                  className={`${Style.EditProfileListImagesFigure} w-[72px] h-[72px] mx-[4px] my-[4px] rounded-md hover:shadow-lg hover:shadow-black/60 hover:transition relative`}
                >
                  <div
                    className={`${Style.EditProfileListImagesDivDetails} w-full h-[full] px-1 absolute bottom-0 z-50 backdrop-blur-sm flex justify-between bg-black/50`}
                  >
                    <button
                      type="button"
                      onClick={() => onDeleteUserProfileImage(item.id)}
                      className="w-[22px] h-[22px] bg-red-500 rounded-full shadow-lg shadow-red-500/60 mt-[2px] transform hover:scale-125 ease-out duration-300 hover:shadow-inner hover:shadow-red-800"
                    >
                      <i className="fi fi-rr-trash text-white text-[15px] "></i>
                    </button>{" "}
                    <button
                      type="button"
                      onClick={() => onSelectUserProfileImage(item.id)}
                      className="w-[22px] h-[22px] bg-bluePrimary rounded-full shadow-lg shadow-bluePrimary mt-[2px] transform hover:scale-125 ease-out duration-300 hover:shadow-inner hover:shadow-bluePrimary"
                    >
                      <i className="fi fi-rr-cursor-finger text-white text-[15px] "></i>
                    </button>{" "}
                  </div>
                  <input
                    type="checkbox"
                    className="absolute z-50 top-1 right-1 w-[18px] h-[18px]"
                    checked={listDeleteImages.includes(item.id)}
                    value={String(item.id)}
                    onChange={handleDeleteCheckbox}
                  />
                  <img
                    src={item.puctureAddress}
                    alt={`${item.pictureName}`}
                    className={`${
                      item.puctureAddress === userInfo.currentPictureAddress
                        ? "border-[2.5px] border-solid border-green-500"
                        : null
                    } w-full h-full rounded-md relative border-2 border-solid border-gray-400`}
                  />
                  {item.puctureAddress === userInfo.currentPictureAddress ? (
                    <i className="fi fi-sr-check-circle absolute top-[4px] left-[4px] text-green-500"></i>
                  ) : null}
                </figure>
              );
            })}
          </div>

          <div className="w-full h-[100px]">
            {listDeleteImages.length > 0 ? (
              <button
                type="button"
                className="w-[190px] h-[35px] bg-red-500 rounded-full shadow-lg shadow-red-500/60 mt-[2px] transform hover:scale-125 ease-out duration-300 hover:shadow-inner hover:shadow-red-800 flex justify-start mx-auto"
                onClick={() => onDeleteUserProfileImages(listDeleteImages)}
              >
                <i className="fi fi-rr-trash text-white text-[18px] mt-[6px] mr-2"></i>
                <p className="text-white text-[12.5px] mr-1 mt-2">
                  حذف عکس های انتخاب شده
                </p>
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="col-span-4 "></div>

      <div className="col-span-4"></div>
      <div className="col-span-4"></div>

      <div className="col-span-4"></div>
    </>
  );
};

export { PanelEditProfileUserProfilePicture };
