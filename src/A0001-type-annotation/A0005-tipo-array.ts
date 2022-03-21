// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}
export function toUpperCases(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const resultado = multiplicaArgs(1, 2, 3);
const resultadoC = concatenaString('a', 'b', 'c');
const upper = toUpperCases(resultadoC);
console.log(resultado);
console.log(resultadoC);
console.log(upper);
