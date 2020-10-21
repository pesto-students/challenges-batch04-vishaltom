const limitFunctionCallCount = (fn, count) => {
  let fnCallCount = 0;
  return function (...args) {
    if (fnCallCount === count) return null;
    fnCallCount += 1;
    return fn(...args);
  };
};

export { limitFunctionCallCount };
