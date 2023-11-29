import { useMyCourses } from "../../../Core/Providers/CourseListProvider";

const SearchBar = ({ setData, searchApiFunc, placeholder, getAllDataList }) => {
  const searchHandler = async (e) => {
    const inputVal = e.target.value;
    if (inputVal) {
      const results = await searchApiFunc(e.target.value);
      setData(results);
    } else {
      const results = await getAllDataList();
      setData(results);
    }
  };
  return (
    <div className="w-full h-40 flex-row-all-center relative bottom-20 ">
      <div className="w-450 h-12  rounded-full relative">
        <input
          className="w-full h-full shadow-lg shadow-black/10 rounded-full bg-white border-2 border-solid border-grayDetail/20 pr-4 pl-12 text-sm 
          focus:border-bluePrimary transition-all duration-150"
          type="text"
          onChange={searchHandler}
          placeholder={placeholder}
        />
        <i
          onClick={searchHandler}
          className="fi fi-br-search absolute top-[53%] left-4 -translate-y-1/2 text-xl text-grayDetail/30"
        ></i>
      </div>
    </div>
  );
};

export default SearchBar;
// (e) => {
//   setData(
//     data.filter((items) =>
//       items.articleTitle.toLowerCase().includes(e.target.value)
//     )
//   );
// }
