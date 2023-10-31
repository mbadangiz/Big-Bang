import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Accardion = ({ myClass, Acc_Title }) => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        className="bg-[#D9DDE8] rounded-[8px] mt-3 mb-2 p-3"
      >
        <AccordionHeader onClick={() => handleOpen(1)} className="px-2">
          معرفی دوره
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="bg-[#D9DDE8] rounded-[8px] mb-2 p-3"
      >
        <AccordionHeader onClick={() => handleOpen(2)} className="px-2">
          نصب و راه اندازی
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="bg-[#D9DDE8] rounded-[8px] mb-2 p-3"
      >
        <AccordionHeader onClick={() => handleOpen(3)} className="px-2">
          مفاهیم پایه
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
};

export { Accardion };
