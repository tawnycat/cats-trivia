// Objects with questions and answers

var triviaQuestions = {
	whiskers: {
		question: "A cat has how many whiskers, on average?",
		answerA: "24",
		answerB: "16",
		answerC: "8",
		answerD: "12",
		correctAnswer: "24"
	},
	group: {
		question: "A term for a group of cats is:",
		answerA: "Clutch",
		answerB: "Caggle",
		answerC: "Covey",
		answerD: "Clowder",
		correctAnswer: "Clowder"
	},
	breeds: {
		question: "All of the following are the names of cat breeds, except:",
		answerA: "Balinese",
		answerB: "Birman",
		answerC: "Beauceron",
		answerD: "Burmilla",
		correctAnswer: "Beauceron"
	},
	taste: {
		question: "Cats can't taste this:",
		answerA: "Sweet",
		answerB: "Bitter",
		answerC: "Salt",
		answerD: "Sour",
		correctAnswer: "Sweet"
	},
	calico: {
		question: "Calico cats are almost always:",
		answerA: "Left pawed",
		answerB: "Female",
		answerC: "Friendly",
		answerD: "Finicky",
		correctAnswer: "Female"
	},
	hemingway: {
		question: "Hemingway cats are felines that have:",
		answerA: "Written a best-selling book",
		answerB: "An abnormally large head",
		answerC: "A cropped tail",
		answerD: "Extra toes",
		correctAnswer: "Extra toes"
	}
};

// Variables that will be needed later

var rightAnswer = 0;
var wrongAnswer = 0;
var timedOut = 0;
var timeRemaining;
var questionName;

// Display question with answers

$(document).ready(function() {
	displayQuestion(triviaQuestions.whiskers);
	$(".answer-choice").click(isWinner);
})

function displayQuestion (name) {

	$("#trivia-question").text(name.question);
	$("#answer-1").text(name.answerA);
	$("#answer-2").text(name.answerB);
	$("#answer-3").text(name.answerC);
	$("#answer-4").text(name.answerD);

	questionName = name;
}

// Set timer and display it

// Create logic for right and wrong answers, ran out of time

function isWinner () {
	if (this.text === questionName.correctAnswer) {
		rightAnswer++;
		$("#trivia-question").text("CORRECT!");
		$("#answer-1").text("CORRECT ANSWERS: " + rightAnswer);
		$("#answer-2").text("WRONG ANSWERS: " + wrongAnswer);
		$("#answer-3").text("OUT OF TIME: " + timedOut);
		$("#answer-4").empty();
	} else {
		wrongAnswer++;
		$("#trivia-question").text("WRONG!");
		$("#answer-1").text("CORRECT ANSWER: " + questionName.correctAnswer);
		$("#answer-2").text("CORRECT ANSWERS: " + rightAnswer);
		$("#answer-3").text("WRONG ANSWERS: " + wrongAnswer);
		$("#answer-4").text("OUT OF TIME: " + timedOut);
	}
}

// Display "you're correct" page

// Display "wrong!" page

// Display "out of time" page 