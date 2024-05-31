import React, { useState, useEffect } from "react";
import "./App.css";

const useCounter = () => {
  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default App;
