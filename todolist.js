let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text:"Learn Html"
    },
    {
        text:"Learn css"
    },
    {
        text:"Learn Js"
    }
];

function createAndAppendTodo(todo){

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container","d-flex","flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("lable-container","d-flex","flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for","checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("for","fa","fa-trash","delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
}

for(let todo of todoList){
    createAndAppendTodo(todo);
}