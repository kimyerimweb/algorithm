const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().toUpperCase().split("");
const obj = {};

input.forEach((el) => {
  const charcodeat = el.charCodeAt(0);
  if (charcodeat >= 65 && charcodeat <= 91) {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }
});

const max = Math.max(...Object.values(obj));
const arr = [];

for (const prop in obj) {
  if (max === obj[prop]) {
    arr.push(prop);
  }
}

if (arr.length > 1) {
  console.log("?");
} else {
  console.log(arr[0]);
}
