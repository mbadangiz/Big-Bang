const Test = () => {
  return (
    <div className="w-full h-[500px] bg-slate-500 mt-40 rounded-t-[30px] px-[20px] pt-[10px] relative">
      <div className="w-full h-full bg-slate-900 rounded-t-[40px] relative z-0"></div>
      <div className="xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-4/5 h-300 bg-orange-900  absolute top-0 left-1/2 -translate-x-1/2 z-50">
        1
      </div>
    </div>
  );
};

export default Test;
