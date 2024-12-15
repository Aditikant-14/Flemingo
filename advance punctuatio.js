let quizData = [
    {
        question: "Which sentence uses the Oxford comma correctly? 🤔",
        options: [
            "I bought apples, oranges, and bananas.",
            "I bought apples, oranges and bananas."
        ],
        answer: "I bought apples, oranges, and bananas."
    },
    {
        question: "Which sentence correctly uses a semicolon? 🤔",
        options: [
            "I love reading; it's my favorite hobby.",
            "I love reading, it's my favorite hobby."
        ],
        answer: "I love reading; it's my favorite hobby."
    },
    {
        question: "Which sentence uses a colon correctly? 🤔",
        options: [
            "I have three things to do: buy groceries, clean the house, and study.",
            "I have three things to do, buy groceries, clean the house, and study."
        ],
        answer: "I have three things to do: buy groceries, clean the house, and study."
    },
    {
        question: "Which sentence uses an exclamation mark correctly? 🤔",
        options: [
            "I can't believe it! That's amazing!",
            "I can't believe it, that's amazing!"
        ],
        answer: "I can't believe it! That's amazing!"
    },
    // Add more quiz questions and answers here (up to 20)
];

let currentQuestionIndex = 0;

function startQuiz() {
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    showQuestion();
}

function showQuestion() {
    const quizContainer = document.getElementById("quizQuestions");
    const currentQuestion = quizData[currentQuestionIndex];
    let options