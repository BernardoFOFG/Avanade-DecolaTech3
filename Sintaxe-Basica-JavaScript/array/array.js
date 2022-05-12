//forEach() - Itera um array;
//push()  Adiciona um item no final do array;
//pop() Remove o ultimo item do array;
//shift() Remove o primeiro item do array;
//unshift() Adiciona um tem no inicio do array;
//indexOf() Retorna o índice de um valor;
//splice() Remove ou Substitui um item pelo índice;
//slice() Retorna uma parte do array;
 
let array = ['string', 1, true, ['array1'],['array2'],['array3'],['array4'],['array5']]

console.log(array[0])

// forEach

array.forEach(function(item, index){
  console.log(item, index)
})

// push

array.push('novo item'); // qualquer tipo
  console.log(array)

// pop

array.pop();
console.log(array)

//shift
array.shift()
console.log(array);

//unshift

array.unshift('novo item no inicio');
console.log(array)

//indexOf
console.log(array.indexOf(true))

//splice
array.splice(0, 3)
console.log(array)

//slice
let novoArray = array.slice(0, 3)
console.log(novoArray)