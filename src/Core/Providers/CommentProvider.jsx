import { createContext, useContext, useState } from "react";

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [courseComment, setCourseComment] = useState();
  return (
    <CommentContext.Provider value={{ courseComment, setCourseComment }}>
      {children}
    </CommentContext.Provider>
  );
};

export const useMyComments = () => useContext(CommentContext);

export default CommentProvider;
