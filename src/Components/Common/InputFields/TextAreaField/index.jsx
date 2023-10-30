import { Field, ErrorMessage } from "formik";

const TextAreaField = ({ name, placeholder, extraClasses }) => {
  return (
    <div className={`w-[500px] h-[280px] mx-auto ${extraClasses}`}>
      <Field
        as="textarea"
        className="border-4 border-solid  p-2 border-white text-white bg-gray-300 backdrop-blur-md focus:bg-white focus:border-bluePrimary focus:text-black w-[500px] h-[217px] rounded-3xl text-lg my-1 shadow-md"
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component={"p"}
        className="text-right text-[15px] text-errorColor mr-5"
      />
    </div>
  );
};

export { TextAreaField };
