import { Field, ErrorMessage } from "formik";

const BlueInputField = ({ type, name, placeholder, iconClass, isFocused }) => {
  return (
    <div className="w-[370px] h-[90px] m-auto ">
      <div className="border-[3px] border-solid border-bluePrimary w-full h-[45px]  grid grid-cols-9 rounded-full ">
        <i
          className={`${iconClass} text-[25px] mt-[5px] bg-transparent text-center  text-bluePrimary  col-span-1 rounded-s-full`}
        ></i>
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          className="col-span-8 rounded-e-full h-[38px] my-[1px] focus:bg-transparent bg-transparent text-bluePrimary text-[18px] focus:text-textBlack placeholder:text-[20px] placeholder:text-bluePrimary"
        />
      </div>
      <ErrorMessage
        name={name}
        component={"p"}
        className="text-right text-[15px] text-errorColor mr-5 mt-[1px]"
      />
    </div>
  );
};

export { BlueInputField };
