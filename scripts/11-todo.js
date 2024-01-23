const todoList = [];

renderTodo();

function renderTodo(){

    let todolistHTML = '';

    for (let i = 0; i<todoList.length; i++){
        const todo = todoList[i];

        const html = `<p> ${todo}</p>`;
        //html generation  
        
        todolistHTML += html;
    }

    // console.log(todolistHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todolistHTML;
}
function addTodo (){
    const inputElement = document.querySelector('.js-inputtask')
    const task = inputElement.value
    // console.log(task)
    todoList.push(task)
    console.log(todoList)

    inputElement.value = '';

    renderTodo();
}