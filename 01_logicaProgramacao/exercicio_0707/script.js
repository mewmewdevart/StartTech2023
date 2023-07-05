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

    var div = document.getElementById("answer_student");
    div.innerHTML = gradeCount;
});

// Circle Radius Calculator
let formCircle = document.querySelector('form[action="formCircleRadius"]');
        
formCircle.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let numberCircle = document.getElementById('nbr_circle').value;
    const PI = 3.14159265358979323846;

    // raio = circunferência / (2 * π)
    let radius_result = (numberCircle/(2*PI));

    var div = document.getElementById("answer_circle");
    div.innerHTML = radius_result;
});


