module.exports = function check(string, brackets) {
  const pairs = new Map(brackets);
  const stack = [];
  for (const char of string) {
    if (pairs.get(stack.at(-1)) == char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length == 0;
};
