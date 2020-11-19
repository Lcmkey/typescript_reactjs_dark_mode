import React, { ReactElement, Context, Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import theme, { themeContentInterface } from "./../styles/theme";

interface themeProviderProps {
  // children: ReactNode | ReactChild | ReactChildren;
  children: ReactElement | ReactElement[]
  // children: JSX.Element
}

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

const ThemeContext: Context<defaultContextDataInterface> = createContext<defaultContextDataInterface>(defaultContextData);

const useTheme = (): defaultContextDataInterface => useContext<defaultContextDataInterface>(ThemeContext);

const useEffectDarkMode = (): [themeState, Dispatch<SetStateAction<themeState>>] => {
  const [themeState, setThemeState] = useState<themeState>({
    dark: false,
    hasThemeMounted: false
  });

  useEffect(() => {
    const lsDark: boolean = localStorage.getItem("mode") === "Dark";
    console.log(localStorage.getItem("mode"));

    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }: themeProviderProps): ReactElement => {
  const [themeState, setThemeState]: [themeState, Dispatch<SetStateAction<themeState>>] = useEffectDarkMode();

  const toggle = (): void => {
    const mode: string = themeState.dark ? "Light" : "Dark";

    localStorage.setItem("mode", mode);

    setThemeState({ ...themeState, dark: !themeState.dark });
  };

  const computedTheme: themeContentInterface = themeState.dark ? theme("Dark")! : theme("Light")!;

  const { dark, hasThemeMounted } = themeState;

  if (!hasThemeMounted) {
    return <div />;
  }

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark,
          toggle
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };
