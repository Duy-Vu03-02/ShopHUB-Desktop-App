import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState("");

  return (
    <UserContext.Provider value={{ setUserData, userData }}>
      {children}
    </UserContext.Provider>
  );
};
