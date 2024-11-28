import { Field, ErrorMessage } from "formik";

const BlueInputField = ({
  type,
  name,
  placeholder,
  iconClass,
  isFocused,
  isDisabled,
}) => {
  return (
    <div className="w-[260px] sm:w-[340px] md:w-[370px] h-[78px] mx-auto my-[6px] relative z-[1px]">
      <div
        className={`${
          isDisabled
            ? "border-[3px] border-solid border-bluePrimary/50"
            : "border-[3px] border-solid border-bluePrimary "
        } w-full h-[45px]  grid grid-cols-9 rounded-full `}
      >
        <i
          className={`${iconClass} text-[18px] md:text-[25px] mt-2 md:mt-[5px] bg-transparent text-center  text-bluePrimary  col-span-1 rounded-s-full`}
        ></i>
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          className={` col-span-8 rounded-e-full h-[38px]  relative top-[1px] focus:bg-transparent bg-transparent text-bluePrimary text-[17px] focus:text-textBlack placeholder:text-[15px] md:placeholder:text-[20px] placeholder:text-bluePrimary`}
          disabled={isDisabled}
        />
      </div>
      <ErrorMessage
        name={name}
        component={"p"}
        className="text-right text-[10px] text-errorColor mr-5 mt-[1px]"
      />
    </div>
  );
};

export { BlueInputField };
