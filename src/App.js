import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("");
  const [invertColor, setInvertColor] = useState(false);

  return (
    <div className="App">
      <Square color={color} invertColor={invertColor} />
      <Button
        color={color}
        setColor={setColor}
        invertColor={invertColor}
        setInvertColor={setInvertColor}
      />
    </div>
  );
}

export default App;
