/*
 * Tratamento de erro
 */

// Capturando o erro usando uma construção de try...catch:
try {
  throw new Error('Oooops!');
} catch (e) {
  console.log((e.name + ': ' + e.message));
}

// Capturando apenas tipos de erro específicos
try {
  Objeto.Metodo();
} catch (e) {
  if (e instanceof EvalError) {
    alert(e.name + ': ' + e.message);
  } else if (e instanceof RangeError) {
    alert(e.name + ': ' + e.message);
  }
  // ... etc
}

// Tratando erro
function MeuErro(message){
    this.name = 'Meu Erro';
    this.message = message || 'Mensagem de erro padrão';
    this.stack = (new Error()).stack;
}

MeuErro.prototype = Object.create(MeuErro.prototype);
MeuErro.prototype.construtor = MeuErro;

try {
    throw new MeuErro();
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}

// Subscrevendo a mensagem
try {
    throw new MeuErro('Mensagem customizada');
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}