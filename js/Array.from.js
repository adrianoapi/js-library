// Array-like object (arguments) para um Array
function foo(){
    return Array.from(arguments);
}

console.log(foo(1,2,3));
//[1, 2, 3]

var s = new Set(["foo", window, 5]);
console.log(Array.from(s));
//["foo", Window, 5]

var m = new Map([[1,2],[2,4],[4,8]]);
console.log(Array.from(m));
//[Array(2), Array(2), Array(2)]

console.log(Array.from("foo()"));
//["f", "o", "o", "(", ")"]

console.log([1,2,3], x => x + x);
//[1, 2, 3] x => x + x

console.log(Array.from({length: 5}, (v, k) => k));
//[0, 1, 2, 3, 4]