import { Field, ErrorMessage } from "formik";

const TextAreaField = ({
  name,
  placeholder,
  extraClasses,
  TextAreaClasses,
}) => {
  return (
    <div className={` mx-auto ${extraClasses}`}>
      <Field
        as="textarea"
        className={`${TextAreaClasses}  p-2  backdrop-blur-md rounded-3xl text-lg my-1 shadow-md`}
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
