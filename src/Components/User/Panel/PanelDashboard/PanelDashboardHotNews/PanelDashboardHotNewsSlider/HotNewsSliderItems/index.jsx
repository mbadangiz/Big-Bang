const HotNewsSliderItems = ({ HotNewsText, HotNewsImage }) => {
  return (
    <>
      <figure className="rounded-[10px] relative shadow shadow-gray-300">
        <img
          className="object-fill rounded-[10px]  w-full h-[270px]"
          src={HotNewsImage}
          alt="User Panel Hot News Picture"
        />
      </figure>
      <figcaption className="w-full h-[60px] absolute bottom-[0px] rounded-b-[10px] backdrop-blur-sm backdrop-brightness-50">
        <p className="text-center text-white leading-9">{HotNewsText}</p>
      </figcaption>
    </>
  );
};

export { HotNewsSliderItems };
