const nameInput = document.querySelector('#name-input');
const login = document.querySelector('.login');
const modal = document.querySelector('.modal');

let playerName = '';

login.onclick = () => {
    playerName = nameInput.value;
    modal.innerHTML = `<h1>Welcome ${playerName}`;
};
