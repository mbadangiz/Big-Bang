export const CheckBox = ({ text, id, changeHandler, list, htmlId }) => {
  return (
    <div className="mb-2">
      <input
        type="checkbox"
        id={`check${htmlId}`}
        value={id}
        onChange={changeHandler}
        checked={list.includes(Number(id))}
      />
      <label htmlFor={`check${htmlId}`} className="px-3 text-sm cursor-pointer">
        {text}
      </label>
    </div>
  );
};
