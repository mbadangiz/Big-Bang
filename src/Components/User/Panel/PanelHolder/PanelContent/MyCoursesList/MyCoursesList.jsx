import React from "react";
import { TableList } from "./TableList/TableList";

const MyCoursesList = () => {
  return (
    <>
      <h1 className="p-3">لیست دوره های من</h1>
      <TableList />
    </>
  );
};

export { MyCoursesList };
