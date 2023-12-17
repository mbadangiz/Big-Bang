import React from "react";

const RedButton = ({
  iconClass,
  buttonText,
  buttonClasses,
  textClasses,
  clickHandler,
}) => {
  return (
    <button
      type="button"
      onClick={clickHandler}
      className={`${buttonClasses}  bg-red-500 rounded-full shadow-lg shadow-red-500/60 mt-[2px] transform hover:scale-125 ease-out duration-300 hover:shadow-inner hover:shadow-red-800 flex justify-start mx-auto`}
    >
      <i className={`${iconClass} text-white text-[18px] mt-[6px] mr-2`}></i>
      <p className={`${textClasses} text-white mr-1`}>{buttonText}</p>
    </button>
  );
};
export { RedButton };
