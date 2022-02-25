let todos = []

const createTask = (e) => {
    e.preventDefault()
    let message = document.getElementById('text')
    let descr = document.getElementById('second')
    // console.log(message.value)

    if (message.value.length >= 3) {
        let todo = {
            id: todos.length === 0 ? 1 : todos[todos.length-1].id + 1,
            message: message.value,
            descr: descr.value,
            status: false,
            date: new Date()

        }
        todos.push(todo)
        console.log(todos)
        message.value=''
        descr.value=''
        renderTodos()
    }else{
        alert('Minimum length is 3 symbols')
    }
}



const renderTodos = () =>{
    const output = document.getElementById('output')
    output.innerHTML=''

    todos.map(todo =>{
        // console.log(todo)
        let block = document.createElement('div')
        block.style.background=todo.status===true?'ligth':'coral'

        let mess = document.createElement('h2')
        let date = document.createElement('p')
        let descr = document.createElement('h2')

        let reminder = document.createElement('p')

        let del = document.createElement('button')
        let edit = document.createElement('button')
        let done = document.createElement('button')
        let descr_btn = document.createElement('button')

        mess.textContent = `Name: ${todo.message}`

        descr.textContent = `description: ${todo.descr}`

        let current_date = todo.date
        date.textContent = `
        Todo was created ${current_date.getDate()} -
        ${current_date.getMonth()+1}  
        - ${current_date.getFullYear()} 
        ${current_date.getHours()} : ${current_date.getMinutes()} : ${current_date.getSeconds()}
      `
        
     

        del.textContent='Delete'
        edit.textContent='Edit'
        descr_btn.textContent='descr'
        done.textContent='Done'


        
        done.style.display=todo.status===true?'none':'inline'

        todo.status?reminder.textContent='Todo is Comleted':null



        done.addEventListener('click',()=>{
            doneTodo(todo.id)
            console.log(todo.id)
        })

        del.addEventListener('click',()=>{

           todo.status === true? deleteTodo(todo.id):alert('todo is not done')
        })

        edit.addEventListener('click',()=>{
            editTodo(todo.id)
        })
        descr_btn.addEventListener('click',()=>{
            descriptionTodo(todo.id)
        })
    
  
        

        block.append(mess,descr,date,reminder,del,edit,descr_btn,done)
        output.append(block)


    })
}


const descriptionTodo = (id) =>{
    todos.map(el=>{

   
        if(id==el.id){
            let newDescription = prompt('edit desciprtion')
            if(newDescription==null || newDescription=='' || newDescription.trim()==''){
                el.descr
            }else if(newDescription.length<=3){
                alert('Minimum length is 3 symbols')
            }else{
                console.log(newDescription)
                el.descr=newDescription
                renderTodos()
            }
        
        }
    })
    }




const doneTodo = (id) =>{
    todos.map(el=>{
        // console.log(el)
        if(id==el.id){
            el.status = true
            renderTodos()
        }
    })
}


const deleteTodo = (id) =>{
    todos = todos.filter(el=>el.id != id)
    renderTodos()
}

const editTodo = (id) =>{
    todos.map(el=>{
        // console.log(el)
        if(id==el.id){ 
            let newMessage = prompt('Edit Todo')
            if(newMessage==null || newMessage=='' || newMessage.trim()==''){
                el.message
            }else if(newMessage.length<=3){
                alert('Minimum length is 3 symbols')
            }else{
                console.log(newMessage)
                el.message=newMessage
                renderTodos()
            }
        }
    })
}


"use strict";

const form = document.getElementById("form");
const todoInput = document.getElementById('input');
const todosList = document.getElementById("todos");

function addToDo(todo) {
    let todoText = todoInput.value;
    if(todo) {
        todoText = todo.text;
    }
    if(todoText) {
        const todoEl = document.createElement('li');
        if(todo && todo.completed) {
            todoEl.classList.add('completed');
        }
        todoEl.innerText = todoText;
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLocalStorage();
        });
        todoEl.addEventListener('contextmenu', (eve) => {
            eve.preventDefault();
            todoEl.remove();
            updateLocalStorage();
        });
        todosList.appendChild(todoEl);
        todoInput.value = '';
        updateLocalStorage();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addToDo();
});

function updateLocalStorage() {
    const todosEl = document.querySelectorAll('li');
    const todos = [];
    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

const todosSaves = JSON.parse(localStorage.getItem('todos'));

if(todosSaves) {
    todosSaves.forEach(todo => addToDo(todo));
}



// ===new Date===
// console.log(new Date())
// console.log(new Date().getDate())
// console.log(new Date().getMonth()+1)
// console.log(new Date().getFullYear())
// console.log(new Date().getHours())
// console.log(new Date().getMinutes())
// console.log(new Date().getSeconds())