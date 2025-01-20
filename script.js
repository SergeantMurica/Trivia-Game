import questionsData from './utils/questionsData.js';

let questions = [];
let currentQuestionIndex = 0;
let currentChoices;
let correctAnswer;
let score = 0;

function loadQuestions() {
    if (Array.isArray(questionsData) && questionsData.length > 0) {
        questions = questionsData;
    } else {
        console.error("Questions data is invalid or empty.");
        alert("Failed to load questions. Please try again later.");
    }
}

function displayQuestion() {
    if (questions.length === 0) return;

    document.getElementById("score").innerHTML = "Current Score: " + score;
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerHTML = currentQuestion.question;

    currentChoices = [currentQuestion.correctAnswer].concat(
        currentQuestion.incorrectAnswers
    );
    correctAnswer = currentQuestion.correctAnswer;
    currentChoices.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`choice${i + 1}`);
        btn.innerHTML = currentChoices[i];
        btn.value = currentChoices[i];
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("result").innerHTML = "Quiz Completed!";
    }
}

function checkAnswer(button) {
    if (questions.length === 0) return;

    if (button.innerHTML === questions[currentQuestionIndex].correctAnswer) {
        document.getElementById("result").innerHTML = "Correct!";
        score++;
    } else {
        document.getElementById("result").innerHTML = "Incorrect!";
        score--;
    }
    nextQuestion();
}

function initializeQuiz() {
    loadQuestions();
    if (questions.length > 0) {
        displayQuestion();
    }
}

initializeQuiz();

