function solution(arr) {
  const set = new Set(arr);
  const answer = [...set];
  return answer;
}

//배열을 forEach로 돌려가면서 중복을 제거하려고 하면 forEach앞에 달린 배열은 바꿀 수 없다.
//for으로 원소를 제거하면 인덱스가 생각했던 것처럼 동작하지 않는다.
//그럴 때는 객체를 이용하는게 낫다
