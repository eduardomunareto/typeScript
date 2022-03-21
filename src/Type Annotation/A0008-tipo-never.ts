//never nunca vai retornar nada -> pode ser void tb, pode ser que quebre a aplicação
export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro(); // quebrou a aplicação
