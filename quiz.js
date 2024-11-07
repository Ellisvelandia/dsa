const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Berlin",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Rome",
  },
];
let currentScore = 0;

// Get references to HTML elements
const questionText = document.querySelector(".question-text");
const optionsContainer = document.querySelector(".options");
const scoreDisplay = document.querySelector(".score");

// Keep track of current question
let currentQuestionIndex = 0;

// Function to check answer and update score
function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    currentScore++;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion(questions[currentQuestionIndex]);
  } else {
    // Quiz complete - show final score
    questionText.textContent = "Quiz Complete!";
    optionsContainer.innerHTML = "";
    scoreDisplay.textContent = `Final Score: ${currentScore}/${questions.length}`;
  }
}

// Function to display a single question
function displayQuestion(questionData) {
  questionText.textContent = questionData.question;
  optionsContainer.innerHTML = "";

  questionData.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () =>
      checkAnswer(option, questionData.answer)
    );
    optionsContainer.appendChild(button);
  });

  scoreDisplay.textContent = `Current Score: ${currentScore}/${questions.length}`;
}

// Start with first question
displayQuestion(questions[0]);

const quizContainer = document.querySelector(".quiz-container");
const quizResults = document.querySelector(".quiz-results");

quizContainer.appendChild(quizResults);

// Function to display quiz questions
function displayQuiz() {
  questions.forEach((question) => {
    const questionElement = document.createElement("div");
  });
}

displayQuiz();
