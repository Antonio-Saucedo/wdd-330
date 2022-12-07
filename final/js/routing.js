import InfoController from "./InfoController.js";

const routes = [
  {
    controller: new InfoController("#infoList", "capsules"),
    file: "views/capsules.html",
    label: "Capsules",
  },
  {
    controller: new InfoController("#infoList", "company"),
    file: "views/companyInfo.html",
    label: "Company",
  },
  {
    controller: new InfoController("#infoList", "cores"),
    file: "views/cores.html",
    label: "Cores",
  },
  {
    controller: new InfoController("#infoList", "crew"),
    file: "views/crew.html",
    label: "Crew",
  },
  {
    controller: new InfoController("#infoList", "dragons"),
    file: "views/dragons.html",
    label: "Dragons",
  },
  {
    controller: new InfoController("#infoList", "history"),
    file: "views/history.html",
    label: "History",
  },
  {
    controller: new InfoController("#infoList", "landpads"),
    file: "views/landpads.html",
    label: "Landpads",
  },
  {
    controller: new InfoController("#infoList", "launchpads"),
    file: "views/launchpads.html",
    label: "Launchpads",
  },
  {
    controller: new InfoController("#infoList", "rockets"),
    file: "views/rockets.html",
    label: "Rockets",
  },
  {
    controller: new InfoController("#infoList", "ships"),
    file: "views/ships.html",
    label: "Ships",
  },
];

// function to create a navigation for the items found in routes.
// creates element, add a touchend event listener and appends it to parent
export default function buildNavigation(parent) {
  routes.forEach((route) => {
    let item = document.createElement("li");
    item.innerHTML = `<a href="#${route.label}">${route.label}</a>`;
    parent.appendChild(item);
    addNavEventAsync(item, route.file, route.controller);
  });
}

// makes an AJAX request for the html file found at viewPath and returns it as text
async function getViewAsync(viewPath) {
  try {
    const response = await fetch(viewPath);
    const text = await response.text();

    return text;
  } catch (err) {
    console.log("Something went wrong", err);
  }
}

// adds a touchend event to element that will insert the view found at path into the content area of the index.html
function addNavEventAsync(element, path, controller) {
  // adding both a touch and mouse event.  Notice the e.preventDefault(); If the touch event fires prevent default will keep the click event from firing.
  element.addEventListener("touchend", (e) => {
    insertViewAsync(getViewAsync(path), controller);
    e.preventDefault();
  });
  // this event won't fire if the touch event did.
  element.addEventListener("click", (e) => {
    insertViewAsync(getViewAsync(path), controller);
  });
}

// inserts the view into the content area of index.html
// remember that getView returns a promise!
// runs a function from the controller to load any dynamic elements
async function insertViewAsync(viewPromise, controller) {
  const contentElement = document.getElementById("content");
  //debugger;
  contentElement.innerHTML = await viewPromise;
  controller.init();
}
