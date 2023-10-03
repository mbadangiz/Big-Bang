import { Navbar } from "../../Common/Navbar/Navbar";
import { Footer } from "../../Common/Footer/Footer";
import { Outlet } from "react-router-dom";

const InnerPagesLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export { InnerPagesLayout };
