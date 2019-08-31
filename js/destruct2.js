// 객체 배열 할당 => 동일한 key값으로 해체 할당
var o = {p: 42, q: true};
var {p, q} = o;

var {q, p, o = 3} = {p:32, q : 50, p:60}

console.log(p); // 43
console.log(q); // 50