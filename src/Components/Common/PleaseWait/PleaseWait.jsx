import { useEffect } from "react";
import { useState } from "react";
import { GridLoader } from "react-spinners";
const PleaseWait = () => {
  const [counter, setCounter] = useState(1);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (counter < 4) {
        setCounter((prev) => prev + 1);
      } else {
        clearTimeout(timeOut);
        setErr(true);
      }
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [counter]);

  return (
    <div className="w-full h-300 flex-row-all-center flex-col flex-nowrap gap-3">
      {err ? (
        "خطایی رخ داده است لطفا بعدا اقدام کنید"
      ) : (
        <>
          <GridLoader
            color="#406DD5"
            cssOverride={{}}
            loading
            margin={5}
            size={15}
            speedMultiplier={1}
          />
          <p className="text-bluePrimary text-xl f-bold">لطفا منتظر بمانید</p>
        </>
      )}
    </div>
  );
};

export default PleaseWait;
