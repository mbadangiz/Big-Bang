import { FooterDetails } from "./FooterDetails/FooterDetails";
import { FooterMap } from "./FooterMap/FooterMap";

const Footer = () => {
  return (
    <footer className="w-screen h-[608px]">
      <FooterDetails />
      <FooterMap />
    </footer>
  );
};

export { Footer };
