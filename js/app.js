// To Do
// move variables out of global
// scoring system


const loginScreen = document.querySelector('#login-screen');
const menuScreen = document.querySelector('#menu-screen');
const flashCard = document.querySelector('#flash-card');
const problemNumbers = document.querySelectorAll('.problem-numbers');
const exitButton = document.querySelector('#exit');
const levelDisplay = document.querySelector('#level-display');
const scoreDisplay = document.querySelector('#score-display');


// ******************************************* Variables Used for levels and game data *********************************
let realAnswer;

const player = {
    playerName: '',
    score: 0,
    level: 0,
    gameMode: '',
};

// levels option
const levels = [
    [() => Math.floor(Math.random() * 11), () => Math.floor(Math.random() * 10)],
    [() => Math.floor(Math.random() * 5) + 10,() => Math.floor(Math.random() * 10)],
    [() => Math.floor(Math.random() * 10) + 10,() => Math.floor(Math.random() * 10)]
];

// add a min and a max to the problem generation based on the current level
const checkScore = () => {
    if (player.score < 10) {
        player.level = 0;
    } else if (player.score >= 10 && player.score < 20) {
        player.level = 1;
    } else if (player.score >= 20) {
        player.level = 2;
    }
};

// ******************************************* Change card Background and colors ***************************************
// wrong answer
const wrongAnswer = () => {
    flashCard.style.backgroundColor = "red";
    document.querySelector('#answer-button').innerHTML = 'Incorrect <br> Try Again';
};

// Correct answer
const correctAnswer = () => {
    flashCard.style.backgroundColor = "green";
    document.querySelector('#answer-button').innerHTML = 'Correct <br> Next Question';
};

// reset background color and button text
const cardReset = () => {
    flashCard.style.backgroundColor = "white";
    document.querySelector('#answer-button').innerHTML = 'Check <br> Answer';
};
// change level and score display
const changeScore = () => {
    levelDisplay.textContent = player.level;
    scoreDisplay.textContent = player.score;
};


// ******************************************* Generate Math Problems **************************************************
const generateProblem = () => {
    // update player level
    changeScore();
    cardReset();
    // adjust sign used in math problem
    let sign = '';
    if (player.gameMode === 'addition') {
        sign = '+';
    } else if (player.gameMode === 'subtraction') {
        sign = '-';
    } else if (player.gameMode === 'mixed') {
        // randomize addition and subtraction on mixed
        let temp = Math.floor(Math.random() * 2) + 1;
        if (temp === 1) {
            sign ='+';
        } else if (temp === 2){
            sign = '-';
        }
    }
    // generate numbers used in problem
    let one = levels[player.level][0]();
    let two = levels[player.level][1]();
    
    // larger number on top
    if (one > two) {
        problemNumbers[0].textContent = one;
        problemNumbers[1].textContent = two;
    } else {
        problemNumbers[1].textContent = one;
        problemNumbers[0].textContent = two;
    }
    document.querySelector('#sign').textContent = sign;
    checkAnswer(sign);
};

// checks the users answer
const checkAnswer = (sign) => {
    var one = parseInt(problemNumbers[0].textContent);
    var two = parseInt(problemNumbers[1].textContent);
    
    if (sign === '+') {
        realAnswer = one + two;
    } else if (sign === '-') {
        realAnswer = one - two;
    }
};

// ******************************************* Event Listeners for Buttons *********************************************

// answer button submit
document.querySelector('#answer-form').onsubmit = (e) => {
    e.preventDefault();
    const userAnswerInput = document.querySelector('#answer');
    const userAnswer = parseInt(userAnswerInput.value);
    
    if(flashCard.style.backgroundColor === "green") {
        generateProblem();
        userAnswerInput.value = '';
    } else {
        if (realAnswer === userAnswer) {
            correctAnswer();
            player.score += 1;
            changeScore();
            checkScore();
        } else {
            wrongAnswer();
            player.score -= 1;
            changeScore();
            checkScore();
            userAnswerInput.value = '';
        } 
    }
};

// event listener for math selection
document.querySelector('#math-selection').onsubmit = (e) => {
    e.preventDefault();
    menuScreen.style.display = 'none';
    flashCard.style.display = 'block';
    changeScore();
    if (document.querySelector('#addition').checked) {
        player.gameMode = 'addition';
        generateProblem();
    } else if (document.querySelector('#subtraction').checked){
        player.gameMode = 'subtraction';
        generateProblem();
    } else if (document.querySelector('#mixed').checked){
        player.gameMode = 'mixed';
        generateProblem();
    }
    exitButton.style.display = 'block';
};

// exit button
exitButton.onclick = () => {
    player.playerName = '';
    player.score = 0;
    player.level = 0;
    changeScore();
    menuScreen.style.display = 'block';
    flashCard.style.display = 'none';
    exitButton.style.display = 'none';
};