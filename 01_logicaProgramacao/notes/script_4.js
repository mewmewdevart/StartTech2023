/*
--------------------- ARRAYS: 
		Uma estrutura que armazena valores, e cada valor está associado a um indice que vai de 0 até n-1;

		Em arrays, o indice começa em 0 e termina em n-1;
----
	TIPOS DE ARRAY
		Array básico: É o tipo mais comum de array, onde você pode armazenar vários valores 
	separados por vírgulas entre colchetes.
		let numeros = [1, 2, 3, 4, 5];

		Array multidimensional: Também conhecido como array aninhado, é um array que contém 
	outros arrays. Isso permite criar uma matriz com linhas e colunas.
		let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

		Array de objetos: Em JavaScript, você também pode criar arrays que armazenam objetos 
	em cada posição. Isso é útil quando você deseja agrupar diferentes propriedades em um único item.
		let pessoas = [
				{ nome: 'João', idade: 25 },
				{ nome: 'Maria', idade: 30 },
				{ nome: 'Pedro', idade: 35 }
				];
*/

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

// --------------------- For i .. length
for (let i = 0; i <arrayNomes.length; i++) {
	console.log(arrayNomes[i]);
}
// --------------------- For .. of : Percorrendo/acessando os valores
for (let nome of arrayNomes){ 
	console.log(nome);
}
// --------------------- For .. in : Percorrendo/acessando os indices
for (let i in arrayNomes){
	console.log(arrayNomes[i]);
}

// Adicionando valores no array // Arrays são mutaveis
let variavel = [0, 0, 0, 0];
variavel[1] = 8;
// variavel = [0, 0, 0, 0]; => [0, 8, 0, 0];

// Se chamar um indice que não existe, retorna undefined
// Exemplo: console.log(nomes[10]); => CUIDADO!;

// O Array aceita valores de tipos diferentes
let arrayMisto = [5.6, 10, "Larissa", true];
console.log(arrayMisto);
arrayMisto[10] = "abobrinha";
/* 
	[5.6, 10, "Larissa", true]
	0, 1, 2 e 3 => As posições são rodadas
	4, 5, 6, 7, 8, 9 => undefined : é necessario setar uma rule que pule esse "valor indefinido"
	10 => abobrinha
	Preenchendo Arrays com valores

	for (let elem of  arrayMisto)
		if(elem == undefined)
			break;
		console.log(elem);
*/

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