function flipArgs(fn) {
  return function argumentsReversal(...args) {
    return fn(...args.reverse());
  };
}

export { flipArgs };
