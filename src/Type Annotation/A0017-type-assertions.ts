//condicional
const body = document.querySelector('body');
if (body) body.style.backgroundColor = 'red';

//Non-Null assertion(!)
const body2 = document.querySelector('body')!;
body2.style.backgroundColor = 'red';

// type-assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body2.style.backgroundColor = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// type-assertion
const body4 = document.querySelector('body') as unknown as number; //vai dar errado, pq o body nunca será um number, aí usa o unknown
body2.style.backgroundColor = 'red';
