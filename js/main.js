const URL = "https://antonio-saucedo.github.io/wdd-330/json/project-list.json";

const displayBlock1 = document.getElementById("block1");
const displayBlock2 = document.getElementById("block2");
let num = 1;

function buildProjectList(info) {
  let data = info.projects;
  data.forEach((project) => {
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.setAttribute("href", `${project.link}`);
    a.innerHTML = `${project.lesson}`;

    li.appendChild(a);
    if (num < 6) {
      displayBlock1.append(li);
    } else {
      displayBlock2.append(li);
    }
    num++;
  });
}

async function getProjects() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    buildProjectList(data);
  } else {
    throw Error(response.statusText);
  }
}

getProjects();
