Jogo da Forca


PRINCIPAL (1000XP)
O jogo deve ser implementado seguindo a lógica mostrada em sala (400XP):
A palavra deve ser gerada aleatoriamente através de uma função;

Deve possuir condições de vitória/derrota;

Permitir que o jogador "chute" a letra;
Se a letra não pertence à palavra, ele perde uma vida;
Caso contrário, mostramos a palavra substituindo os underlines onde a letra digitada se encontra na palavra original~;
As letras já utilizadas devem ser mostradas;
O jogador deve ser avisado que já utilizou aquela letra;
Caso seja feita uma cópia exata do código disponibilizado, comentar linha a linha, especificando a lógica implementada ali (100XP);

Adicionar as seguintes validações:
Se ele digitar uma letra maiúscula ou minúscula, o programa deve interpretar da mesma forma (utilizar string.toUpperCase() ou string.toLowerCase()) (50XP);
Não permitir números, somente letras ou palavras (50XP);


Caso o jogador entre com uma palavra, comparar ela diretamente com a palavra original, dizendo se ele ganhou ou perdeu (100XP);


Caso a palavra possua acentuação, ou seja uma palavra composta, o programa deve ter condições para tratar estes casos (para palavras com hífen, basta ignorar o hífen e não substituir ele pelo underline; para o caso da palavra com acentuação, recomendo o uso da função testada no exemplo abaixo) (50XP);

const str = "João da Silva";
str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
console.log(str)
// Resultado do console.log(str) => "Joao da Silva"

Utilizar um array de objetos, com cada objeto contendo a palavra em si e o tema referente a ela (dica), ou seja, seguindo o seguinte formato (100XP):
const arrayPalavras = [
  {
    string: "abacaxi",
    tema: "frutas",
  },
  {
    string: "futebol",
    tema: "esportes",
  },
  // e assim por diante ...
]

Este array deve possuir pelo menos 20 palavras diferente das usadas em sala, e pelo menos 3 temas diferentes, distribuídos da forma que quiserem (50XP);
Utilizar mais duas funções além da que implementamos em sala juntos (100XP).

EXTRA (400XP)
O jogo deve poder ser reiniciado (100XP);
O jogador deve entrar com as letras através do HTML e não dos prompts (200XP);
Deve haver algum bonequinho no lugar das vidas na página ou no prompt (100XP).

EXTRA DO EXTRA (300XP)
As palavras devem vir de uma API externa (utilizar fetch, aliado um JSON Server) ou simplesmente de um JSON (funciona com fetch também).