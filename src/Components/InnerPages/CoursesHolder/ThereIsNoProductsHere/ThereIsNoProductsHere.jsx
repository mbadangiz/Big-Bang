import TNPHImg from "./../../../../Assets/Image/ThereIsNoProducts.png";
const ThereIsNoProductsHere = () => {
  return (
    <div className="w-full text-center">
      <img
        src={TNPHImg}
        alt="there is no products"
        className="w-[320px] mx-auto mt-10"
      />
      <p className="f-bold text-lg text-red-500">
        داده ایی با مشخصات مورد نظر موجود نمی باشد!!!
      </p>
    </div>
  );
};

export { ThereIsNoProductsHere };
