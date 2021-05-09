const input = [
    '10 13',
    'BBBBBBBBWBWBW',
    'BBBBBBBBBWBWB',
    'BBBBBBBBWBWBW',
    'BBBBBBBBBWBWB',
    'BBBBBBBBWBWBW',
    'BBBBBBBBBWBWB',
    'BBBBBBBBWBWBW',
    'BBBBBBBBBWBWB',
    'WWWWWWWWWWBWB',
    'WWWWWWWWWWBWB'
    ];
     
    const NM = input
    .shift()
    .split(' ')
    .map(num => parseInt(num));
    const N = NM.shift();
    const M = NM.shift();
    const minArr = [];
     
    const whiteFirst = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW'
    ];
     
    const blackFirst = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB'
    ];
     
    function whiteFirstPaint(y, x) {
    let counter = 0;
     
    for (let i = y; i < y + 8; i++)
    for (let j = x; j < x + 8; j++)
    if (input[i][j] !== whiteFirst[i - y][j - x]) counter++;
     
    return counter;
    }
     
    function blackFirstPaint(y, x) {
    let counter = 0;
     
    for (let i = y; i < y + 8; i++)
    for (let j = x; j < x + 8; j++)
    if (input[i][j] !== blackFirst[i - y][j - x]) counter++;
     
    return counter;
    }
     
    for (let i = 0; i + 7 < N; i++) {
    for (let j = 0; j + 7 < M; j++) {
    minArr.push(whiteFirstPaint(i, j));
    minArr.push(blackFirstPaint(i, j));
    }
    }
     
    console.log(Math.min.apply(null, minArr));


