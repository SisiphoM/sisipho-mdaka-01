import React, { useState } from "react";
import "./styles.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      const result = new Function("return " + input)();
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "="].map((char) => (
          <button
            key={char}
            className={
              char === "=" ? "equal" :
              ["+", "-", "*", "/"].includes(char) ? "operator" :
              "number"
            }
            onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
          >
            {char}
          </button>
        ))}
        <button onClick={clearInput} className="clear">C</button>
      </div>
    </div>
  );
}
