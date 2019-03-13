// To Do
// move variables out of global
// logic for selection menu
// scoring system




const nameInput = document.querySelector('#name-input');
const login = document.querySelector('.login');
const loginScreen = document.querySelector('#login-screen');
const menuScreen = document.querySelector('#menu-screen');
const mathSelection = document.querySelector('#math-selection');
const flashCard = document.querySelector('#flash-card');
const problemNumbers = document.querySelectorAll('.problem-numbers');

let playerName = '';


// generate random numbers (0-10 for now)
const randomNumberGen = () => Math.floor(Math.random() * 10);

// generate math problem
const generateProblem = () => {
    problemNumbers[0].textContent = randomNumberGen();
    problemNumbers[1].textContent = randomNumberGen();
    checkAnswer();
};

// checks the users answer
const checkAnswer = () => {
    var one = parseInt(problemNumbers[0].textContent);
    var two = parseInt(problemNumbers[1].textContent);
    var realAnswer = one + two;
    const answerButton = document.querySelector('#answer-button');
    answerButton.onclick = () => {
        const userAnswerInput = document.querySelector('#answer')
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
login.onclick = () => {
    playerName = nameInput.value;
    loginScreen.style.display = 'none';
    document.querySelector('#name-display').textContent = `Welcome ${playerName}!`;
    menuScreen.style.display = 'block';
};

// event listener for math selection
mathSelection.onclick = (e) => {
    e.preventDefault();
    menuScreen.style.display = 'none';
    flashCard.style.display = 'block';
    generateProblem();;
};
