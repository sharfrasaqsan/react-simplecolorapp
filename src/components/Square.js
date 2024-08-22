import React from "react";
import "../App.css";

const Square = ({ color, invertColor, hex }) => {
  return (
    <section className="square-section">
      <div
        className="square"
        style={{
          backgroundColor: color ? color : "white",
          color: invertColor ? "white" : "black",
        }}
      >
        <p>{color ? color : "Empty Value"}</p>
        <p>{hex ? hex : null}</p>
      </div>
    </section>
  );
};

Square.defaultProps = {
  color: "Empty Color Value",
};

export default Square;
