import { createContext, useContext, useState } from "react";

const PassProvider = createContext(null);

function PasswordProvider({ children }) {
  const [passId, setPassId] = useState(null);
  return (
    <PassProvider.Provider value={{ passId, setPassId }}>
      {children}
    </PassProvider.Provider>
  );
}

export default PasswordProvider;

export const useMyPass = () => useContext(PassProvider);
