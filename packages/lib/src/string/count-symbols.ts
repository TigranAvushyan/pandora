export const countSymbols = (value: string, symbol: string) => {
  if (symbol.length !== 1) {
    throw new Error("Symbol must be a single character");
  }
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] === symbol) {
      count++;
    }
  }
  return count;
};
