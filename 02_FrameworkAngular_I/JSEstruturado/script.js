
// JAVASCRIPT ESTRUTURADO
let num1 = 10;
let num2 = 3;

let soma = num1 + num2;
let sub = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

let nome = "Larissa";

const saudacao = document.getElementById("top");
saudacao.innerHTML = `
  <h2>Olá ${nome}!
`;

const op = document.getElementById("operacoes");
op.innerHTML = `<p>Exemplos de operações matemáticas:</p>
<ul>
  <li>${num1} + ${num2} = ${soma}</li>
  <li>${num1} - ${num2} = ${sub}</li>
  <li>${num1} x ${num2} = ${multiplicacao}</li>
  <li>${num1} / ${num2} = ${divisao}</li>
</ul>
`;