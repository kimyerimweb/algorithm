function searchBiggestSquare(arr) {
  //1칸짜리의 경우에는 검사를 못하고 있으니까 그냥 반환한다.
  if (arr.length === 1) {
    return Math.max(...arr);
  }

  if (arr[0].length === 1) {
    for (let i = 0; i < arr.length; i++) {
      return arr[i][0] === 1 ? 1 : 0;
    }
  }

  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[0].length; j++) {
      if (arr[i][j] !== 0) {
        arr[i][j] =
          Math.min(arr[i - 1][j], arr[i][j - 1], arr[i - 1][j - 1]) + 1;
        if (arr[i][j] > max) max = arr[i][j];
      }
    }
  }
  return max ** 2;
}
