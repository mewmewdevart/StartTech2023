// Função anônima : Variavel recebendo o resultado da função
let calcula_imc = function (altura, peso) {
    return peso/altura**2;
  };
  // console.log(calcula_imc(1.72, 64));
  
  let altura = parseFloat(prompt("Digite a sua altura: "));
  let peso = parseFloat(prompt("Digite o seu peso: "));
  
  let imc = calcula_imc(altura, peso);
  alert(`O seu IMC é {imc.toFixed(2)}`); // to.Fixed fixa a quantidade de casas decimais que irá ter (retorna uma string) o Math.round funcionaria para retornar numero
  
  // Condicionais/Estrutura de decisao/Controle de Fluxo
    // menor que (<)
    // maior que (>)
    // menor ou igual que (<=)
    // maior ou igual que (>=)
    // diferente de (!=)
    // igual (==)
  
    // && = and
    // || = or
    // ! = not
  
  if (imc < 17)
    console.log("Muito abaixo do peso.");
  else if (imc < 18.5)
    console.log("Abaixo do peso.");
  else if (imc < 25)
    console.log("Peso normal!");
  else if (imc < 30)
    console.log("Acima do peso!");
  else if (imc < 35)
    console.log("Obesidade grau I!");
  else if (imc <= 40)
    console.log("Obesidade grau II!");
  else
    console.log("Obecisdade grau III!");
  
  // Faça um programa que converta uma nota de 0 a 10 em um conceito (A, B , C , E D ou F)
  // Faça um programa que converta uma nota de 0 a 10 em um conceito (A, B, C, D ou F)
  // A: nota é maior ou igual a 9
  // B: nota está entre 8 (incluso) e 9
  // C: nota está entre 7 (incluso) e 8
  // D: nota está entre 5 (incluso) e 7
  // F: nota está abaixo de 5
  
  
  let user = 1;
  while (user <= 10)
    {
      let nota = parseFloat(prompt("Digite a nota do aluno: " + user));
      if (nota >= 0 && nota <= 10) {
        if (nota >= 9)
          console.log("O aluno %d recebeu : A", user);
        else if (nota >= 8)
          console.log("O aluno %d recebeu : B", user);
        else if (nota >= 7)
          console.log("O aluno %d recebeu : C", user);
        else if (nota >= 5)
          console.log("O aluno %d recebeu : D", user);
        else 
          console.log("O aluno %d recebeu : F", user);
      } else
      {
        console.log("Não é uma nota valida!");
        continue;
      }
      user++;
    }
