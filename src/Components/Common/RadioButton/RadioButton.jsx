export const RadioButton = ({
  text,
  id,
  name,
  selectedRadioBtn,
  setSelectedRadioBtn,
}) => {
  return (
    <div className="mb-2">
      <input
        type="radio"
        id={`radio${id}`}
        value={selectedRadioBtn}
        name={name}
        onChange={(e) => {
          setSelectedRadioBtn(id);
          // console.log(e.target.value);
        }}
        checked={Number(selectedRadioBtn) === Number(id)}
      />
      <label htmlFor={`radio${id}`} className="px-3  cursor-pointer ">
        {text}
      </label>
    </div>
  );
};
