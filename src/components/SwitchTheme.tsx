import React, { memo } from "react";

const SwitchTheme = memo(
  ({
    theme,
    changeThemeEvent,
  }: {
    theme: string;
    changeThemeEvent: () => void;
    // changeThemeEvent: React.MouseEventHandler<HTMLButtonElement>;
  }) => {
    const renderContent = () => {
      const content =
        theme === "dark" ? "Switch to light mode" : "switch to dark mode";

      return content;
    };
    
    return (
      <div>
        <h1>{theme}</h1>
        <button onClick={changeThemeEvent}>{renderContent()}</button>
      </div>
    );
  },
);

export default SwitchTheme;
