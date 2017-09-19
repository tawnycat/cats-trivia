// Objects with questions and answers

var triviaQuestions = [
{
	question: "A cat has how many whiskers, on average?",
	answerA: "24",
	answerB: "16",
	answerC: "8",
	answerD: "12",
	correctAnswer: "24"
},
{
	question: "A term for a group of cats is:",
	answerA: "Clutch",
	answerB: "Caggle",
	answerC: "Covey",
	answerD: "Clowder",
	correctAnswer: "Clowder"
},
{
	question: "All of the following are the names of cat breeds, except:",
	answerA: "Balinese",
	answerB: "Birman",
	answerC: "Beauceron",
	answerD: "Burmilla",
	correctAnswer: "Beauceron"
},
{
	question: "Cats can't taste this:",
	answerA: "Sweet",
	answerB: "Bitter",
	answerC: "Salt",
	answerD: "Sour",
	correctAnswer: "Sweet"
},
{
	question: "Calico cats are almost always:",
	answerA: "Left pawed",
	answerB: "Female",
	answerC: "Friendly",
	answerD: "Finicky",
	correctAnswer: "Female"
},
{
	question: "Hemingway cats are felines that have:",
	answerA: "Written a best-selling book",
	answerB: "An abnormally large head",
	answerC: "A cropped tail",
	answerD: "Extra toes",
	correctAnswer: "Extra toes"
}
];

// Variables that will be needed later

var rightAnswer = 0;
var wrongAnswer = 0;
var timedOut = 0;
var questionObject;
var question = 0;
var questionInterval;
var postQuestionInterval;

// Display question with answers

$(document).ready(function() {
	
	displayQuestion(triviaQuestions[question]);
})

function displayQuestion (object) {

	$("#trivia-question").text(object.question);
	$("#answer-1").text(object.answerA);
	$("#answer-2").text(object.answerB);
	$("#answer-3").text(object.answerC);
	$("#answer-4").text(object.answerD);

	questionObject = object;

	questionInterval = setInterval(timeOut, 10000);

	$(".answer-choice").click(isWinner);
}

// Set timer and display it

// Create logic for right and wrong answers, ran out of time

function isWinner () {

	// Display "you're correct" page

	clearInterval(questionInterval);
	$(".answer-choice").off("click");


	if (this.text === questionObject.correctAnswer) {
		rightAnswer++;
		$("#trivia-question").text("CORRECT!");
		$("#answer-1").text("CORRECT ANSWERS: " + rightAnswer);
		$("#answer-2").text("WRONG ANSWERS: " + wrongAnswer);
		$("#answer-3").text("OUT OF TIME: " + timedOut);
		$("#answer-4").empty();
	} else {

		// Display "wrong!" page
		
		wrongAnswer++;
		$("#trivia-question").text("WRONG!");
		$("#answer-1").text("CORRECT ANSWER: " + questionObject.correctAnswer);
		$("#answer-2").text("CORRECT ANSWERS: " + rightAnswer);
		$("#answer-3").text("WRONG ANSWERS: " + wrongAnswer);
		$("#answer-4").text("OUT OF TIME: " + timedOut);
	}

	postQuestionInterval = setInterval(nextQuestion, 5000);

}

// Display "out of time" page 

function timeOut () {

	clearInterval(questionInterval);
	timedOut++;
	$("#trivia-question").text("OUT OF TIME!");
	$("#answer-1").text("CORRECT ANSWER: " + questionObject.correctAnswer);
	$("#answer-2").text("CORRECT ANSWERS: " + rightAnswer);
	$("#answer-3").text("WRONG ANSWERS: " + wrongAnswer);
	$("#answer-4").text("OUT OF TIME: " + timedOut);
	postQuestionInterval = setInterval(nextQuestion, 5000);

}

// Function that progresses the quiz to the next questions

function nextQuestion () {

		question++;

		// If there are no more questions, finishes the game and gives the final score

		if (question >= triviaQuestions.length) {

			$("#trivia-question").text("Total Score: " + rightAnswer + "/" + triviaQuestions.length + " Correct");
			$(".answer-choice").empty();

		} else {
			
			displayQuestion(triviaQuestions[question]);
			clearInterval(postQuestionInterval);

		};


	};