/*
 * O método entries() retorna um novo objeto Array Iterator
 * que contém os pares chave/valor para cada índice no array.
 */

var arr  = ['a', 'b', 'c'];
var eArr = arr.entries();

console.log(eArr.next().value);
//[0, "a"]

console.log(eArr.next().value);
//[1, "b"]

console.log(eArr.next().value);
//[2, "c"]