import { ToastContainer } from "react-toastify";
import { SuccessToastify } from "../../../../../Core/Utils/Toastifies/SuccessToastify.Utils.js";
import { pageUrl } from "../ArticleMainContents.jsx";

const ArticleSharing = () => {
  return (
    <div className="text-left flex-row-all-center justify-end select-none">
      <ToastContainer />
      <p className="text-xs ml-2 text-gray-400">
        این مقاله را با دوستان خود به اشتراک بگذارید
      </p>
      <div className="flex-row-all-center flex-nowrap  justify-end  rounded-lg border-2 border-solid border-gray-100">
        <p className="text-sm px-4 text-gray-500 textNoWrap max-w-[300px]">
          {pageUrl}
        </p>
        <div
          className="h-full flex-row-all-center bg-graySilver 
        text-gray-500 w-11  rounded-l-lg cursor-pointer "
          onClick={() => {
            SuccessToastify("لینک مورد نظر با موفقیت کپی شد.");
            navigator.clipboard.writeText(pageUrl);
          }}
        >
          <i className="text-lg top-[2px] relative  fi fi-sr-duplicate"></i>
        </div>
      </div>
    </div>
  );
};
export { ArticleSharing };
