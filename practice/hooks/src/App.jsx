import React from "react";
import { useState } from "react";

const App = () => {
  const [a, setA] = useState(10);
  const increaseA = () => {
    let b=a+1
    setA(b);
  };
  const decreaseA = () => {
    
    setA(a-1);
  };
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={increaseA}>increament</button>
      <button onClick={decreaseA}>decreament</button>
    </div>
  );
};

export default App;
