import React, { useState } from "react";

import DarkModeSwitch from "./DarkModeSwitch";

const App = () => {
  const [mode, setMode] = useState(false);
  const onChange = () => {
    setMode(!mode);
  }

  return (
    <div style={{ background: "yellowgreen" }}>
      <DarkModeSwitch onChange={onChange} checked={mode} />
    </div>
  );
}

export default App;