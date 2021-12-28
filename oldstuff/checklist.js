const inputt = document.getElementById("entertext");
const container = document.querySelector(".innercontainer");
const storing = window.localStorage;
const button = document.querySelector("button");

function HTMLmaker(text) {
  return `<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> <label class="form-check-label" for="flexCheckDefault"> ${text} </label> </div>`;
}
document.addEventListener("keydown", (e) => {
  let textt = inputt.value;

  if (inputt === document.activeElement && e.key === "Enter" && textt != "") {
    console.log("Here: " + inputt.value);
    //take the value, and create an radio element with that
    container.innerHTML += `<div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> <label class="form-check-label noselect"  for="flexCheckDefault"> ${textt} </label> </div></div>`;
    inputt.value = "";
  }
});
//the issue was that I did not make an exclusive innercontainer that didn't have
// the input field wrapped with my appending of html elements

setInterval(() => {
  storing.setItem("innercont", container.innerHTML);
}, 1000);

//on page load

container.innerHTML = storing.getItem("innercont");

button.addEventListener("click", () => {
  container.innerHTML = "";
});
