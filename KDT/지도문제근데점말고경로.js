const solution = (dirs) => {
  let coordinates = {
    x: 0,
    y: 0,
  };

  //어차피 점이 중요한건 아니니까 길을 0.5라고 놓는다.

  return dirs.split("").reduce((acc, dir) => {
    let { x, y } = coordinates;

    switch (dir) {
      case "U":
        if (y === 5) break;
        acc.add(`${x}/${y + 0.5}`);
        coordinates.y++;
        break;
      case "D":
        if (y === -5) break;
        acc.add(`${x}/${y - 0.5}`);
        coordinates.y--;
        break;
      case "R":
        if (x === 5) break;
        acc.add(`${x + 0.5}/${y}`);
        coordinates.x++;
        break;
      case "L":
        if (x === -5) break;
        acc.add(`${x - 0.5}/${y}`);
        coordinates.x--;
        break;
    }

    return acc;
  }, new Set()).size;
};
