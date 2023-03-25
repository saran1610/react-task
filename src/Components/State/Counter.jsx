import React, { useState } from "react";

function Counter() {
  const [iniVal, setVal] = useState(0);

  function incre() {
    setVal(iniVal + 1);
  }
  function decre() {
    setVal(iniVal <= 0 ? 0 : iniVal - 1);
  }
  function reset() {
    setVal(0);
  }

  return (
    <div>
      <h2>count: {iniVal}</h2>
      <button onClick={incre} >Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>reset</button>

    </div>
  );
}

export default Counter;
