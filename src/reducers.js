export default function createReducers(store) {
  return {
    countUp: () => {
      const { count, setCount } = store;
      setCount(count + 1);
    },
  };
}
