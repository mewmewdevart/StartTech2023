// Arrays : Indice começa em 0 e termina em n-1
// O Array é uma estrutura que armazena valores, e cada valor está associado a um indice que vai de 0 até n-1;
let arrayNotas = [6, 7, 3, 10];
let arrayNomes = ["Larissa", "Isabella", "Francielle", "Enzo"]
// arrayNotes[0] => 6
// arrayNotes[1] => 7
// arrayNotes[3] => 10

console.log(arrayNotas[0]);
console.log(arrayNomes);

let indice;
indice = 0;

// While i .. length
while(indice < arrayNomes.length)
{
	console.log(arrayNomes[indice]);
	indice++;
}

// For i .. length
for (let i = 0; i <arrayNomes.length; i++) {
	console.log(arrayNomes[i]);
}

// For .. of : Percorrendo/acessando os valores
for (let nome of arrayNomes){ 
	console.log(nome);
}
// For .. in : Percorrendo/acessando os indices
for (let i in arrayNomes){
	console.log(arrayNomes[i]);
}

// Se chamar um indice que não existe, retorna undefined
// Exemplo: console.log(nomes[10]); => CUIDADO!;

// O Array aceita valores de tipos diferentes
let arrayMisto = [5.6, 10, "Larissa", true];
console.log(arrayMisto);


// Preenchendo Arrays com valores
let arrayFrutas = [];

for (let i = 0; i < 5 ; i++) {
	let frutas = prompt("Digite uma fruta: ");
	arrayFrutas[i] = frutas;
	console.log(arrayFrutas[i]);
}

let arrayNotas2 = [4, 5, 6, 7];
let soma = 0;

for (let i = 0; i < arrayNotas2; i++) {
	soma += arrayNotas2[i];
}

console.log(arrayNotas2, soma, soma/arrayNotas2.length);