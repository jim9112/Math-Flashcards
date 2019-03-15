// To Do
// move variables out of global
// logic for selection menu
// scoring system
// mixed mode (addition and subtraction together)

const loginScreen = document.querySelector('#login-screen');
const menuScreen = document.querySelector('#menu-screen');
const flashCard = document.querySelector('#flash-card');
const problemNumbers = document.querySelectorAll('.problem-numbers');
const exitButton = document.querySelector('#exit');



const player = {
    playerName: '',
    score: 0,
    level: 0,
    gameMode: '',
};

// generate random numbers (0-10 for now)
const randomNumberGen = () => Math.floor(Math.random() * 10);

// generate math problem
const generateProblem = () => {
    let sign = '';
    if (player.gameMode === 'addition') {
        sign = '+';
    } else if (player.gameMode === 'subtraction') {
        sign = '-';
    } else if (player.gameMode === 'mixed') {
        let temp = Math.floor(Math.random() * 2) + 1;
        if (temp === 1) {
            sign ='+';
        } else if (temp === 2){
            sign = '-';
        }
    }

    let one = randomNumberGen();
    let two = randomNumberGen();
    
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
    var realAnswer;
    if (sign === '+') {
        realAnswer = one + two;
    } else if (sign === '-') {
        realAnswer = one - two;
    }
    
    const answerButton = document.querySelector('#answer-button');
    answerButton.onclick = () => {
        const userAnswerInput = document.querySelector('#answer');
        const userAnswer = parseInt(userAnswerInput.value);
        if (realAnswer === userAnswer) {
            alert('Correct');
            generateProblem();
            userAnswerInput.value = '';
        } else {
            alert('Try again');
            userAnswerInput.value = '';
        }
    };
};
// event listener for name input
document.querySelector('.login').onclick = () => {
    player.playerName = document.querySelector('#name-input').value;
    exitButton.style.display = 'block';
    loginScreen.style.display = 'none';
    menuScreen.style.display = 'block';
};

// event listener for math selection
document.querySelector('#math-selection').onclick = (e) => {
    e.preventDefault();
    menuScreen.style.display = 'none';
    flashCard.style.display = 'block';
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
};

// exit button
exitButton.onclick = () => {
    player.playerName = '';
    player.score = 0;
    loginScreen.style.display = 'block';
    menuScreen.style.display = 'none';
    flashCard.style.display = 'none';
    exitButton.style.display = 'none';
};