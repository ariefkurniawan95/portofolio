import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigate: setCurrentPage,
        goHome: () => setCurrentPage("home"),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);
