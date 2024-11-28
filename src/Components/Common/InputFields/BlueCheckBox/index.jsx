import { Field } from "formik";

const BlueCheckBox = ({ type, name, labelName }) => {
  return (
    <div className="pb-4 ">
      <Field
        type={type}
        id={name}
        name={name}
        className="cursor-pointer w-[17px] h-[17px]"
      />
      <label
        htmlFor={name}
        className="relative right-[5px] bottom-1 cursor-pointer text-[12px] md:text-[14px]"
      >
        {labelName}
      </label>
    </div>
  );
};

export { BlueCheckBox };
