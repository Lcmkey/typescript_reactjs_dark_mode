import React from "react";

import { ThemeProvider } from "./../contexts/ThemeContext";
import Home from "./Home";

const App = () => {

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;