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
},
{
	question: "What country was the first to send a cat into space?",
	answerA: "USA",
	answerB: "France",
	answerC: "China",
	answerD: "Russia",
	correctAnswer: "France"
},
{
	question: "If a male cat is called a tom, what is a female cat called?",
	answerA: "Molly",
	answerB: "Holly",
	answerC: "Sally",
	answerD: "Sue",
	correctAnswer: "Molly"
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
var time = 15;
var displayTimer;

// Display question with answers

$(document).ready(function() {

	$("#trivia-question").text("Start!");
	
	$("#trivia-question").click(function() { 

		$("#trivia-question").off("click");

		displayQuestion(triviaQuestions[question]);
		rightAnswer = 0;
		wrongAnswer = 0;
		timedOut = 0;

	});
})


function displayQuestion (object) {

	// Displays timer for the user

	clearInterval(displayTimer);
	clearInterval(questionInterval);

	time = 15;
	displayTimer = setInterval(decrement, 1000);

	$("#trivia-question").text(object.question);
	$("#answer-1").text(object.answerA);
	$("#answer-2").text(object.answerB);
	$("#answer-3").text(object.answerC);
	$("#answer-4").text(object.answerD);
	$("#time-left").text(time + " seconds remaining")

	questionObject = object;
 
	// Timer that moves the game forward

	questionInterval = setInterval(timeOut, 15000);

	$(".answer-choice").click(isWinner);


}

function decrement() {

	time--;

	$("#time-left").text(time + " seconds remaining");

}

function isWinner () {

	// Display "you're correct" page

	clearInterval(questionInterval);
	clearInterval(displayTimer);
	$(".answer-choice").off("click");
	$("#time-left").empty();


	if ($(this).text() === questionObject.correctAnswer) {
		rightAnswer++;
		$("#trivia-question").text("CORRECT!");
		$("#answer-1").text("CORRECT ANSWERS: " + rightAnswer);
		$("#answer-2").text("WRONG ANSWERS: " + wrongAnswer);
		$("#answer-3").text("UNANSWERED QUESTIONS: " + timedOut);
		$("#answer-4").empty();
	} else {

		// Display "wrong!" page
		
		wrongAnswer++;
		$("#trivia-question").text("WRONG!");
		$("#answer-1").text("CORRECT ANSWER: " + questionObject.correctAnswer);
		$("#answer-2").text("CORRECT ANSWERS: " + rightAnswer);
		$("#answer-3").text("WRONG ANSWERS: " + wrongAnswer);
		$("#answer-4").text("UNANSWERED QUESTIONS: " + timedOut);
	}

	postQuestionTimeout = setTimeout(nextQuestion, 5000);

}

// Display "out of time" page 

function timeOut () {

	clearInterval(questionInterval);
	clearInterval(displayTimer);
	timedOut++;

	$(".answer-choice").off("click");

	$("#trivia-question").text("OUT OF TIME!");
	$("#answer-1").text("CORRECT ANSWER: " + questionObject.correctAnswer);
	$("#answer-2").text("CORRECT ANSWERS: " + rightAnswer);
	$("#answer-3").text("WRONG ANSWERS: " + wrongAnswer);
	$("#answer-4").text("UNANSWERED QUESTIONS: " + timedOut);
	$("#time-left").empty();
	postQuestionTimeout = setTimeout(nextQuestion, 5000);

}

// Function that progresses the quiz to the next questions

function nextQuestion () {

	question++;

		// If there are no more questions, finishes the game and gives the final score

		if (question >= triviaQuestions.length) {

			// Give different statements depending on how well the user did

			if (rightAnswer >= 6) {

				$("#trivia-question").text("Fantastic!");

			} else if (rightAnswer >= 4) {

				$("#trivia-question").text("Okay!");

			} else if (rightAnswer >= 2) {

				$("#trivia-question").text("Better luck next time!");

			} else {

				$("#trivia-question").text("Not so great...");

			}

			$("#answer-1").text("CORRECT ANSWERS: " + rightAnswer);
			$("#answer-2").text("WRONG ANSWERS: " + wrongAnswer);
			$("#answer-3").text("UNANSWERED QUESTIONS: " + timedOut);
			$("#answer-4").text("Play again?");
			$("#time-left").empty();
			clearInterval(displayTimer);
			clearInterval(questionInterval);

			// Lets the user start the quiz again

			$("#answer-4").click(function() { 

				question = 0;

				$("#answer-4").off("click");

				displayQuestion(triviaQuestions[question]);
				rightAnswer = 0;
				wrongAnswer = 0;
				timedOut = 0;

			});


		} else {

			time = 15;
			displayQuestion(triviaQuestions[question]);


		};


	};