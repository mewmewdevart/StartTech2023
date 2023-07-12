/*
    Inicializar um array de palavras
    Aleatorizar as palavras presentes dentro do array : 
        Acessar a palavra que está neste indice

    ENQUANTO
        Mostrar a palavra "mascarada" para o usuario [underline] no lugar das letras
        Solicitar ao usuario a letra que ele deseja tentar
            Percorrer a palavra sorteada checando a letra digitada pelo usuario pertence a  palavra
            Se correto, mostra todas as ocorrencias dessa letra na palavra "mascarada"
            
            Caso ao contrario, se a letra nao pertence a palavra.
                Decrementa uma vida do total de vida restantes
            
        Se a palavra "mascarada" for igual a palavra original
            Jogador vence!
        Se nao (Verifica vida == 0)
            Jogador perdeu
        Se nao
            Continua;

*/

// https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
function generatorRandomWords(arr) {
    const i = Math.floor(Math.random() * arr.length); // parseINT também funciona
    return arr[i];
}

let arrWords = ["Larissa", "Joao", "Maria", "Amanda"];

const randomWords = generatorRandomWords(arrWords);
console.log(randomWords);

