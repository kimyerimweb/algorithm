const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

let number = input;
let i = 1;
while (number > 0) {
  number = number - i;
  const temp = number;
  if (temp <= 0) {
    if (i % 2 === 0) {
      const numerator = i + temp;
      const denominator = i + 1 - numerator;
      console.log(`${numerator}/${denominator}`);
      break;
    } else {
      const denominator = i + temp;
      const numerator = i + 1 - denominator;
      console.log(`${numerator}/${denominator}`);
      break;
    }
  } else {
    i++;
  }
}
