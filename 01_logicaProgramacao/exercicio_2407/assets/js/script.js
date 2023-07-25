// Print Odd Numbers Within a Range (using 'while')
let formOddWhile = document.querySelector('form[action="formOddNumbersWhile"]');

formOddWhile.addEventListener('submit', function(e) {
	e.preventDefault();

	let number1 = parseInt(document.getElementById('value_odd_1_while').value.trim());
	let number2 = parseInt(document.getElementById('value_odd_2_while').value.trim());

	// Check if inputValue is a valid number
	if (isNaN(number1) || isNaN(number2)) {
		alert("Please enter valid numbers. 😠");
		return;
	}

	const array_oddWhile = [];

	while (number1 <= number2){
		if ((number1%2) != 0)
			array_oddWhile.push(number1);
		number1++;
	}

	let div = document.getElementById("show_range_oddwhile");
	div.innerHTML = array_oddWhile;
});

// Print Odd Numbers Within a Range (using 'for')
let formOddFor = document.querySelector('form[action="formOddNumbersFor"]');

formOddFor.addEventListener('submit', function(e) {
	e.preventDefault();

	let number1 = parseInt(document.getElementById('value_odd_1_for').value.trim());
	let number2 = parseInt(document.getElementById('value_odd_2_for').value.trim());


	if (isNaN(number1) || isNaN(number2)) {
		alert("Please enter valid numbers. 😠");
		return;
	}

	const array_oddFor = [];

	while (number1 <= number2){
		if ((number1%2) != 0)
			array_oddFor.push(number1);
		number1++;
	}

	let div = document.getElementById("show_range_oddfor");
	div.innerHTML = array_oddFor;
});


// Find the Minimum and Maximum Numbers in an Array (using 'push')
let formFindMaxMin = document.querySelector('form[action="findMinMaxNumbers"]');

formFindMaxMin.addEventListener('submit', function(e) {
	e.preventDefault();

	let numbers = [];

	let i = 1;
	while (i <= 10) {
		let inputID ="value_find_maxmin_" + i;
		let inputValue = parseInt(document.getElementById(inputID).value.trim());

		if (isNaN(inputValue)) {
			alert("Please enter valid numbers. 😠");
			return;
		}

		numbers.push(inputValue);
		i++;
	}

	let min_value = Math.min(...numbers);
	let max_value = Math.max(...numbers);

	let div = document.getElementById("show_findMax");
	div.innerHTML = min_value;
	let div2 = document.getElementById("show_findMin");
	div2.innerHTML = max_value;
});

// Array of Objects
//  Google: O Brasil é dividido em 26 estados e o Distrito Federal, ao todo são 27 unidades federativas
const brazilianProhibitedGames = {
	game1: {
		name: "Jogo do Bicho",
		yearOfProibittion: 1941,
		statesProibited: 26
	},
	game2: {
		name: "Bingo",
		yearOfProibittion: 2000,
		statesProibited: 27
	},
	game3: {
		name: "Mega-sena",
		yearOfProibittion: 2023,
		statesProibited: 26
	},
	game4: {
		name: "Jogo de Baralho (Cassino)",
		yearOfProibittion: 1946,
		statesProibited: 27
	},
	game5: {
		name: "Jogo de Bicho Simulator",
		yearOfProibittion: 2023,
		statesProibited: 26
	},
}; // Source: Confia. Inventei algumas probicoes para usar como dado!

document.getElementById("filter-form").addEventListener("submit", function(event) {
	event.preventDefault();

	const searchName = document.getElementById("game-name").value;
	const searchYear = parseInt(document.getElementById("prohibition-year").value);
	const searchStates = parseInt(document.getElementById("states-banned").value);

	// Filter the games found based on the user input
	const filteredGames = Object.values(brazilianProhibitedGames).filter(game => {
		const nameMatch = game.name.toLowerCase().includes(searchName.toLowerCase());

		let yearMatch = true;
		if (!isNaN(searchYear))
			yearMatch = game.yearOfProibittion === searchYear;

		let statesMatch = true;
		if (!isNaN(searchStates))
			statesMatch = game.statesProibited === searchStates;

		return nameMatch && yearMatch && statesMatch;
	});

	const resultDiv = document.getElementById("show_prohibited_games");
	if (filteredGames.length > 0) {
		// organizing the found content in a html list
		// test: const sum = numbers.reduce((acc, num) => acc + num, 0)
		const resultList = filteredGames.reduce((acc, game) => {
			const listItem = document.createElement("li");
			listItem.textContent = `${game.name}, Prohibited in ${game.yearOfProibittion}, ${game.statesProibited} States Banned.`;
			acc.push(listItem);
			return acc;
		}, []);

		resultDiv.innerHTML = "";
		resultList.forEach(listItem => {
			resultDiv.appendChild(listItem);
		});
	} else {
		resultDiv.innerHTML = "No games found matching with what you insert.";
	}
});