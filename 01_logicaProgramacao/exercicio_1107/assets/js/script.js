// Average and Product Calculator (STANDARD)
let formAvera = document.querySelector('form[action="formAverageProduct"]');

formAvera.addEventListener('submit', function(e) {
    e.preventDefault();

    function calcula_media(number1, number2) {
        return ((number1+number2)/2);
    }
    
    function calcula_produto(number1, number2) {
        return (number1 * number2);
    }

    let number1 = parseInt(document.getElementById('nbr_1_1').value.trim());
    let number2 = parseInt(document.getElementById('nbr_1_2').value.trim());

    let product = calcula_produto(number1, number2);
    let media = calcula_media(number1, number2);

    let div = document.getElementById("answer_media");
    div.innerHTML = media;
    let div2 = document.getElementById("answer_product");
    div2.innerHTML = product;
});

// Average Pondered Calculator (STANDARD)
let formAverageP = document.querySelector('form[action="formAveragePondered"]');

formAverageP.addEventListener('submit', function(e) {
    e.preventDefault();

    function calcula_media_ponderada(firstNote, secondNote, weight_firstNote, weight_secondNote){
        return(((firstNote * weight_firstNote) + (secondNote * weight_secondNote)) / (weight_firstNote + weight_secondNote));
    }

    let studentID  = parseInt(document.getElementById('nbr_2_3').value.trim());

    let firstNote = parseFloat(document.getElementById('nbr_2_1').value.trim());
    let secondNote = parseFloat(document.getElementById('nbr_2_2').value.trim());
    let weight_firstNote = parseInt(document.getElementById('nbr_2_4').value.trim());
    let weight_secondNote = parseInt(document.getElementById('nbr_2_5').value.trim());

    let averagePondered = (calcula_media_ponderada(firstNote, secondNote, weight_firstNote, weight_secondNote));

    let div = document.getElementById("answer_pondered_name");
    div.innerHTML = studentID;
    let div2 = document.getElementById("answer_pondered");
    div2.innerHTML = averagePondered;

});

// Average Pondered Calculator (REMAKE EDITION I)
let formAverageP2 = document.querySelector('form[action="formAveragePondered2"]');
// These functions are used in the first exercise, but for now. I have simply created copies of 
//          the functions and exported them outside the scope of the first exercise
function calcula_media(number1, number2) {
    return ((number1+number2)/2);
}
function calcula_produto(number1, number2) {
    return (number1 * number2);
}

formAverageP2.addEventListener('submit', function(e) {
    e.preventDefault();

    function calcula_media_ponderada(firstNote, secondNote, weight_firstNote, weight_secondNote){
        return((calcula_produto(firstNote, weight_firstNote) + calcula_produto(secondNote, weight_secondNote)) / (weight_firstNote + weight_secondNote));
    }

    let studentID  = parseInt(document.getElementById('nbr_3_3').value.trim());

    let firstNote = parseFloat(document.getElementById('nbr_3_1').value.trim());
    let secondNote = parseFloat(document.getElementById('nbr_3_2').value.trim());
    let weight_firstNote = parseInt(document.getElementById('nbr_3_4').value.trim());
    let weight_secondNote = parseInt(document.getElementById('nbr_3_5').value.trim());

    let averagePondered = (calcula_media_ponderada(firstNote, secondNote, weight_firstNote, weight_secondNote));

    let div = document.getElementById("answer_pondered_name2");
    div.innerHTML = studentID;
    let div2 = document.getElementById("answer_pondered2");
    div2.innerHTML = averagePondered;

});

// Average Pondered Calculator (REMAKE EDITION II)
let formAverageP3 = document.querySelector('form[action="formAveragePondered3"]');

// The calcula_produto() function have been mentioned before

