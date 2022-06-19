// input 입력시 todo 저장
let todosIn = document.querySelector('#todos');
let todoInput = document.querySelector('#todoInput');
// let todolist = document.querySelector('#todolist');
let todoBox = localStorage.getItem('todoBox');


/*
    로컬스토리지의 VALUE 형태 
    [{"value":"study"}, {"value":"sleep well"}]

    1. 부모 list의 index를 얻을수 있음
    2. 화면에서 삭제
    3. todoBox에서 해당 index 배열 삭제
    4. 다시 리스트업
*/

// 처음 화면 생성시 리스트업
let listUp = () => {
    let li = '';
    let todo_list = localStorage.getItem('todoBox');
    let parse_todo = JSON.parse(todo_list);
    let content = ''

    if (parse_todo) {
        for (let i = 0; i < parse_todo.length; i++) {
            content = parse_todo[i].value;
            li += `
            <li>
                <span>${content}</span>
                <i class="x-icon" onclick="remove(this)"></i>
            </li>
            `
        }
    }

    if (li) {
        todolist.innerHTML = li;
    } else {
        todolist.innerHTML = ``;
    }
}

// new todo
todosIn.addEventListener('submit', (e) => {
    e.preventDefault();

    let todo_list2 = localStorage.getItem('todoBox');
    // console.log(todo_list2);

    if (todo_list2) {
        let newTodo = todoInput.value;
        todoInput.value = '';

        let todo_list3 = JSON.parse(todo_list2);

        todo_list3.push({
            "value": `${newTodo}`
        });

        localStorage.setItem('todoBox', JSON.stringify(todo_list3));

        // console.log(localStorage.getItem('todoBox'));

        listUp();

    } else {
        newTodo = todoInput.value;
        todoInput.value = '';

        let ne = [{
            "value": `${newTodo}`
        }]

        localStorage.setItem('todoBox', JSON.stringify(ne));
        listUp();

    }
})

// 투두 삭제하면 해당 list 삭제

let remove = (e) => {
    let pan = e.parentNode; //li
    let morepan = pan.parentNode; //ul
    let li_value = pan.querySelector('span').textContent;
    pan.remove();

    let boxs = localStorage.getItem('todoBox');
    let boxs2 = JSON.parse(boxs)
    let new_li = boxs2.filter(box => box.value !== li_value);

    localStorage.setItem('todoBox', JSON.stringify(new_li));
    listUp();

    // console.log(localStorage.getItem('todoBox'))
}


setTimeout(listUp);