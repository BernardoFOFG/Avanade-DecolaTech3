// For;
// For/in;
// For/of;
// While;
// Do/while

//For 

let array = ['valor1','valor2','valor3','valor4','valor5','valor6']
let object = {
  propriedade1: 'valor1',
  propriedade2: 'valor2',
  propriedade3: 'valor3',
}

for(i = 0; i < array.length; i++) {
  console.log(i)
}

//For/in

for (let i in array) {
  console.log(i) // transforma em string
}

// For/off

for(i of array) {
  console.log(i) // imprime o valor do array
}

// while

var a = 0;
while(a < 10) {
  a++
  console.log(a)
}

// Do/While
var b = 0;
do {
  b++
  console.log(b)
} while(b < 10)