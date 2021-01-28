import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";
import initStore from "./store";
import createReducers from "./reducers";

const CountContext = createContext();

const App = () => {
  const store = initStore();
  const reducers = createReducers(store);

  return (
    <CountContext.Provider value={{ ...store, ...reducers }}>
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
