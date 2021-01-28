import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";

const CountContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider value={{ count, countUp }}>
      <Hello />
    </CountContext.Provider>
  );
};

const Hello = () => {
  const { count, countUp } = useContext(CountContext);
  return (
    <div>
      <div>Hello React!!!</div>
      <div>{count}</div>
      <button onClick={countUp}>Count Up</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
