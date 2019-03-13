// To Do
// move variables out of global
// logic for selection menu
// scoring system
// mixed mode (addition and subtraction together)

const loginScreen = document.querySelector('#login-screen');
const menuScreen = document.querySelector('#menu-screen');
const flashCard = document.querySelector('#flash-card');
const problemNumbers = document.querySelectorAll('.problem-numbers');

const player = {
    playerName: '',
    score: 0
};

// generate random numbers (0-10 for now)
const randomNumberGen = () => Math.floor(Math.random() * 10);

// generate math problem
const generateProblem = (sign) => {
    var one = randomNumberGen();
    var two = randomNumberGen();
    
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
            generateProblem(sign);
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
    loginScreen.style.display = 'none';
    menuScreen.style.display = 'block';
};

// event listener for math selection
document.querySelector('#math-selection').onclick = (e) => {
    e.preventDefault();
    menuScreen.style.display = 'none';
    flashCard.style.display = 'block';
    if (document.querySelector('#addition').checked) {
        generateProblem('+');
    } else if (document.querySelector('#subtraction').checked){
        generateProblem('-');
    }
};
