import React, { useState } from 'react';

const App = () => {
  const [a, setA] = useState("10");
  const ChangeA=()=>{
    a=20
  }
  return (
    <div>{a}</div>
  );
};

export default App;