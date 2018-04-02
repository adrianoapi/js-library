console.log([1, 'a', 3, 'b', 5].copyWithin(0, 2));
//[3, "b", 5, "b", 5]

console.log([1, 'a', 3, 'b', 5].copyWithin(0, 3, 4));
//["b", "a", 3, "b", 5]

console.log([1, 'a', 3, 'b', 5].copyWithin(0, -2, -1));
//["b", "a", 3, "b", 5]

console.log([].copyWithin.call({length: 5, 3 : 1}, 0, 3));
//{0: 1, 3: 1, length: 5}

var i32a = new Int32Array([1, 2, 3, 4, 5]);

console.log(i32a.copyWithin(0, 2));
//Int32Array(5) [3, 4, 5, 4, 5]

console.log([].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4));
//Int32Array(5) [4, 2, 3, 4, 5]