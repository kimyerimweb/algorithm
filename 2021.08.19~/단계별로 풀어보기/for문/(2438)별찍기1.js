const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const count = Number(input);

for (let i = 0; i < count; i++) {
  console.log(" ".repeat(count - (i + 1)) + "*".repeat(i + 1));
}
