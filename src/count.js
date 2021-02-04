import { createContext, useState } from "react";
export const CountContext = createContext();

export const useCount = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  return { count, countUp };
};
