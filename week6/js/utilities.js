const display = document.querySelector("tbody");
let tasks = document.getElementById("tasks-remaining");
let taskInput = document.getElementById("task-input");
const add = document.getElementById("add-button");
const showAll = document.getElementById("all");
const showActive = document.getElementById("active");
const showComplete = document.getElementById("complete");
const taskList = ["Empty"];
let active = 0;

function updateRemaining() {
  tasks.textContent =
    active == 1 ? `${active} task left` : `${active} tasks left`;
}

function addTaskItem() {
  if (taskInput.value != "") {
    const newTask = {
      id: Date.now(),
      content:
        taskInput.value.charAt(0).toUpperCase() + taskInput.value.slice(1),
      completed: "false",
    };
    const keyNum = saveTask(newTask);
    taskList.push({ key: keyNum, value: newTask });
    addTask(display, taskList[taskList.length - 1], keyNum);
    active += 1;
    taskInput.value = "";
    updateRemaining();
  }
}

function completeTask(id) {
  const task = taskList[id];
  const item = document.getElementById(`${task["value"]["id"]}`).children[1];
  let complete = "true";
  if (item.classList.contains("complete")) {
    item.classList.remove("complete");
    complete = "false";
    active += 1;
  } else {
    item.classList.add("complete");
    active -= 1;
  }
  const update = {
    id: task["value"]["id"],
    content: item.textContent,
    completed: complete,
  };
  localStorage.setItem(`task ${id}`, JSON.stringify(update));
  updateRemaining();
}

function deleteTaskItem(id) {
  const task = `task ${id}`;
  if (taskList[id]["value"]["completed"] == "false") {
    active -= 1;
    updateRemaining();
  }
  document.getElementById(taskList[id]["value"]["id"].toString()).remove();
  taskList[id] = "Empty";
  deleteTask(task);
}

function show(type) {
  for (i = 0; i < taskList.length; i++) {
    if (taskList[i] != "Empty") {
      const task = document.getElementById(taskList[i]["value"]["id"]);
      const item = task.children[1].classList;
      if (type == "all") {
        if (task.classList.contains("hidden")) {
          task.classList.remove("hidden");
        }
        showAll.style.border = "1px solid #000";
        showActive.style.border = "none";
        showComplete.style.border = "none";
      } else if (type == "complete") {
        if (item.contains("complete")) {
          task.classList.remove("hidden");
        } else {
          task.classList.add("hidden");
        }
        showAll.style.border = "none";
        showActive.style.border = "none";
        showComplete.style.border = "1px solid #000";
      } else {
        if (item == "") {
          task.classList.remove("hidden");
        } else {
          task.classList.add("hidden");
        }
        showAll.style.border = "none";
        showActive.style.border = "1px solid #000";
        showComplete.style.border = "none";
      }
    }
  }
}

getTasks(taskList);

taskList.forEach((task) => {
  const num = task["key"];
  addTask(display, task, num);
  if (task != "Empty") {
    if (task["value"]["completed"] == "false") {
      active += 1;
    }
  }
});

updateRemaining();

add.addEventListener("click", addTaskItem);

taskInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addTaskItem();
  }
});
