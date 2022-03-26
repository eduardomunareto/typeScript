type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

// eslint-disable-next-line no-unused-vars
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  idade: 35,
  nome: 'Eduardo',
  sobrenome: 'Munareto',
};

console.log(pessoa);

export { pessoa };
