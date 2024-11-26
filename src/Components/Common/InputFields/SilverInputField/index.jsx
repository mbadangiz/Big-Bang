import { ErrorMessage, Field } from "formik";

const SilverInputField = ({ name, type, placeholder, extraClasses }) => {
  return (
    <div className={`${extraClasses} md:w-[500px] h-[90px] mx-auto`}>
      <Field
        className="border-4 border-solid border-white text-white bg-gray-300 backdrop-blur-md focus:bg-white focus:border-bluePrimary focus:text-black w-full h-[46px] text-md rounded-full indent-3 shadow-md"
        name={name}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component={"p"}
        className="text-right text-[15px] text-errorColor mr-5 mt-2"
      />
    </div>
  );
};

export { SilverInputField };
