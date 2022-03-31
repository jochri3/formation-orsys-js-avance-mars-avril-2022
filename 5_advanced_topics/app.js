function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 *
 *   {
 *     2:7,
 *     3:8
 *   }
 */
function memo(func) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = func(args);
    cache[args] = result;
    return result;
  };
}

const fastFibonacci = memo(fibonacci);

fastFibonacci(5);
