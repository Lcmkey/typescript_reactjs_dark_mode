import React, { FC, ReactElement } from "react";
import styled from "@emotion/styled";
import { useTheme } from "./../contexts/ThemeContext";
import { themeContentInterface } from "./../styles/theme";
// import { css } from '@emotion/react'

// type CssType = typeof css

type StyleProps = {
  theme?: themeContentInterface;
};

// export interface IStyleFunction<P = {}> {
//   ( arg0: { theme: themeContentInterface } & P): ReturnType<CssType> | false | null
// }

const Wrapper = styled.div<StyleProps>`
  background: ${({ theme }) => theme.background};
  width: 95vw;
  height: 95vh;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
  transition: background 1000ms linear, color 1000ms linear;
  h1 {
    color: ${({ theme }) => theme.body};
  }
`;

// interface Props {
//   children: JSX.Element[] | JSX.Element
// }

const App: FC = () => {
  const themeState = useTheme();

  /**
   * Title
   */
  const renderTitle = (): ReactElement => {
    const content: string = themeState.dark ? "DarkMode" : "Light Mode";

    return <h1>{content}</h1>;
  }

  /**
   * Content
   */

  const renderContent = (): ReactElement => {
    return (
      <div>
        <button onClick={() => themeState.toggle()}>
          {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    );
  }

  return (
    <Wrapper>
      {/* Title */}
      {renderTitle()}

      {/* Content */}
      {renderContent()}
    </Wrapper>
  );
};

export default App;
