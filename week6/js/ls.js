function saveTask(newtask) {
  let num = 0;
  Object.keys(localStorage).forEach((item) => {
    const keyNum = parseInt(item.charAt(item.length - 1));
    if (keyNum != "" & keyNum > num) {
      num = keyNum;
    }
  });
  num += 1;
  localStorage.setItem(`task ${num}`, JSON.stringify(newtask));
  return num;
}

function deleteTask(task) {
  localStorage.removeItem(task);
}

// Get to do list
function getTasks(taskList) {
  let place = 0;
  Object.keys(localStorage).forEach((item) => {
    const num = parseInt(item.slice(-1));
    while (num > place) {
      taskList.push("Empty");
      place += 1;
    }
    taskList[num] = {key: num, value: JSON.parse(localStorage.getItem(item))};
  });
}
