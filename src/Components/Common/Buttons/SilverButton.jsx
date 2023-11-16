const SilverButton = ({ type, buttonText, ClickHandler }) => {
  return (
    <button
      onClick={ClickHandler}
      type={type}
      className="btn block mx-auto mt-1 w-[118px] h-[44px] rounded-full text-[22px] leading-[30px] border-2 border-solid border-gray-200 bg-graySilver text-bluePrimary  shadow-md hover:shadow-inner transform hover:scale-125 hover:bg-blueGray hover:border-blueGray transition ease-out duration-300"
    >
      {buttonText}
    </button>
  );
};

export { SilverButton };
