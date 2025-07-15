import React, { createContext, useContext, useState } from "react";

export type NavbarStyle = "default" | "blend" | "solid" | "transparent";

interface NavbarStyleContextProps {
  navbarStyle: NavbarStyle;
  setNavbarStyle: (style: NavbarStyle) => void;
}

const NavbarStyleContext = createContext<NavbarStyleContextProps | undefined>(undefined);

export const NavbarStyleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navbarStyle, setNavbarStyle] = useState<NavbarStyle>("default");
  return (
    <NavbarStyleContext.Provider value={{ navbarStyle, setNavbarStyle }}>
      {children}
    </NavbarStyleContext.Provider>
  );
};

export const useNavbarStyle = () => {
  const context = useContext(NavbarStyleContext);
  if (!context) throw new Error("useNavbarStyle must be used within a NavbarStyleProvider");
  return context;
}; 