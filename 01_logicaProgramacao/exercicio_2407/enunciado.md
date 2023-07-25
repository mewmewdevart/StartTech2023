Atividade de Fixação 02
1 - Faça um programa que leia 2 números inteiros, calcule e exiba a média aritmética e o produto dos números. O seu programa deve, obrigatoriamente, utilizar as seguintes funções feitas por você:

calcula_media(): recebe 2 números inteiros como parâmetros e retorne a média dos números;
calcula_produto(): recebe 2 números inteiros como parâmetros e retorna o produto dos números;

2 - Faça um programa que calcule e imprima a média ponderada de um aluno. Inicialmente, o programa deverá ler o peso da primeira prova e o peso da segunda prova (ambos inteiros).

 A seguir, o programa deverá ler os seguintes dados do aluno: matrícula (inteiro), nota da primeira prova e nota da segunda prova (ambas reais). Por último, o programa deve mostrar a matricula do aluno seguida da sua média. O seu programa deve, obrigatoriamente, utilizar a seguinte função feita por você:

calcula_media_ponderada(): recebe 2 notas (reais) e seus respectivos pesos (inteiros) como parâmetros e retorna a média ponderada dos valores;

3 - Altere o programa do exercício 2 para que ele utilize a função calcula_produto do exercício 1 no cálculo da média ponderada;

4 - Altere o programa do exercício 3 para que ele processe os dados de 2 alunos ao invés de apenas 1;

5 - Implemente, utilizando funções, um programa que receba do usuário o valor do salário bruto de um funcionário e imprima o valor com descontos de INSS, FGTS e Plano de Saúde. O programa deve utilizar uma função para calcular cada um dos descontos, sendo que estas funções devem receber o valor do salário bruto e retornar o valor a ser descontado. Os valores descontados devem ser:

INSS: 10% do valor bruto;
FGTS: 8%;
Plano de Saúde: R$100,00.

6 - Faça um programa para a leitura de duas notas parciais de um aluno. 
O programa deve calcular a média alcançada por aluno e apresentar: -> A mensagem "Aprovado", se a média alcançada for maior ou igual a sete; -> A mensagem "Reprovado", se a média for menor do que sete; -> A mensagem "Aprovado com Distinção", se a média for igual a dez.

if (media == 10)
    console.log(""Aprovado com Distinção");
else if((media >= 7))
    console.log("Aprovado");
else
    console.log("Reprovado");


7 - As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%
Após o aumento ser realizado, informe na tela:

o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento.
//
Verificar em qual faixa salarial o salário do colaborador se enquadra.
Com base na faixa salarial, calcular o valor do aumento usando a seguinte fórmula:
    Faixa salarial até R$ 280,00: aumento = salário * 0.2 (20%)
    Faixa salarial entre R$ 280,00 e R$ 700,00: aumento = salário * 0.15 (15%)
    Faixa salarial entre R$ 700,00 e R$ 1500,00: aumento = salário * 0.1 (10%)
    Faixa salarial acima de R$ 1500,00: aumento = salário * 0.05 (5%)

    Calcular o novo salário após o aumento somando o valor do aumento ao salário atual:
    novo_salario = salário + aumento

Com base nessas fórmulas, você poderá calcular o salário antes do reajuste, o percentual de aumento aplicado, o valor do aumento e o novo salário após o aumento.

8 - Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo), e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês. Desconto do IR:

Salário Bruto até 900 (inclusive) - isento;
Salário Bruto até 1500 (inclusive) - desconto de 5%;
Salário Bruto até 2500 (inclusive) - desconto de 10%;
Salário Bruto acima de 2500 - desconto de 20%.
Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.

Exemplo:

Salário Bruto: (5 * 220)        : R$ 1100,00
(-) IR (5%)                     : R$   55,00  
(-) INSS ( 10%)                 : R$  110,00
FGTS (11%)                      : R$  121,00
Total de descontos              : R$  165,00
Salário Liquido                 : R$  935,00

//
A fórmula matemática para calcular o salário líquido de acordo com as informações fornecidas seria a seguinte:

Calcular o salário bruto:
salario_bruto = valor_hora * quantidade_horas

Calcular o desconto do Imposto de Renda (IR):
Se salario_bruto <= 900, então desconto_ir = 0
Se salario_bruto > 900 e salario_bruto <= 1500, então desconto_ir = salario_bruto * 0.05
Se salario_bruto > 1500 e salario_bruto <= 2500, então desconto_ir = salario_bruto * 0.1
Se salario_bruto > 2500, então desconto_ir = salario_bruto * 0.2

Calcular o valor do FGTS (Fundo de Garantia do Tempo de Serviço):
fgts = salario_bruto * 0.11

Calcular o salário líquido:
salario_liquido = salario_bruto - desconto_ir

Essa fórmula leva em consideração os descontos do Imposto de Renda e o valor do FGTS, resultando no salário líquido após os descontos.

EXTRA (+200XP): A entrada de dados deve ser feita através do HTML e não de prompt.