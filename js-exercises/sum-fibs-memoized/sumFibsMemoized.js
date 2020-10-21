function sumFibs(num) {
  let start = 0;
  let next = 1;
  let current;
  let sumOdd = 0;
  for (let i = 0; i <= num; i += 1) {
    current = start + next;
    start = next;
    next = current;
    if (current % 2 !== 0 && current <= num) {
      sumOdd = current + sumOdd;
    }
  }
  return sumOdd + 1;
}

function cacheFunction(fn) {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

export { sumFibs, cacheFunction };
