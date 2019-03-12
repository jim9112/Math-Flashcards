const nameInput = document.querySelector('#name-input');
const login = document.querySelector('.login');
const modal = document.querySelector('.modal');

let playerName = '';

login.onclick = () => {
    playerName = nameInput.value;
    modal.innerHTML = `<h1>Welcome ${playerName}</h1><br> <form action="">
    <input type="radio" name="gender" value="addition"> Addition<br>
    <input type="radio" name="gender" value="subtraction"> Subtraction<br> 
    <input type="submit" value="Submit">
    </form>`;
};
