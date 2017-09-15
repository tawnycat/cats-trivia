// Objects with questions and answers

var triviaQuestions = {
	whiskers: {
		question: "A cat has how many whiskers, on average?",
		answerA: "24",
		answerB: "16",
		answerC: "8",
		answerD: "12",
		correctAnswer: "answerA"
	},
	group: {
		question: "A term for a group of cats is:",
		answerA: "Clutch",
		answerB: "Caggle",
		answerC: "Covey",
		answerD: "Clowder",
		correctAnswer: "answerD"
	},
	breeds: {
		question: "All of the following are the names of cat breeds, except:",
		answerA: "Balinese",
		answerB: "Birman",
		answerC: "Beauceron",
		answerD: "Burmilla",
		correctAnswer: "answerC"
	},
	taste: {
		question: "Cats can't taste this:",
		answerA: "Sweet",
		answerB: "Bitter",
		answerC: "Salt",
		answerD: "Sour",
		correctAnswer: "answerA"
	},
	calico: {
		question: "Calico cats are almost always:",
		answerA: "Left pawed",
		answerB: "Female",
		answerC: "Friendly",
		answerD: "Finicky",
		correctAnswer: "answerB"
	},
	hemingway: {
		question: "Hemingway cats are felines that have:",
		answerA: "Written a best-selling book",
		answerB: "An abnormally large head",
		answerC: "A cropped tail",
		answerD: "Extra toes",
		correctAnswer: "answerD"
	}
};

// Variables that will be needed later for scorekeeping

var correctAnswer = 0;
var wrongAnswer = 0;
var timedOut = 0;

// Display question with answers

$(document).ready(function() {
	displayQuestion(triviaQuestions.whiskers);
})

function displayQuestion (questionName) {

	$("#trivia-question").text(questionName.question);
	$("#answer-1").text(questionName.answerA);
	$("#answer-2").text(questionName.answerB);
	$("#answer-3").text(questionName.answerC);
	$("#answer-4").text(questionName.answerD);
}

// Set timer and display it

// Create logic for right and wrong answers, ran out of time

// Display "you're correct" page

// Display "wrong!" page

// Display "out of time" page 