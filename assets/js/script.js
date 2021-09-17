
var formE1 = document.querySelector("#task-form");
var taskToDoE1 = document.querySelector("#tasks-to-do");


var CreateTaskHandler = function (event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("Input[name='task-name']").value;
    var taskTypeInput = document.querySelector("Input[name='task-type']").value;
    console.dir(taskNameInput);

    // create list item
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";
    
    // create div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
        taskInfoE1.className="task-info";

    // add HTML content to div
    taskInfoE1.innerHTML ="<h3 class-'task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemE1.appendChild(taskInfoE1);

    // add entire list item to list
    taskToDoE1.appendChild(listItemE1);
}

formE1.addEventListener("clicK", CreateTaskHandler);
