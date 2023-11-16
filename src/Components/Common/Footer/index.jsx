import { FooterDetails } from "./FooterDetails/FooterDetails";
import { FooterMap } from "./FooterMap/FooterMap";

const Footer = () => {
  return (
    <footer className="w-full h-max relative border-2 border-solid border-transparent">
      <FooterDetails />
      <FooterMap />
    </footer>
  );
};

export { Footer };
