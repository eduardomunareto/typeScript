const a = 100;

console.log(a);

const pessoa = {
  nome: 'luiz' as const, // asserção
  sobrenome: 'Miranda',
};

function escolhaCor(cor: 'vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor);
//Module mode
export default 1;
