const arr = new Array(10001).fill(false);

arr.forEach((el, idx) => {
  let nonSelfNumber =
    idx +
    String(idx)
      .split("")
      .reduce((acc, el) => acc + Number(el), 0);
  arr[nonSelfNumber] = true;
});

let answer = "";

arr.forEach((el, idx) => {
  if (arr[idx] === false) {
    answer += `${idx}\n`;
  }
});

console.log(answer);
