// To Do
// change classes to IDs and add a class to manage like formatting
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

login.onclick = () => {
    playerName = nameInput.value;
    loginScreen.style.display = 'none';
    document.querySelector('#name-display').textContent = `Welcome ${playerName}!`;
    menuScreen.style.display = 'block';
};

mathSelection.onclick = (e) => {
    e.preventDefault();
    menuScreen.style.display = 'none';
    flashCard.style.display = 'block';
    console.log('math selection test');
};