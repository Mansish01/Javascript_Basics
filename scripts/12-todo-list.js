const todoList = [];

renderTodo();

function renderTodo(){

    let todolistHTML = '';

    todoList.forEach(function (todoObject, index){

        const name = todoObject.name;
        const date = todoObject.deuDate;

        const html = `
            <div>${name} </div>
            <div>${date} </div>
            <button onclick = "
                todoList.splice(${index}, 1);
                renderTodo();
          " class="delete-btn">Delete</button>
        `;
        //html generation  

        
        todolistHTML += html;
    })

    // console.log(todolistHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todolistHTML;
}
    // for (let i = 0; i<todoList.length; i++){
    //     const todoObject = todoList[i];

    //     const name = todoObject.name;
    //     const date = todoObject.deuDate;

    //     const html = `
    //         <div>${name} </div>
    //         <div>${date} </div>
    //         <button onclick = "
    //             todoList.splice(${i}, 1);
    //             renderTodo();
    //       " class="delete-btn">Delete</button>
    //     `;
    //     //html generation  

        
    //     todolistHTML += html;
    // }

    // // console.log(todolistHTML);

    // document.querySelector('.js-todo-list')
    //     .innerHTML = todolistHTML;

function addTodo (){
    const inputElement = document.querySelector('.js-inputtask');
    const task = inputElement.value;
    // console.log(task)

    const inputDate = document.querySelector('.js-duedate');
    const date = inputDate.value;

    todoList.push({
        name : task,
        deuDate : date,
    })

    // console.log(todoList)

    inputElement.value = '';

    renderTodo();
}