export const horrorMovies = [
	{ "name": "The Exorcist" },
	{ "name": "Psycho" },
	{ "name": "The Shining" },
	{ "name": "Halloween" },
	{ "name": "A Nightmare on Elm Street" },
	{ "name": "The Texas Chainsaw Massacre" },
	{ "name": "Get Out" },
	{ "name": "Rosemary's Baby" },
	{ "name": "Hereditary" },
	{ "name": "The Conjuring" }
  ];
  
export const trashMovies = [
	{ "name": "Plan 9 from Outer Space" },
	{ "name": "Troll 2" },
	{ "name": "The Room" },
	{ "name": "Birdemic: Shock and Terror" },
	{ "name": "Manos: The Hands of Fate" },
	{ "name": "Batman & Robin" },
	{ "name": "Gigli" },
	{ "name": "Battlefield Earth" },
	{ "name": "Catwoman" },
	{ "name": "The Emoji Movie" }
  ];
  


// Function to handle button click and input processing
function ft_handleButtonClick(input) {
    let inputWord = input.toUpperCase();

    // Normalize the input word to remove accents
    inputWord = ft_removeAccents(inputWord);

    const buttonElement = document.querySelector(`.key-${input.toLowerCase()}`);
    buttonElement.disabled = true; // Disables the button
    buttonElement.classList.add("disabled"); // Adds the class "disabled" to the button

    // If the input is a single letter
    if (inputWord.length === 1) {
        if (wordsUsed.toLowerCase().includes(inputWord.toLowerCase())) {
            displayMessage("You have already used this letter. Try a different one!");
            return;
        }

        if (randomWord.toLowerCase().includes(inputWord.toLowerCase())) {
            let i = 0;
            while (i < randomWord.length) {
                if (ft_removeAccents(randomWord[i].toLowerCase()) === inputWord.toLowerCase())
                    wordShow[i] = randomWord[i];
                i++;
            }
        } else {
            totalLifes--;
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
    // If the input is the entire word
    else {
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