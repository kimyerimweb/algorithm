const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

const getHansu = (input) => {
  let result = 0;

  for (let i = 1; i <= input; i++) {
    const currentNumber = String(i);
    if (currentNumber.length === 1) {
      result++;
    } else if (currentNumber.length === 2) {
      result++;
    } else if (currentNumber.length === 3) {
      const firstInterval = Number(currentNumber[0]) - Number(currentNumber[1]);
      const secondInterval =
        Number(currentNumber[1]) - Number(currentNumber[2]);

      if (firstInterval === secondInterval) {
        result++;
      }
    } else {
      return result;
    }
  }

  return result;
};

console.log(getHansu(input));
