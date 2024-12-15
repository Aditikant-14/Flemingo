// script.js

const questions = [
  {
      question: "What is the correct pronunciation of 'schedule'?",
      options: ["sked-jool", "shed-yool", "skid-yool", "sheed-jool"],
      correct: "sked-jool",
  },
  {
      question: "What is the correct pronunciation of 'often'?",
      options: ["of-tun", "off-tun", "off-en", "oft-en"],
      correct: "off-en",
  },
  {
      question: "What is the correct pronunciation of 'tomato'?",
      options: ["to-may-to", "to-mah-to", "to-ma-to", "ta-mah-to"],
      correct: "to-may-to",
  },
  // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;
let timer = 60;

// Load question and options
function loadQuestion() {
  const questionBox = document.getElementById("question");
  const optionsBox = document.getElementById("options");
  const progress = document.getElementById("progress");

  questionBox.innerText = questions[currentQuestion].question;
  optionsBox.innerHTML = "";
  progress.innerText = `Question ${currentQuestion + 1}/50`;

  questions[currentQuestion].options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.onclick = () => checkAnswer(button);
      button.onmouseover = () => speak(option); // Speak option on hover
      optionsBox.appendChild(button);
  });

  speak(questions[currentQuestion].question); // Speak question
}

// Check the answer
function checkAnswer(button) {
  if (button.innerText === questions[currentQuestion].correct) {
      button.classList.add("correct");
      score++;
  } else {
      button.classList.add("wrong");
  }

  setTimeout(() => {
      loadNextQuestion();
  }, 1000);
}

// Load next question
function loadNextQuestion() {
  if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      timer = 60;
      loadQuestion();
  } else {
      alert(`Quiz Complete! Your Score: ${score}`);
  }
}

// Speak text using SpeechSynthesis
function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US"; // Set language
  synth.speak(utterance);
}

// Timer logic
function startTimer() {
  setInterval(() => {
      if (timer > 0) {
          timer--;
          document.getElementById("timer").innerText = timer;
      } else {
          loadNextQuestion();
      }
  }, 1000);
}

// Initialize quiz
window.onload = () => {
  loadQuestion();
  startTimer();
};
