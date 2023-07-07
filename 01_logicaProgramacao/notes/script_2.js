// Strings (cadeia de caracteres)
nome = "Larissa";
console.log("O nome da aluna é ", nome);
primeiro_nome = "Larissa";
sobrenome = "Cristina";
console.log(primeiro_nome + " " + sobrenome);

// Crase ` no JavaScript tem o mesmo funcionamento de  console.log(primeiro_nome + " " + sobrenome);
nomeCompleto = `${nome} ${sobrenome}`;
nome += `${nome}`;

// Booleanas
verdadeiro = true; // true;
falso = false; // false;

// ~~~~~~ O jeito ideal de declarar variaveis no JavaScript é usando let e const ~~~~~~ 
// Hoisting em JavaScript: Declarações são elevadas.
//      "Nunca mais eu vou usar var... é muito ruim!"  
var test; // Declaração é "elevada" para o topo do escopo
console.log(test); // Resultado: Não da errro mas retorna undefined
console.log(testNaoExiste); // Resultado: Da erro porquê não existe
test = "testando"; // Atribuição de valor

// let(altero o valor) para variaveis e const para constantes(não altero o valor)
const CONSTANTES = 3;
CONSTANTES = 4; // Retorna erro

// Entrada e Saída
//      Converta Celsius para Fahrenheit
let celsius = parseFloat(prompt("Digite a temperatura em Celsius")); // Convertendo string para float
let fahrenheit = 1.8 * celsius + 32;
alert(`A temperatura em graus Fahrenheit: ${fahrenheit}`);

// Funções em JavaScript
//     Definição e chamada de uma função
function nomeFuncao(x) {
return x**2;
}
console.log(nomeFuncao(2)); // Pedindo para o retorno ser impresso na tela

//      REPRISE: Converta Celsius para Fahrenheit
function converte_para_fahr(celsius_2) {
  return (1.8 * celsius_2 + 32);
}
let celsius_2 = parseFloat(prompt("Digite a temperatura em Celsius")); // Convertendo string para float
let fahr_2 = converte_para_fahr(celsius);
console.log(fahr_2 );

// Funções com retorno para Void : Não possui um valor de retorno especifico
function mostra_temperatura(temp, unidade = " Celsius") {
    // Unidade possui um valor DEFAULT (padrão) caso o usuario nao tenha passada um valor fixo para este parametro
  alert(`A temperatura convertida é ${temp} ${unidade}`);
}
mostra_temperatura(35, " Kalvin");
mostra_temperatura(35);

// Função anonima : O nome dela se torna imc
let calcula_imc = function (altura, peso) {
    return (peso/altura**2);
}
console.log(calcula_imc(1.72, 64));