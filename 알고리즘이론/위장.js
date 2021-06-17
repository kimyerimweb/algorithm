function solution(clothes) {
    return Object.values(clothes.reduce((obj,t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1
        return obj
    },{})).reduce((acc,el) => acc * (el + 1),1) -1
}