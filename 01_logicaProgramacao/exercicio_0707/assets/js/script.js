// Average Calculator
let formAvera = document.querySelector('form[action="formAverage"]');
        
formAvera.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let number1 = document.getElementById('note_student1');
    let number2 = document.getElementById('note_student2');
    let number3 = document.getElementById('note_student3');
    let number4 = document.getElementById('note_student4');

    let sumValues = Number(note_student1.value) + Number(note_student2.value) + Number(note_student3.value) + Number(note_student4.value);
    let gradeCount = sumValues / 4;

    let div = document.getElementById("answer_student");
    div.innerHTML = gradeCount;
});

// Circle Radius Calculator
let formCircle = document.querySelector('form[action="formCircleRadius"]');
        
formCircle.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let numberCircle = parseFloat(document.getElementById('nbr_circle').value);
    const PI = 3.14159265358979323846;

    // raio = circunferência / (2 * π)
    let radius_result = (numberCircle/(2*PI));

    let div = document.getElementById("answer_circle");
    div.innerHTML = radius_result;
});

// Fahrenheit to Celsius
let formFahr = document.querySelector('form[action="formFahrToCelsius"]');
        
formFahr.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let numberFahr = parseFloat(document.getElementById('nbr_fahrenheit').value);
    let numberCelsius = 5 * ((numberFahr-32) / 9);

    let div = document.getElementById("answer_fahr");
    div.innerHTML = numberCelsius;
});

// Room Calculator
let formRoom = document.querySelector('form[action="formRoomCalculator"]');
        
formRoom.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    // getElementById return one string, not a number so because of this I need convert it to Float or Int
    let numberLength = parseFloat(document.getElementById('nbr_length').value);
    let numberWidth = parseFloat(document.getElementById('nbr_width').value);

    // Calculate the area of the rectangular room
    let area = numberLength * numberWidth;
    // Calculate the perimeter of the rectangular room
    let perimeter = (2 * (numberLength + numberWidth));

    let div = document.getElementById("answer_area");
    div.innerHTML = area;
    let div1 = document.getElementById("answer_perimeter");
    div1.innerHTML = perimeter;
});

// Kitchen Repair
let formKitchenRepair = document.querySelector('form[action="formKitchen"]');
        
formKitchenRepair.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let numberLength = parseInt(document.getElementById('nbr_kitchenLength').value);
    let numberWidth = parseInt(document.getElementById('nbr_kitchenWidth').value);

    // Calculate the area of the kitchen
    let areaKitchen = numberLength * numberWidth;

    let tiles = 2.5; // 2,5 m2.

    // Quantidade de caixas de azulejos = area da cozinha / 2,5 m2
    let boxTiles = areaKitchen / tiles;

    let div = document.getElementById("answer_tiles");
    div.innerHTML = boxTiles;
});
