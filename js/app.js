const nameInput = document.querySelector('#name-input');
const login = document.querySelector('.login');
const loginScreen = document.querySelector('.login-screen');
const menuScreen = document.querySelector('.menu-screen');

let playerName = '';

login.onclick = () => {
    playerName = nameInput.value;
    loginScreen.style.display = 'none';
    document.querySelector('#name-display').textContent = `Welcome ${playerName}!`;
    menuScreen.style.display= 'block';
};
