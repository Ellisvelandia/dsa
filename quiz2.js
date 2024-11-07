const questions = [
  {
    question: "What is javascript?",
    options: ["A programming language", "A type of car", "A food", "A drink"],
    answer: "A programming language",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markdown Language",
      "Hyper Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
];

let score = 0;

function displayQuestion(questionObject) {
  let userAnswer = prompt(
    questionObject.question + "\n" + questionObject.options.join("\n")
  );
  // Convert both strings to lowercase for case-insensitive comparison
  // We use && (AND) instead of || (OR) because we need BOTH conditions to be true:
  // 1. userAnswer must exist (not null/undefined from canceling prompt)
  // 2. The lowercase answer must match
  // Using || would increment score if EITHER condition was true, which is wrong
  if (
    userAnswer &&
    userAnswer.toLowerCase() === questionObject.answer.toLowerCase()
  ) {
    score++;
  }
}

for (let i = 0; i < questions.length; i++) {
  displayQuestion(questions[i]);
}

alert(`Your score: ${score}/${questions.length}`);
