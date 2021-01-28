import React, { createContext, useContext, useState } from "react";

export default function initStore() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}
