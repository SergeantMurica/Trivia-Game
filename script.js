import questionsData from './utils/questionsData.js';

let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question and answer choices
function displayQuestion() {
    document.getElementById('score').innerHTML = `Current Score: ${score}`;
    const questionContainer = document.getElementById('question');
    const choicesContainer = document.getElementById('choices');

    // Clear previous content
    questionContainer.innerHTML = "";
    choicesContainer.innerHTML = "";

    // Display the question
    const question = questionsData[currentQuestionIndex];
    questionContainer.innerHTML = question.question;

    // Shuffle choices and create buttons dynamically
    const choices = [question.correctAnswer, ...question.incorrectAnswers].sort(() => Math.random() - 0.5);

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerHTML = choice;
        button.className = "choice-button"; // Add optional styling
        button.onclick = () => checkAnswer(choice);
        choicesContainer.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(selectedChoice) {
    const question = questionsData[currentQuestionIndex];

    if (selectedChoice === question.correctAnswer) {
        document.getElementById('result').innerHTML = "Correct!";
        score++;
    } else {
        document.getElementById('result').innerHTML = "Incorrect!";
    }

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsData.length) {
        displayQuestion();
    } else {
        gameOver();
    }
}

// Function to display the game over screen
function gameOver() {
    document.getElementById('question').innerHTML = "Game Over!";
    document.getElementById('result').innerHTML = `Final Score: ${score}`;
    document.getElementById('choices').innerHTML = ""; // Clear the buttons

    // Create a Restart button
    const restartButton = document.createElement('button');
    restartButton.innerHTML = "Restart Game";
    restartButton.onclick = restartGame; // Attach click event
    restartButton.className = "restart-button"; // Add optional styling
    document.getElementById('result').appendChild(restartButton); // Add button to the result area
}

// Function to restart the game
function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('result').innerHTML = ""; // Clear result area
    displayQuestion(); // Start the quiz again
}

// Initialize the quiz
displayQuestion();
