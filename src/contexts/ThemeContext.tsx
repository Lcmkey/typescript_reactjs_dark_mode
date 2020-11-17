import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeName = "light" | "dark";

type ThemeContextType = {
  theme: ThemeName;
  setTheme: (name: ThemeName) => void;
};

type Props = {
  children: React.ReactNode;
};

interface themeContentInterface {
  color: string;
  backgroundColor: string;
}

interface themeInterface {
  [key: string]: themeContentInterface;
}

const themes: themeInterface = {
  light: {
    color: "#343434",
    backgroundColor: "#fefefe",
  },
  dark: {
    color: "#fff",
    backgroundColor: "#3f3f3f",
  },
};

const ThemeContext = createContext<ThemeContextType>(undefined!);

const ThemeProvider = ({ children }: Props) => {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkOS ? "dark" : "light");
  }, []);

  const setTheme = (name: ThemeName) => {
    document.body.style.setProperty("--color", themes[name].color);
    document.body.style.setProperty(
      "--background-color",
      themes[name].backgroundColor,
    );
    
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export {
    ThemeProvider,
    useTheme
}