const bks = window.localStorage;
const parent = document.querySelector("article");
let clickedAlr = 0;
// 0 is didnt click, 1 is clicked
[...parent.children].forEach((child) => {
  child.style.margin = "0px";
  child.style.display = "inline-block";
  const node = document.createElement("div");
  node.appendChild(child);
  node.innerHTML += "<br/>";

  node.style.display = "inline-block";
  node.style.minWidth = "95%";
  node.style.border = "1px solid black";
  node.style.margin = "3px";
  node.style.padding = "5px";
  node.style.backgroundColor = "azure";
  node.style.cursor = "pointer";

  parent.appendChild(node);
});

const clickButton = document.querySelector("button");

clickButton.addEventListener("click", () => {
  changeText();
});

let toggleStatus = 0; //0 for off, 1 for on

function changeText() {
  if (clickButton.innerText != "Cross out mode activated, click to cancel") {
    console.log("clicked");
    clickButton.innerText = "Cross out mode activated, click to cancel";
    clickButton.style.backgroundColor = "lightcoral";
    toggleStatus = 1;
  } else {
    clickButton.innerText = "Click to enable crossing out tasks";
    clickButton.style.backgroundColor = "#EFEFEF";
    toggleStatus = 0;
  }
}
let toggleChange = 0;
let listOfDivs = document.querySelectorAll(".container article div"); // don't select from all page. always subset it

listOfDivs.forEach((e) => {
  console.log(e + "Event"); //e is a div
  e.addEventListener("click", () => deleteMode(e));
});

// key point, wrap funciton in () => { } so it doesn't get immediately called. clearly label your variables
// and think through what's being passed
function deleteMode(e) {
  console.log(e + "Event after passed through");
  if (toggleStatus == 1) {
    if (!(e.children[0].style.textDecoration == "line-through")) {
      e.children[0].style.textDecoration = "line-through";
      e.style.textDecoration = "line-through";
      e.style.backgroundColor = "lightblue";
    } else {
      e.children[0].style.textDecoration = "none";
      e.style.textDecoration = "none";

      e.style.backgroundColor = "azure";
    }
  }
}

function editMode(e) {}

let bottomarea = document.querySelector(".bottom");
let buttonmake = document.createElement("button");
buttonmake.classList.add("del");
let textNode = document.createTextNode("Delete highlighted");
buttonmake.appendChild(textNode);
buttonmake.addEventListener("click", eventdelete);
bottomarea.appendChild(buttonmake);
//go through the elements and delete those that have a line-through
function eventdelete() {
  let par = document.querySelector("article");
  [...par.children].forEach((e) => {
    console.log(e + " Reading");
    console.log(e.children[0]);
    if (e.children[0].style.textDecoration == "line-through") {
      e.remove();
      counter--;
    }
  });
}

let clearAll = document.createElement("button");
let clearText = document.createTextNode("Clear all");
let breakp = document.createElement("br");
bottomarea.appendChild(breakp);

clearAll.appendChild(clearText);
clearAll.style.marginTop = "5px";
bottomarea.appendChild(clearAll);
clearAll.addEventListener("click", () => {
  parent.innerHTML = "";
});

let counter = 0;
//typehere is the class for the input
document.addEventListener("keydown", () => {
  if (event.key == "Enter") {
    let textinput = document.querySelector(".typehere").value;
    if (
      document.querySelector(".typehere").value != "" &&
      counter < 10 &&
      document.querySelector(".typehere") == document.activeElement
    ) {
      let nodeAdd = document.createElement("div");
      let textAdd = document.createTextNode(textinput);
      nodeAdd.appendChild(textAdd);
      nodeAdd.innerHTML += "<br/>";

      nodeAdd.style.display = "inline-block";
      nodeAdd.style.minWidth = "95%";
      nodeAdd.style.border = "1px solid black";
      nodeAdd.style.margin = "3px";
      nodeAdd.style.padding = "5px";
      nodeAdd.style.backgroundColor = "azure";
      nodeAdd.style.cursor = "pointer";
      nodeAdd.addEventListener("click", () => deleteMode(nodeAdd));
      parent.appendChild(nodeAdd);
      listOfDivs = document.querySelectorAll(".container article div");
      counter++;
      //document.querySelector(".typehere").blur();
      document.querySelector(".typehere").value = "";
    }
  }

  if (
    document.querySelector(".typehere") != document.activeElement &&
    event.key == "/"
  ) {
    document.querySelector(".typehere").focus();
    setTimeout(() => {
      document.querySelector(".typehere").value = document
        .querySelector(".typehere")
        .value.slice(0, -1);
    }, 0);
  }
});

// unfocus the text after pressing enter and clear text input

// click something to edit, replace with a text field temporarily //nvm

//parent.innerHTML += '<div style="display: inline-block; min-width: 95%; border: 1px solid black; margin: 3px; padding: 5px; background-color: azure; cursor: pointer;">Go fuck<br></div>';
setInterval(() => {
  bks.setItem("storage", parent.innerHTML);
}, 1000);
if (!bks.getItem("storage").includes("null"))
  parent.innerHTML += bks.getItem("storage");
[...parent.children].forEach((e) =>
  e.addEventListener("click", () => deleteMode(e))
);
// last saved feature, updates every second,
// last left clikc mouse saves
