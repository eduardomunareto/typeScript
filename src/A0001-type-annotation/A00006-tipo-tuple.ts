const dadosCliente: readonly [number, string, ...string[]] = [
  1,
  'Luiz',
  'Miranda',
  'casa',
  'joao',
];

const array: readonly string[] = ['Luiz', 'Otávio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];
console.log(dadosCliente);
console.log(array, array2);
