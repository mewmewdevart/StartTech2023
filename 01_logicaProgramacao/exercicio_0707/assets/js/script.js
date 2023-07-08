// Average Calculator
let formAvera = document.querySelector('form[action="formAverage"]');

formAvera.addEventListener('submit', function(e) {
    e.preventDefault();

    // getElementById return one string, not a number so because of this I need convert it to Float or Int
    let number1 = parseFloat(document.getElementById('note_student1').value.trim()); /// trim to remove the whitespaces
    let number2 = parseFloat(document.getElementById('note_student2').value.trim());
    let number3 = parseFloat(document.getElementById('note_student3').value.trim());
    let number4 = parseFloat(document.getElementById('note_student4').value.trim());

    if (isNaN(number1)) // NaN : Number
        number1 = 0;
    if (isNaN(number2))
        number2 = 0;
    if (isNaN(number3))
        number3 = 0;
    if (isNaN(number4))
        number4 = 0;

    let sumValues = number1 + number2 + number3 + number4;
    let gradeCount = sumValues / 4;

    let div = document.getElementById("answer_student");
    div.innerHTML = gradeCount.toFixed(2); //to.Fixed to round the number
});

// Circle Radius Calculator
let formCircle = document.querySelector('form[action="formCircleRadius"]');

formCircle.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let numberCircle = parseFloat(document.getElementById('nbr_circle').value.trim());
    const PI = 3.14159265358979323846;

    if (isNaN(numberCircle))
        numberCircle = 0;

    // área = π * r^2
    let area_result = PI * (numberCircle ** 2);

    let div = document.getElementById("answer_circle");
    div.innerHTML = area_result.toFixed(2);
});

// Fahrenheit to Celsius
let formFahr = document.querySelector('form[action="formFahrToCelsius"]');
        
formFahr.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let numberFahr = parseFloat(document.getElementById('nbr_fahrenheit').value.trim());
    let numberCelsius = 5 * ((numberFahr-32) / 9);

    let div = document.getElementById("answer_fahr");
    div.innerHTML = numberCelsius.toFixed(2);
});


// Room Calculator
let formRoom = document.querySelector('form[action="formRoomCalculator"]');
        
formRoom.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let numberLength = parseFloat(document.getElementById('nbr_length').value.trim());
    let numberWidth = parseFloat(document.getElementById('nbr_width').value.trim());

    // Calculate the area of the rectangular room
    let area = numberLength * numberWidth;
    // Calculate the perimeter of the rectangular room
    let perimeter = 2 * (numberLength + numberWidth);

    let div = document.getElementById("answer_area");
    div.innerHTML = area.toFixed(2);
    let div1 = document.getElementById("answer_perimeter");
    div1.innerHTML = perimeter.toFixed(2);
});


// Kitchen Repair
let formKitchenRepair = document.querySelector('form[action="formKitchen"]');

formKitchenRepair.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let numberLength = parseFloat(document.getElementById('nbr_kitchenLength').value.trim());
    let numberWidth = parseFloat(document.getElementById('nbr_kitchenWidth').value.trim());

    let areaKitchen = numberLength * numberWidth;
    let tiles = 2.5; // 2,5 m2.

    let boxTiles = areaKitchen / tiles;

    let div = document.getElementById("answer_tiles");
    div.innerHTML = boxTiles.toFixed(2);
});

