import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("");
  const [invertColor, setInvertColor] = useState(false);
  const [hex, setHex] = useState("");

  return (
    <div className="App">
      <Square
        color={color}
        invertColor={invertColor}
        hex={hex}
      />
      <Button
        color={color}
        setColor={setColor}
        invertColor={invertColor}
        setInvertColor={setInvertColor}
        setHex={setHex}
      />
    </div>
  );
}

export default App;
