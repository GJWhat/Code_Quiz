import quizData from "./questions";
// timer

// var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById('main');
// var startBtn = document.getElementById('start');

var startButton = document.getElementById("start");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

// Add an event listener to the "Start Quiz" button
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.style.display = "none";
  questionContainer.classList.remove("hide");
  loadQuestion();
  startTimer();
}
function loadQuestion() {
  if (currentQuestionIndex < quizData.length) {
    var currentQuestion = quizData[currentQuestionIndex];

    // Update the question text
    questionElement.textContent = currentQuestion.question;

    // Clear previous answer buttons
    answerButtonsElement.innerHTML = "";

    // Create buttons for each answer choice
    currentQuestion.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.classList.add("choice-btn");
      button.addEventListener("click", () => handleAnswerClick(choice));
      answerButtonsElement.appendChild(button);
    });

    // Show the question container
    questionContainerElement.classList.remove("hide");
  } else {
    // No more questions, end the quiz
    endQuiz();
  }
}
