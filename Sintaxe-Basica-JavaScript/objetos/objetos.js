let object = {
  string: 'string',
  number: 1,
  boolean: true,
  array: ['array'],
  objectInterno: {
    objectInterno: 'objeto interno'
  }
}
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array
console.log(arrayInterno)