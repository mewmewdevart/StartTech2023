let carrotHurt = document.getElementById("somHurt");
let carrotHappy = document.getElementById("somHappy");

carrotHurt.volume = 0.1;
carrotHappy.volume = 0.1;

// Import the data.js file
import { horrorMovies, trashMovies } from './data.js';

// Function to remove accents(ç) from a word
function ft_removeAccents(word) {
	return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Function to generate a random word
function ft_generateRandomWord(arrayWords) {
	const i = Math.floor(Math.random() * arrayWords.length);
	return arrayWords[i].name;
}

// Function to generate a random movie from the list
function ft_getRandomMovieFromList(movieList) {
	let randomMovieType;
	if (Math.random() < 0.5)
		randomMovieType = 'horrorMovies';
	else
		randomMovieType = 'trashMovies';
	return ft_generateRandomWord(movieList[randomMovieType]);
}

// Function to check if the entire word matches the original word
function ft_isWordMatch(word) {
	return word.toLowerCase() === randomWord.toLowerCase();
}

// Function to check if the game is finished
function ft_isFinished() {
	if (totalLifes === 0) {
		gameOver = true;
		ft_showLifes(totalLifes);
		displayMessage("Game over! The word was: " + randomWord);
		return true;
	}

	if (!wordShow.includes("_")) {
		gameOver = true;
		ft_showLifes(totalLifes);
		displayMessage("Congratulations, you have found the correct word: " + randomWord);
		return true;
	}
	return false;
}

// Function to handle button click and input processing
function ft_handleButtonClick(input) {
	let inputWord = input.toUpperCase();


	// Normalize the input word to remove accents
	inputWord = ft_removeAccents(inputWord);

	const buttonElement = document.querySelector(`.key-${input.toLowerCase()}`);
	buttonElement.disabled = true; // Disables the button
	buttonElement.classList.add("disabled"); // Adds the class "disabled" to the button

	const carrotImg1 = document.querySelector('.carrot-img-1');
	const enemyImg1 = document.querySelector('.enemy-img-1');
	// If the input is a single letter
	if (inputWord.length === 1) {
		if (wordsUsed.toLowerCase().includes(inputWord.toLowerCase())) {
			displayMessage("You have already used this letter. Try a different one!");
			return;
		}

		if (randomWord.toLowerCase().includes(inputWord.toLowerCase())) {
			let i = 0;
			while (i < randomWord.length) {
				if (ft_removeAccents(randomWord[i].toLowerCase()) === inputWord.toLowerCase()) {
					carrotHappy.play();
					wordShow[i] = randomWord[i];
				}
				i++;
			}
		} else {
			enemyImg1.classList.add('moving');
			totalLifes--;
			carrotHurt.play();
			setTimeout(() => {

				carrotImg1.classList.add('shaking');
				enemyImg1.classList.remove('moving');
				setTimeout(() => {
					carrotImg1.classList.remove('shaking');
				}, 600);
			}, 1000);
		}

		wordsUsed += inputWord;

		if (ft_isWordMatch(wordShow.join(""))) {
			displayMessage("Congratulations, you have found the correct word: " + randomWord);
			gameOver = true;
			alert("Congratulations, you have found the correct word!");
			location.reload(); // RELOAD THE SCREEN AFTER WIN
		} else if (ft_isFinished()) {
			gameOver = true;
			alert("Congratulations, you lose!");
			location.reload(); // RELOAD THE SCREEN AFTER LOSE
		}
	}
	else { // If the input is the entire word
		if (ft_removeAccents(inputWord.toLowerCase()) === ft_removeAccents(randomWord.toLowerCase())) {
			displayMessage("Congratulations, you have found the correct word: " + randomWord);
			gameOver = true;
		} else {
			displayMessage("Incorrect word. Keep guessing!");
			totalLifes--;
		}
	}

	ft_showLifes(totalLifes);
	// Update the displayed word
	ft_updateDisplay();
}

// Function to display messages on the screen
function displayMessage(message) {
	const messageElement = document.getElementById("message");
	messageElement.textContent = message;
}

// Function to update the displayed word
function ft_updateDisplay() {
	const wordDisplay = document.getElementById("word-display");
	wordDisplay.textContent = wordShow.join(" ");
}

// Function to display the lifes on the screen
function ft_showLifes(totalLifes) {
	const images = document.querySelectorAll('.ui-char-img');

	images.forEach((img) => {
		const life = parseInt(img.getAttribute('data-life'), 10);
		if (life < totalLifes) {
			img.style.display = 'block';
		} else {
			img.style.display = 'none';
		}
	});
}

// Main logic
const randomWord = ft_getRandomMovieFromList({ horrorMovies, trashMovies });

let wordsUsed = "";
let totalLifes = 6;
let gameOver = false;

let wordShow = "";
let i = 0;
while (i < randomWord.length) {
	if (randomWord[i] === " ") {
		wordShow += " ";
	} else if (randomWord[i] === "-") {
		wordShow += "-";
	} else {
		wordShow += "_";
	}
	i++;
}

wordShow = wordShow.split("");

// Update the lifes
ft_showLifes(totalLifes);

// Add event listeners to the buttons
document.querySelectorAll("[class^='key-']").forEach((button) => {
	button.addEventListener("click", () => {
		const letter = button.textContent;
		ft_handleButtonClick(letter);
	});
});

// Update the displayed information
ft_updateDisplay();
