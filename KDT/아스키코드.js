// "문자열".charCodeAt([문자열 자릿수]); -> 문자열을 아스키 코드로
// String.fromCharCode([아스키코드값]); -> 아스키 코드를 문자로

strings.sort((s1, s2) =>
  s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
);
//localeCompare -> 문자열이 뒤에 오는지 앞에 오는지 전체 비교
