// To Do
// move variables out of global
// logic for selection menu
// logic for math problem generation
// scoring system




const nameInput = document.querySelector('#name-input');
const login = document.querySelector('.login');
const loginScreen = document.querySelector('#login-screen');
const menuScreen = document.querySelector('#menu-screen');
const mathSelection = document.querySelector('#math-selection');
const flashCard = document.querySelector('#flash-card');

let playerName = '';


// generate random numbers (0-10 for now)
const randomNumberGen = () => Math.floor(Math.random() * 10);

// generate math problem
const generateProblem = () => {
    const problemNumbers = document.querySelectorAll('.problem-numbers');
    problemNumbers[0].textContent = randomNumberGen();
    problemNumbers[1].textContent = randomNumberGen();
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
    generateProblem();
    console.log('math selection test');
};
