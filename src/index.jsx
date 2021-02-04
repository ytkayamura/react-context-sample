import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { CountContext, useCount } from "./count";

const App = () => {
  return (
    <CountContext.Provider value={useCount()}>
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
