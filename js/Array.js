var frutas = ['Maca', 'Manga', 'Morango', 'Abacate', 'Uva'];

/*
 * Acessar um item (index) do Array
 */
console.log("first => " + frutas[0]);
//first => Maca

console.log("last  => " + frutas[frutas.length - 1]);
//last  => Uva

/*
 * Iterar um Array
 */
frutas.forEach(function(item, indice, array){console.log(item, indice);});
//Maca 0 Manga 1 Morango 2 Abacate 3 Uva 4

/*
 * Adicionar um item ao final do Array
 */
frutas.push('Laranja');
console.log(frutas);
//["Maca", "Manga", "Morango", "Abacate", "Uva", "Laranja"]

/*
 * Remover um item do final do Array
 */
var ultimo = frutas.pop();
console.log(frutas);
// ["Maca", "Manga", "Morango", "Abacate", "Uva"]

/*
 * Remover do início do Array
 */
var ultimo = frutas.shift();
console.log(frutas);
//["Manga", "Morango", "Abacate", "Uva"]

/*
 * Adicionar ao início do Array
 */
var primeiro = frutas.unshift('Pera');
console.log(frutas);
//["Pera", "Manga", "Morango", "Abacate", "Uva"]

/*
 * Procurar o índice de um item na Array
 */
var posicao = frutas.indexOf('Abacate');
console.log(posicao);
//3

/*
 * Remover um item pela posição do índice
 * splice(posicao, quantidade)
 */
var remove = frutas.splice(2, 1);
console.log(frutas);
//["Pera", "Manga", "Abacate", "Uva"]