//GLOBAL VARIABLES
//---------------------------------------
// Used to record how many times a letter can be pressed
var doubleWord = ['a', 'b', 'c',
	'd', 'e', 'f',
	'g', 'h', 'i',
	'j', 'k', 'l',
	'm', 'n', 'o',
	'p', 'q', 'r',
	's', 't', 'u',
	'v', 'w', 'x',
	'y', 'z'];
//Holds the all the words
var wordBank = ["spacecowboy", "rhinestone", "yeehaw", "highhorse","groovy","countryfever"];
//Holds choosenWord
var choosenWord = "";
//Holds letters in word
var lettersInWord = [];
//Holds number of blanks in word
var numBlanks = 0;
//Holds Blanks and successful guesses
var blanksAndSuccesses = [];
//Holds Wrong guesses
var wrongLetters = [];
//Counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 1;
var rightGuessCounter = 0;
// Music
var mySongs;
//FUNCTIONS
//----------------------------------------
function reset() {
	//Chooses word randombly from the wordBank
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	//Splits the choosen word into individual letters
	lettersInWord = choosenWord.split('');
	//Get the number of blanks
	numBlanks = lettersInWord.length;

	//RESET
	//===========================================================
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];
	doubleWord = ['a', 'b', 'c',
		'd', 'e', 'f',
		'g', 'h', 'i',
		'j', 'k', 'l',
		'm', 'n', 'o',
		'p', 'q', 'r',
		's', 't', 'u',
		'v', 'w', 'x',
		'y', 'z'];
	test = false;
	startGame();
}
function startGame() {
	//Chooses word randombly from the wordBank
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	//Splits the choosen word into individual letters
	lettersInWord = choosenWord.split('');
	//Get the number of blanks
	numBlanks = lettersInWord.length;

	//RESET
	//===========================================================
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];
	doubleWord = ['a', 'b', 'c',
		'd', 'e', 'f',
		'g', 'h', 'i',
		'j', 'k', 'l',
		'm', 'n', 'o',
		'p', 'q', 'r',
		's', 't', 'u',
		'v', 'w', 'x',
		'y', 'z'];

	//Populate blanks
	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
		}

	// input in html 

	// Testing / Debugging
	console.log(choosenWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function compareLetters(userKey) {
	console.log('WORKING!');
	//If user key exist in choosen word then perform this function 
	if (choosenWord.indexOf(userKey) > -1) {
		//Loops depending on the amount of blanks 
		for (var i = 0; i < numBlanks; i++) {
			//Fills in right index with user key
			if (lettersInWord[i] === userKey) {
				rightGuessCounter++;
				blanksAndSuccesses[i] = userKey;
				document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
			}
		}
		//Test / Debug
		console.log(blanksAndSuccesses);
	}
	//Wrong Keys
	else {
		wrongLetters.push(userKey);
		guessesLeft--;
		//Changes HTML
		document.getElementById('numGuesses').innerHTML = guessesLeft;
		document.getElementById('wrongGuesses').innerHTML = wrongLetters;
		//Test / Debug
		console.log('Wrong Letters = ' + wrongLetters);
		console.log('Guesses left are ' + guessesLeft);
	}



}
function winLose() {
	// When number blanks if filled with right words then you win
	if (rightGuessCounter === numBlanks) {
		//Counts Wins 
		winCount++;
		//Changes HTML
		document.getElementById('winCounter').innerHTML = winCount;
		alert('You won Disco Country Star! Giddy up!');
		reset();
	}
	// When number of Guesses reaches 0 then You lose
	else if (guessesLeft === 0) {
		//Counts losses
		loseCount++;
		//Changes HTML
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('You Lost Cowboy');
		reset();
	}
}

//MAIN PROCCESS
//-------------------------------------------	
//Initiates the Code
startGame();

document.onkeyup = function (event) {
	test = true;
	var letterGuessed = event.key;
	for (var i = 0; i < doubleWord.length; i++) {
		if (letterGuessed === doubleWord[i] && test === true) {
			var spliceDword = doubleWord.splice(i, 1);
			//Test / Debug
			console.log('Double word is = ' + doubleWord[i])
			console.log('Spliced Word is = ' + spliceDword);

			compareLetters(letterGuessed);
			winLose();
		}
	}

}
//===========================================================================================================
// Failed java script//
//# wordguessgame

// Easy Js Code
//var letters = ["D", "i", "s", "c", "o", "_", "C", "o", "u", "n", "t", "r", "y"];
//var wordLetters = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
//console.log(wordLetters);

//if then statements

//function wordLetters(words) {
//	var rightGuess = false;
//	var wrongLetters = false;
//	for (var i = 0; i < letters.length; i++) {
//		if (letters[i] == words) {
//			wordLetters[i] = letter;
//			rightGuess = true;
//		}
//		if (wordLetters[i] == "_") {
//			wrongLetters = true;
//		}
//	}
//	if (rightGuess) {
//		console.log("Yehaww you got a letter");
//		console.log(wordsLetters.join(""));
//		if (!rightGuess) {
//			console.log("Giddy up cowboy,you won");		}
//		else {
//			console.log(" darn it cowboy you lost");
//		}
//	}
//}
//console.log(rightGuess)

// // The array of names to guess//
//var words= ['Country Disco','Yeehaw','Rhinestone','Giddy Up','Space Cowboy'];
//Random Word Generator//
//var newWords = words[Math.floor(Math.random() * words.length)];
//console.log(newWords)

//var wordGuess = newWords.split("");
//console.log(wordGuess)
//var rightLetters = 0;
//var wrongLetters= 14;
//var Score =0;

//for (let i=0; i< words.length; i++);
//underscore for length of word//
//let generateScore = () => {
//for(let i = 0; i < words.length; i++){
//wordGuess.push("_");
// }
//  return wordGuess;
//}
//console.log(generateScore)
//User Score//
//User Wrong Guesses//
//Guessed Right Letters//
//Guessed Wrong Letter//
//Guessed right move to the correct array//
//Guessed wrong move to the wrong array//
//If guessed right play song//
//===============================================
//create an array of words
//var words = ["horse",];
//Random word selection
//var newWords = words[Math.floor(Math.random() * words.length)];
//var correctLetters = [];
//var wrongGuess = [];
//var letterScore = [];
//========================================================================
//html manipulation
//var underScore = document.getElementsByClassName("letterScore");

//var docCorrectLetter = document.getElementsByClassName("correctLetters");

//var docwrongGuess = document.getElementsByClassName("wrongGuess")

// underscore based on the letters of the word
//var genUnderscore = () => {
//	for (let i = 0; i < newWords.length; i++) {
//		letterScore.push("_");
//	}
//	return letterScore;
//}
//console.log(genUnderscore());
//player choice letter choice
//document.addEventListener("keypress", (event) => {
//	let keyword = String.fromCharCode(event.keyCode);
//	if (newWords.indexOf(keyword) > -1) {
//		//move to correct letter box
//		correctLetters.push(keyword);
//		//replacing underscore
//		letterScore[newWords.indexOf(keyword)] = keyword;
//		underScore[0].innerHTML = letterScore.join(" ");
//		docCorrectLetter[0].innerHTML = correctLetters;
//		//move to wrongGuess
//		if (letterScore.join("") == newWords) {
//			alert("Boom");
//		}
//	}
//	else {
//		wrongGuess.push(keyword);
//		docwrongGuess[0].innerHTML = wrongGuess;
//	}


//});

///letterScore[0].innerHTML = genUnderscore().join(" ");

