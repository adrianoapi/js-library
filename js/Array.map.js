var myApp = new Map();
var keyString = "minha string",
        keyObj = {},
        keyFunc = function () {};

myApp.set(keyString, "Valor associado a 'uma string'");
myApp.set(keyObj,    "Valor associado a um objeto"   );
myApp.set(keyFunc,   "Valor associado a uma funcao"  );

console.log(myApp.size);

console.log(myApp.get(keyString));
console.log(myApp.get(keyObj));
console.log(myApp.get(keyFunc));

console.log(myApp.get("uma string"));