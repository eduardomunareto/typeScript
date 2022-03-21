//É um any mais seguro, é o pai de todos os outros tipos
let x: unknown;
x = 100;
x = 'Luiz';
x = 900;
x = '10';
const y = 800;

// console.log(x + y); //Aceita qualquer coisa o any, no entanto unknown vai dar uma mensagem
//obrigad a checar primeiro

if (typeof x === 'number') console.log(x + y);
