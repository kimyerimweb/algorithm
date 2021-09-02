const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

const getConstructor = (num) => {
  for (let i = 1; i <= num; i++) {
    const sum =
      i +
      String(i)
        .split("")
        .map((el) => Number(el))
        .reduce((acc, el) => acc + el, 0);

    if (sum === num) {
      return i;
    }
  }

  return 0;
};

console.log(getConstructor(input));
