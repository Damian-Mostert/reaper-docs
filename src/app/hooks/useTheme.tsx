import React, { createContext, useState, useEffect, useContext } from "react";

// Create the context
const ThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
} | undefined>(undefined);

// Create a custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Create the ThemeProvider component
export const ThemeProvider: React.FC = ({ children }:any) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const t = localStorage.getItem("theme");
    if (!t) {
      localStorage.setItem("theme", theme);
    } else {
      setTheme(t);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
