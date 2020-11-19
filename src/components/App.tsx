import React, { FC } from "react";
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

const App: FC = () => {
  const themeState = useTheme();

  return (
    <Wrapper>
      <h1>Dark Mode example</h1>
      <div>
        <button onClick={() => themeState.toggle()}>
          {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </Wrapper>
  );
};

export default App;
