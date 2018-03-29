/*
 * O m�todo entries() retorna um novo objeto Array Iterator
 * que cont�m os pares chave/valor para cada �ndice no array.
 */

var arr  = ['a', 'b', 'c'];
var eArr = arr.entries();
var fArr = arr.entries();

console.log(eArr.next().value);
//[0, "a"]

console.log(eArr.next().value);
//[1, "b"]

console.log(eArr.next().value);
//[2, "c"]

for (let e of fArr) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']