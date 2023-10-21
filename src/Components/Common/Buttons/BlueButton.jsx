const BlueButton = ({ type, buttonText, isDisabled }) => {
  return (
    <button
      type={type}
      className={
        isDisabled
          ? "btn bg-gradient-to-t cursor-no-drop opacity-50 block mx-auto w-[120px] h-[44px] rounded-full text-[22px] text-white shadow-md pb-2  hover:shadow-inner hover:shadow-blue-900 transform hover:scale-125 transition ease-out duration-300"
          : "btn bg-gradient-to-t from-bluePrimary to-blueSecondary block mx-auto w-[120px] h-[44px] rounded-full text-[22px] text-white shadow-md pb-2  hover:shadow-inner hover:shadow-blue-900 transform hover:scale-125 transition ease-out duration-300"
      }
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
};

export { BlueButton };
