import React, { useState } from "react";
import Box from "./Box";

function App() {
  const [size, setSizes] = useState(100);

  const createBoxStyle = () => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  };
  return (
    <>
      <input
        type="number"
        value={size}
        onChange={(e) => setSizes(e.target.value)}
      />
      <Box createBoxStyle={createBoxStyle} />
    </>
  );
}

export default App;
