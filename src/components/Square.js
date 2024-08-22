import React from "react";
import "../App.css";

const Square = ({ color, invertColor }) => {
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
      </div>
    </section>
  );
};

Square.defaultProps = {
  color: "Empty Color Value",
};

export default Square;
