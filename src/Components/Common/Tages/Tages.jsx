const Tags = ({ text, extraClass }) => {
  return (
    <div
      className={`w-max text-[#333333]/80 cursor-pointer rounded-lg bg-graySilver h-9 flex-row-all-center px-5 py-0 ${extraClass} `}
    >
      #{text}
    </div>
  );
};
export { Tags };