formAverageP3.addEventListener('submit', function(e) {
    e.preventDefault();

    function calcula_media_ponderada(firstNote, secondNote, weight_firstNote, weight_secondNote){
        return((calcula_produto(firstNote, weight_firstNote) + calcula_produto(secondNote, weight_secondNote)) / (weight_firstNote + weight_secondNote));
    }

    let studentID1  = parseInt(document.getElementById('nbr_4_student1').value.trim());
    let firstNoteStudent_1 = parseFloat(document.getElementById('nbr_4_first1').value.trim());
    let secondNoteStudent_1 = parseFloat(document.getElementById('nbr_4_second1').value.trim());

    let studentID2  = parseInt(document.getElementById('nbr_4_student2').value.trim());
    let firstNoteStudent_2 = parseFloat(document.getElementById('nbr_4_first2').value.trim());
    let secondNoteStudent_2 = parseFloat(document.getElementById('nbr_4_second2').value.trim());

    let weight_firstNote = parseInt(document.getElementById('nbr_4_1').value.trim());
    let weight_secondNote = parseInt(document.getElementById('nbr_4_2').value.trim());

    let averagePondered1 = (calcula_media_ponderada(firstNoteStudent_1, secondNoteStudent_1, weight_firstNote, weight_secondNote));
    let averagePondered2 = (calcula_media_ponderada(firstNoteStudent_2, secondNoteStudent_2, weight_firstNote, weight_secondNote));

    if (isNaN(averagePondered1))
        averagePondered1 = "Value invalid!";
    if (isNaN(averagePondered2))
        averagePondered2 = "Value invalid!";
    
    let div = document.getElementById("answer_pondered_id_student1");
    div.innerHTML = studentID1;
    let div2 = document.getElementById("answer_pondered_student1");
    div2.innerHTML = averagePondered1;
        
    let div3 = document.getElementById("answer_pondered_id_student2");
    div3.innerHTML = studentID2;
    let div4 = document.getElementById("answer_pondered_student2");
    div4.innerHTML = averagePondered2;
});

//Salary Discounts : Need to be fixed
let formSalary = document.querySelector('form[action="formSalaryDiscounts"]');

formSalary.addEventListener('submit', function(e) {
    e.preventDefault();

    function calc_inss(salary){
        return (salary * 0.1);
    }

    function calc_fgts(salary){
        return (salary * 0.08);
    }

    function calc_health(salary){
        return (salary - 100);
    }

    let salary = parseFloat(document.getElementById('nbr_5').value.trim());

    let inssDiscount = calc_inss(salary);
    let fgtsDiscount = calc_fgts(salary);
    let healthDiscount = calc_health(salary);

    let salaryDiscounts = salary - inssDiscount - fgtsDiscount - healthDiscount;

    let salaryAfterDiscounts = salary + salaryDiscounts;

    let div2 = document.getElementById("answer_Discounts");
    div2.innerHTML = salaryDiscounts.toFixed(2);
    let div = document.getElementById("answer_salaryrDiscounts");
    div.innerHTML = salaryAfterDiscounts.toFixed(2);
});

/* 
5 - Implemente, utilizando funções, um programa que receba do usuário o valor do salário bruto de um funcionário e imprima o valor com descontos de INSS, FGTS e Plano de Saúde. O programa deve utilizar uma função para calcular cada um dos descontos, sendo que estas funções devem receber o valor do salário bruto e retornar o valor a ser descontado. Os valores descontados devem ser:

INSS: 10% do valor bruto;
FGTS: 8%;
Plano de Saúde: R$100,00.

let salario = float(prompt("Digite o salario bruto: "));

calcula_desconto_inss = return (0.1 * valor_bruto)
calcula_desconto_fgts = return (0.08 * valor_bruto)
calcula_desconto_plano_saude = return (100.0 - valor_bruto);

Exiba:
    desconto_inss
    desconto_fgts
    desconto_plano _de _saude;
    total_descontar = salario_bruto - desconto_inss - desconto_fgts - desconto_plano_de_saude;


Ex06:
    salários até R$ 280,00 (incluindo) : aumento de 20%

    aumento = salario_atual * 0.2
    novo_salario = salario_atual + aumento
*/