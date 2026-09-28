import { createContext, useContext, useState } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#61dafb",
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("light");

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themes[themeName], themeName, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook để component con dùng gọn hơn
export function useTheme() {
  return useContext(ThemeContext);
}
