const arr1 = [7,5,10,15,3]
console.log(arr1.sort((a,b)=> a - b)) //숫자 정렬

const arr2 = ['가나다','가나','안녕','?',"오?"]
console.log(arr2.sort()) //[ '?', '가나', '가나다', '안녕', '오?' ] 특문/사전순 정렬

const arr3 = ['A','C','c','a','b']
console.log(arr3.sort()) //[ 'A', 'C', 'a', 'b', 'c' ] 대문자-소문자 정렬

const arr4 = ['aa','가가']
console.log(arr4.sort()) //[ 'aa', '가가' ] 영어-한글 정렬

const arr5 = [[1,5],[6,4],[3,3],[7,9],[1,1]]
console.log(arr5.sort((a,b)=> a[1]-b[1])) //[ [ 1, 1 ], [ 3, 3 ], [ 6, 4 ], [ 1, 5 ], [ 7, 9 ] ] 두번째 원소를 기준으로 오름차순 정렬

const myMap = new Map();
     myMap.set("a", 1);
     myMap.set("b", 7);
     myMap.set("d", 5);
     myMap.set("c", 3); //같은 키 값이면 대체된다 (오브젝트랑 동일)
     console.log(myMap) //Map(4) { 'a' => 1, 'b' => 7, 'd' => 5, 'c' => 3 }
// key를 기준으로 정렬 (비구조화 할당 사용)
let sorted = new Map([...myMap.entries()].sort()); // 키값 사전순 정렬
    console.log(sorted); //Map(4) { 'a' => 1, 'b' => 7, 'c' => 3, 'd' => 5 } 키값 사전 순 
// value를 기준으로 정렬
    sorted = new Map([...myMap.entries()].sort((a, b) => a[1] - b[1]));
    console.log(sorted); //Map(4) { 'a' => 1, 'c' => 3, 'd' => 5, 'b' => 7 }


//혹은 사전순으로 그냥 문자열을 비교할 일이 있을 때는 <(대소비교)로도 비교할 수 있다.
// a < b 라면, b가 사전순으로 뒤에 있다.