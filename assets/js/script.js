formE1.addEventListener("submit",CreateTaskHandler);
var taskToDoE1 = document.querySelector("#tasks-to-do");


var CreateTaskHandler = function () {

    event.preventDefault();

    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-itme";
    listItemE1.textContent = "This is a new task.";
    taskToDoE1.appendChild(listItemE1);
}

formE1.addEventListener("clicK", CreateTaskHandler);
