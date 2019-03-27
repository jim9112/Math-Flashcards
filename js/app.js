// To Do
// move variables out of global
// logic for selection menu
// scoring system
// mixed mode (addition and subtraction together)
// make name always start with a capitol letter

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

// possible new levels option
const testLevels = [
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
    // generate numbers used in problem
    let one = testLevels[player.level][0]();
    let two = testLevels[player.level][1]();
    
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
    
    // event listener for answer button
    document.querySelector('#answer-form').onsubmit = (e) => {
        e.preventDefault();
        const userAnswerInput = document.querySelector('#answer');
        const userAnswer = parseInt(userAnswerInput.value);
        if (realAnswer === userAnswer) {
            alert('Correct');
            player.score += 1;
            checkScore();
            generateProblem();
            userAnswerInput.value = '';
        } else {
            alert('Try again');
            player.score -= 1;
            checkScore();
            userAnswerInput.value = '';
        }
    };
};

// sign in menu
document.querySelector('#name-form').onsubmit = (e) => {
    e.preventDefault();
    player.playerName = document.querySelector('#name-input').value;
    document.querySelector('#welcome-banner').textContent = `Welcome ${player.playerName}`;
    exitButton.style.display = 'block';
    loginScreen.style.display = 'none';
    menuScreen.style.display = 'block';
};

// event listener for math selection
document.querySelector('#math-selection').onsubmit = (e) => {
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
    document.querySelector('#name-input').value = '';
    loginScreen.style.display = 'block';
    menuScreen.style.display = 'none';
    flashCard.style.display = 'none';
    exitButton.style.display = 'none';
};