import React, { useState, useContext, createContext } from "react";

const DarkModeContext = createContext({});
const FilterContext = createContext({});

export const NavBarProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState("light");
  const [propertyTypeToggle, setPropertyTypeToggle] = useState("all");

  const value = { darkMode, setDarkMode };
  const valueFilter = { propertyTypeToggle, setPropertyTypeToggle };

  return (
    <DarkModeContext.Provider value={value}>
      <FilterContext.Provider value={valueFilter}>
        {children}
      </FilterContext.Provider>
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(DarkModeContext);
export const useFilterContext = () => useContext(FilterContext);
export default useFilterContext;
