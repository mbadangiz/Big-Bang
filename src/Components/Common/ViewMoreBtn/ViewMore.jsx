import { Link } from "react-router-dom";

const ViewMoreBtn = ({ to, text }) => {
  return (
    <Link to={to}>
      <div
        className="w-max h-10 my-7 mx-auto px-8 flex-row-all-center bg-bluePrimary text-white 
          rounded-full hover:translate-y-[-10px] transition-all duration-100"
      >
        {text}
      </div>
    </Link>
  );
};

export { ViewMoreBtn };
