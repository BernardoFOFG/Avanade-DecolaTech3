// como declarar variáveis

var variavel = "bernardo"; // primeira declaração
variavel = "filipe"; // quando é declarado novamente fora de escopo, o valor é sobrescrito
console.log(variavel);
let variavel2 = "juliano"; // primeira declaração
variavel2 = "roberta"; // quando declarado mais de uma também é sobrescrito, porém dentro de escopo não pode ser declarado mais de uma vez.
console.log(variavel2);

const variavel3 = "oliveira"; // se houver a criação de outra variável utilizando const o erro será inevitável.
console.log(variavel3);

var escopoGlobal = "global";
console.log(escopoGlobal);
