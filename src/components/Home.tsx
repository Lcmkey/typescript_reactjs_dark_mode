import React, { useCallback } from "react";

import { useTheme } from "./../contexts/ThemeContext";
import SwitchTheme from "./SwitchTheme";
import Text from "./Text";

const Home = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeEvent = useCallback((): void => {
    const mode = theme === "dark" ? "light" : "dark";
    setTheme(mode);
  }, [theme, setTheme]);

  return (
    <div>
        <SwitchTheme theme={theme} changeThemeEvent={changeThemeEvent} />
        <Text />
    </div>
  );
};

export default Home;
