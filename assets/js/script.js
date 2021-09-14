console.log(window.document);
console.dir(window.document);

var buttonE1 = document.querySelector("#save-task");
var taskToDoE1 = document.querySelector("#tasks-to-do");


var CreateTaskHandler = function () {
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-itme";
    listItemE1.textContent = "This is a new task.";
    taskToDoE1.appendChild(listItemE1);
}

buttonE1.addEventListener("clicK", crateTaskHandler);