const questions = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Quetta"],
    answer: 2,
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "Python", "CSS", "Java"],
    answer: 2,
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperLoop Machine Language",
      "HyperText Main Logic",
    ],
    answer: 0,
  },
  {
    question: "Which programming language is used for web development?",
    options: ["JavaScript", "C++", "Python", "Swift"],
    answer: 0,
  },
  {
    question: "What is the full form of CSS?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets",
    ],
    answer: 0,
  },
  {
    question: "Which tag is used to add an image in HTML?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: 0,
  },
  {
    question: "What is the default port for HTTP?",
    options: ["80", "21", "443", "8080"],
    answer: 0,
  },
  {
    question: "Which symbol is used for IDs in CSS?",
    options: [".", "#", "*", "$"],
    answer: 1,
  },
];

let currentQuestionIndex = 0;

function displayQuestion() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = "";
  const quizText = document.createElement("h1");

  quizText.textContent = questions[currentQuestionIndex].question;
  quizContainer.appendChild(quizText);

  questions[currentQuestionIndex].options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.innerText = option;
    optionButton.classList.add("option-btn");

    optionButton.addEventListener("click", () => checkAnswer(index));
    quizContainer.appendChild(optionButton);
  });
}

let score = 0;
function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestionIndex].answer) {
    score++;
    alert("Correct answer");
  } else {
    alert("Wrong answer");
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = "";

  const resultText = document.createElement("h1");
  resultText.innerHTML = `<h1> QUIZ COMPLETE </h1> 
<p> Your Score Is ${score}
<button onclick="restartQuiz()">Restart Quiz</button>

`;
  quizContainer.appendChild(resultText);
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion();
}

document
  .getElementById("start-quiz")
  .addEventListener("click", displayQuestion);
