function duplicateLetters(...args) {
  let max = 0;
  const charMap = {};
  args.forEach((string) => {
    for (const char of string) {
      if (charMap[char]) charMap[char] += 1;
      else charMap[char] = 1;
    }
  });

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
    }
  }

  return max === 1 ? false : max;
}

export { duplicateLetters };
