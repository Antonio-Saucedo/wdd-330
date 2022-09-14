const URL = "https://antonio-saucedo.github.io/wdd330/json/project-list.json";

const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
let num = 1;

function buildProjectList(info) {
  let data = info.projects;
  data.forEach((block) => {
    block.forEach((item) => {
      let li = document.createElement("li");
      let a = document.createElement("a");

      if (num == 1) {
        a.setAttribute("href", `${block1.link}`);
        a.innerHTML = `${block1.lesson}`;
      } else {
        a.setAttribute("href", `${block2.link}`);
        a.innerHTML = `${block2.lesson}`;
      }

      li.appendChild(a);
      if (num == 1) {
        block1.append(li);
      } else {
        block2.append(li);
      }
      num++;
    });
  });
}

async function getProjects() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await responce.json();
    buildProjectList(data);
  } else {
    throw Error(respose.statusText);
  }
}
