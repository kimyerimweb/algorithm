const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().fstrim().split("");

const count = input.shift();

for (let i = 0; i < count; i++) {
  const multiple = input.shift().split(" ");
  const textArr = multiple.pop().split("");
  let answer = "";

  textArr.forEach((el) => {
    answer += el.repeat(multiple);
  });

  console.log(answer);
}
