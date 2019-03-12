const nameInput = document.querySelector('#name-input');
const login = document.querySelector('.login');



login.onclick = () => {
    let playerName = nameInput.value;
    console.log(playerName);
};
