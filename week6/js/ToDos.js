function addTask(display, task, num) {
  if (task != "Empty") {
    // Create page elements
    const tr = document.createElement("tr");
    const box = document.createElement("input");
    const label = document.createElement("label");
    const label2 = document.createElement("label");

    // Add element attributes
    tr.setAttribute("id", `${task["value"]["id"]}`);
    box.setAttribute("id", `task ${num}`);
    box.setAttribute("type", "checkbox");
    box.setAttribute("onclick", `completeTask(${num})`);
    if (task["value"]["completed"] == "true") {
      box.checked = true;
      label.setAttribute("class", "complete");
    }
    label.setAttribute("for", `task ${num}`);
    label.textContent = task["value"]["content"];
    label2.textContent = "X";
    label2.setAttribute("onclick", `deleteTaskItem(${num})`);

    // Update document
    display.appendChild(tr);
    tr.appendChild(box);
    tr.appendChild(label);
    tr.appendChild(label2);
  }
}
