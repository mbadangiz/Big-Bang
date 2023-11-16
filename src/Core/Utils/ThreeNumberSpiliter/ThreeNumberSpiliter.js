export const ThreeNumberSpiliter = (num) => {
  const number = new Intl.NumberFormat("en-US", { style: "decimal" }).format(
    num
  );
  return number;
};
