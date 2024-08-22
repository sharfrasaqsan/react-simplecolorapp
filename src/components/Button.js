import React from "react";

const Button = ({ color, setColor, invertColor, setInvertColor }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        autoFocus
        placeholder="Enter a color"
        id="color-input"
        name="color-input"
      />
      <button onClick={() => setInvertColor(!invertColor)}>Button</button>
    </form>
  );
};

export default Button;
