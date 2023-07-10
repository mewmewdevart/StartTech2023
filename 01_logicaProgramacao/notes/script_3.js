// --------------------- Função anônima :
//			Uma função anônima no JavaScript é uma função que não possui um nome definido.
// 			Funções anônimas podem ser úteis quando você precisa de uma função temporária ou quando quer
//	escrever um código mais conciso.
var anonima = function() {
  console.log("Esta é uma função anônima.");
};

anonima(); // Chamando a função anônima

// --------------------- Condicionais/Estrutura de decisão/Controle de Fluxo : if e else, else if
if (condicao)
	console.log("Faça isso");
else
	console.log("Faça aquilo");

// --------------------- Operadores de atribuicao:
//		x = y		Atribuição
//		x += y	Atribuição de adição etc

// --------------------- Operadores de Comparação:
// 			menor que (<)
// 			maior que (>)
// 			menor ou igual que (<=)
//			maior ou igual que (>=)
//			diferente de (!=)
//			igual (==)

//			&& AND : Ambos precisam ser positivo	
//				Quando eu negar uma preposição que possua &&, o resultado será igual a :
//					NOT (PREPOSICAO1 || NOT PREPOSICAO2) =NOT (PREPOSICAO1 && NOT PREPOSICAO2)
//			|| OR : Um tem que ser verdadeiro para ser considerado verdadeiro
//			! Não da primeira ou Não na segunda

// --------------------- Operadores aritméticos:
//	console.log(1 / 2); /* imprime 0.5 */ Quando o resultado é um valor

// --------------------- Operadores unários:
//  (-x) resultará em -5 : Operador de negação (-): É usado para negar o valor de um operando
// Operador de incremento (++) : É usado para aumentar o valor de uma variável em uma unidade.
// Operador de decremento (--) : É usado para diminuir o valor de uma variável em uma unidade. 
// Operador lógico de negação (!): É usado para negar o valor lógico de um operando.
//			Se o operando for verdadeiro, o operador unário de negação retorna falso, e vice-versa.

let calcula_imc = function (altura, peso) {
		return peso/altura**2;
};

let altura = parseFloat(prompt("Digite a sua altura: "));
let peso = parseFloat(prompt("Digite o seu peso: "));

let imc = calcula_imc(altura, peso);
alert(`O seu IMC é {imc.toFixed(2)}`); // to.Fixed fixa a quantidade de casas decimais que irá ter (retorna uma string) o Math.round funcionaria para retornar numero

if (imc < 17) {
	console.log("IMC: " + imc.toFixed(2) + " - Muito abaixo do peso.");
} else if (imc < 18.5) {
	console.log("IMC: " + imc.toFixed(2) + " - Abaixo do peso.");
} else if (imc < 25) {
	console.log("IMC: " + imc.toFixed(2) + " - Peso normal!");
} else if (imc < 30) {
	console.log("IMC: " + imc.toFixed(2) + " - Acima do peso!");
} else if (imc < 35) {
	console.log("IMC: " + imc.toFixed(2) + " - Obesidade grau I!");
} else if (imc <= 40) {
	console.log("IMC: " + imc.toFixed(2) + " - Obesidade grau II!");
} else {
	console.log("IMC: " + imc.toFixed(2) + " - Obesidade grau III!");
}
	
// Faça um programa que converta uma nota de 0 a 10 em um conceito (A, B, C, D ou F)
	// A: nota é maior ou igual a 9
	// B: nota está entre 8 (incluso) e 9
	// C: nota está entre 7 (incluso) e 8
	// D: nota está entre 5 (incluso) e 7
	// F: nota está abaixo de 5
	
console.log("Digite as notas do aluno para passar as notas!");
let user = 0;
while (user < 10) // Repetição Determinada : Sabemos quantas vezes a condição será rodada
{
	let nota = parseFloat(prompt("Digite a nota do aluno " + user + ":"));
	if (nota >= 0 && nota <= 10) // Repetição Indeterminada
	{
		if (nota >= 9)
			console.log("O aluno %d recebeu: A", user);
		else if (nota >= 8)
			console.log("O aluno %d recebeu: B", user);
		else if (nota >= 7)
			console.log("O aluno %d recebeu: C", user);
		else if (nota >= 5)
			console.log("O aluno %d recebeu: D", user);
		else
			console.log("O aluno %d recebeu: F", user);
	} else {
		console.log("Não é uma nota válida!");
		continue;
	}
	user++;
}

/// Usa-se o while e o for quando queremos repetir um codigo x vezes
console.log("Bem Vindo ao TabuadaX!")
let checkerType = prompt("Se você deseja testar com o while digite (w) senão digite (f) para testar com o for: ");

if (checkerType == "w")
	{
		let userNumber = parseInt(prompt("Deseja saber a tabuada de qual numero? "));

		let cont = 1;
		while (cont <= 10)
		{
			let result = userNumber * cont;
			console.log(userNumber + " * "+ cont + " = " + result);
			cont++;
		}
		console.log("Essa tabuada foi obtida através do laço while()");
	}
else if (checkerType == "f") {
		let userNumber = parseInt(prompt("Deseja saber a tabuada de qual numero? "));
		
		for (let cont = 1; cont <= 10; cont++)
		{
			let result = userNumber * cont;
			console.log(userNumber + " * "+ cont + " = " + result);
		}
		console.log("Essa tabuada foi obtida através do laço for()");
} else {
	console.log("O valor insirido não é valido, tente novamente!");
}