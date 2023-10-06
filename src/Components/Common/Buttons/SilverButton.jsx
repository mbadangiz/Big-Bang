const SilverButton = ({ type }) => {
  return (
    <button
      type={type}
      className="btn block mx-auto my-5 w-[118px] h-[44px] rounded-full text-[22px] border-2 border-solid border-gray-200 bg-graySilver text-bluePrimary  shadow-md hover:shadow-inner transform hover:scale-125 hover:bg-blueGray hover:border-blueGray transition ease-out duration-300"
    >
      ثبت
    </button>
  );
};

export { SilverButton };
