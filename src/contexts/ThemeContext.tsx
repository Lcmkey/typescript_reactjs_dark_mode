import React, { FC, createContext, useContext, useEffect, useState } from "react";
import {ThemeProvider　as EmotionThemeProvider　} from "@emotion/react";
import theme, { themeContentInterface } from "./../styles/theme";


interface themeState {
  dark: boolean;
  hasThemeMounted: boolean;
}

interface defaultContextDataInterface {
  dark: boolean;
  toggle: () => void;
}

const defaultContextData: defaultContextDataInterface = {
  dark: false,
  toggle: () => { }
};

const ThemeContext: React.Context<defaultContextDataInterface> = createContext(defaultContextData);
/**
 * Return Type??????????
 */
const useTheme = () => useContext(ThemeContext);

const useEffectDarkMode = (): [themeState, React.Dispatch<React.SetStateAction<themeState>>] => {
  const [themeState, setThemeState] = useState<themeState>({
    dark: false,
    hasThemeMounted: false
  });

  useEffect(() => {
    const lsDark = localStorage.getItem("mode") === "Dark";
    console.log(localStorage.getItem("mode"));
    

    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider: FC = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode() as [themeState, React.Dispatch<React.SetStateAction<themeState>>];

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = (): void => {
    const mode: string = themeState.dark ? "Light" : "Dark";
    
    localStorage.setItem("mode", mode);

    setThemeState({ ...themeState, dark: !themeState.dark });
  };

  const computedTheme: themeContentInterface = themeState.dark ? theme("Dark")! : theme("Light")!;
  
  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };
