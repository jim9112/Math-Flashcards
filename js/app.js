// To Do
// change classes to IDs and add a class to manage like formatting




const nameInput = document.querySelector('#name-input');
const login = document.querySelector('.login');
const loginScreen = document.querySelector('#login-screen');
const menuScreen = document.querySelector('#menu-screen');
const mathSelection = document.querySelector('#math-selection');

let playerName = '';

login.onclick = () => {
    playerName = nameInput.value;
    loginScreen.style.display = 'none';
    document.querySelector('#name-display').textContent = `Welcome ${playerName}!`;
    menuScreen.style.display= 'block';
};

mathSelection.onclick = (e) => {
    e.preventDefault();
    console.log('math selection test');
};