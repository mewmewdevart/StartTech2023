/*
primitivos
    String
    Number
    BigInt
    Boolean
    null
    undefined

objetos : Um tipo de dado no js que é mais complexivo.
    objeto
    arrays
    function
    class 
*/

// ==================== FUNCAO ==================== 
function minhaFuncao() {
    return (1);
}

// Tipagem no TypeScript
//let a : () => number = minhaFuncao();

let b = minhaFuncao();
console.log(minhaFuncao);
console.log(b);

// ====== Função basica
function minhaFuncao0(teste) { }
// ====== Expressao de função
let minhaSalada2 = function (comida) { }
// ====== Expressao de flecha
let minhaSalada3 = (comida) => {}


// ==================== Funções de alta ordem: Uma função que retorna outra função
function cozinha(vegetal, calor) {
    if (calor > 0) {
        return vegetal + " quente";
    } else {
        return vegetal + " frio";
    }
}

function minhaSalada(vegetal, calor) {    
    return cozinha(vegetal, calor);
}

console.log(minhaSalada("tomate", 0));

// Clouser
function criarMicroondas(marca, modelo){

    return function microondas(comida){
        //return comida + " quente" + " patrocinado por " + marca + " " + modelo;
        return '$(comida) quente patrocinada por $(marca) $(modelo)';
    }
}

let microondas = criarMicroondas("eletrolux", "gx500");

let resultado = microondas("bananana");

let resultadoAlternativo = criarMicroondas("eletrolux", "gx500")("tomate");
console.log(resultado);
console.log(resultadoAlternativo);


// ==================== ARRAYS ==================== 
// Tipos de criação
let meuArray = [];
let meuArray2 = Array();

// Aceita qualquer tipo
let myArray = [1, 2, 3, null, "larih", function minhaFuncao4(){}];

console.log(myArray[2]);

let takeNumber = myArray[2];
myArray[2] = 10; //Alterando o valor

console.log(myArray[2]);

console.log("abc".length);

myArray[2].length
myArray[n].n

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
myArray.forEach((itemAtual) => {
    // Fazer alguma coisa com o item atual
});//Entregando uma função para outra função

myArray.map // Cria um novo array aplicando uma função a cada elemento do array original.
myArray.filter // Retorna um novo array com elementos que atendem a um critério definido por uma função de teste.
myArray.reduce //  Reduz os elementos do array a um único valor, aplicando uma função acumuladora em sequência.
myArray.find // Retorna o primeiro elemento do array que satisfaz um critério especificado por uma função de teste.
myArray.every // Verifica se todos os elementos do array atendem a um critério definido por uma função de teste.


// Descobrir os tipos
typeof "larissa"
typeof 1
typeof null


// ==================== CLASSES ====================
class minhaClasse {}

// Objetos
let carro1 = {
    cor: "azul",
    pneu: "bola",
    combustivel: "oleo"
}

let carro2 = {
    cor: "amarelo",
    pneu: "quadrado",
    combustivel: "gasolina"
}

// Quando se tem muitos objetos, usamos uma classe para armazenar esses objetos
// FUNÇÃO CRIANDO OBJETO
// Encapsulamento: quando junta os dados e as funções e coloca dentro de um objeto
function criarCarro(cor, pneu, combustivel) {
    return {
        cor,
        pneu,
        combustivel,
        print() {  // Print é um método. Pode-se criar dessa maneira sem mencionar uma chave como parâmetro.
            console.log(this.cor); 
        }
    };
}

// CLASSE CRIANDO OBJETO
class Carro {
    // Classe é como se fosse o designer de um objeto
    constructor() {
        // O construtor é um método especial executado quando um objeto da classe é criado.
        this.cor = cor; // Atribuição de valor à propriedade "cor" do objeto.
        this.pneu = pneu; // Atribuição de valor à propriedade "pneu" do objeto.
        this.combustivel = this.combustivel; // Atribuição de valor à propriedade "combustivel" do objeto,
                                             // porém o valor parece estar faltando ou incorreto.
    }
    print() {
        // Método "print" que exibe a propriedade "cor" do objeto no console.
        console.log(this.cor);
    }
}

// Criação de um novo objeto "Carro" com valores passados como argumentos para o construtor.
console.log(new Carro("azul", "arol15", "gasolina"));