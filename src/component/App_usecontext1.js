import { useState } from "react";
import "../App.css";
import Page from "../Page/Page";
import { ThemeContext } from "../context/ThemeContext";

function Context1() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />;
    </ThemeContext.Provider>
  );
}

export default Context1;
