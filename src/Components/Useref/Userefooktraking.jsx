import React, { useEffect, useRef, useState } from "react";

const Userefooktraking = () => {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
  
    useEffect(() => {
      previousInputValue.current = inputValue;
    }, [inputValue]);

 
  return (
    <>
      <h3>Traking data</h3>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <p>first data {inputValue}</p>

      <p>second data trkig {previousInputValue.current}</p>
    </>
  );
};

export default Userefooktraking;
