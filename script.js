const taskInput = document.getElementById("input-box");
const taskListContainer = document.getElementById("list-container");

function addTask() {
  if (taskInput.value === "") {
    alert("Please enter a task!");
  } else {
    let taskListItem = document.createElement("li");
    taskListItem.innerHTML = taskInput.value;
    taskListContainer.appendChild(taskListItem);
    let deleteButton = document.createElement("span");
    deleteButton.innerHTML = "\u00d7";
    taskListItem.appendChild(deleteButton);
  }
  taskInput.value = "";
  saveData();
}

taskListContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", taskListContainer.innerHTML);
}

function showTasks() {
  taskListContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
