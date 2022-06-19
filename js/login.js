// 로컬스토리지 체크후 자동 로그인 or 이름 입력

let nameForm = document.querySelector('#name');
let todos = document.querySelector('#todos');
let todolist = document.querySelector('#todolist');
let new_login = document.querySelector('#new_login');
let loginInput = document.querySelector('#loginInput');



let ChkLogin = () => {
    let userId = localStorage.getItem('name');
    if (userId == "" || userId == null || userId == undefined) {
        new_login.classList.add('on');
    } else {
        new_login.classList.remove('on');        
        nameForm.classList.add('on');
        todos.classList.add('on');
        todolist.classList.add('on');
        nameForm.innerText = `Hello, ${userId} !!`
    }
}

new_login.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('name', loginInput.value);
    ChkLogin();
})

setTimeout(ChkLogin);