// 234 * 6 = - 2

// somesomething - .1 will just show 1
// answer is 24.56 then - .1
document.getElementById("field").value = "";
console.log("Start");

var equation = "";
var answer = 0;
var lastpressed = "";
var sound = document.getElementById("audio");

//
// $(".period").click(function () {
//   console.log("period was clicked");
//   if (lastpressed == "f" || lastpressed == "e") {
//   }
// });
// Basic button press to screen
$(".basic").click(function () {
  sound.play();

  //if last pressed was 2nd function (solve) or enter, reset the screen

  if (lastpressed == "e") {
    document.getElementById("field").value = "";
    func = "";
    equation = "";
    answer = "";
    lastpressed = "";
  }
  // lastpressed = "b";

  //don't let period be alone (add a zero in front)

  //also dont allow double periods
  if (
    this.innerHTML == "." &&
    document.getElementById("field").value.includes(".") &&
    lastpressed != "f"
  ) {
    return;
    //exit equation
  }

  // if last click was a function button, then push the onscreen onto the equation
  if (func == "") {
    console.log("Basic button pressed");
    if (
      this.innerHTML == "." &&
      document.getElementById("field").value.length == 0
    )
      //here
      document.getElementById("field").value =
        "0" + document.getElementById("field").value;
    document.getElementById("field").value = document
      .getElementById("field")
      .value.concat(this.innerHTML);
    //experiment
  }
  // else if it was a function button but is the 2nd time pressed already, solve the equation and display it
  else {
    lastpressed = "f";
    equation += document.getElementById("field").value;
    equation += func;
    console.log("Equation is: " + equation);
    document.getElementById("field").value = this.innerHTML; //important, doesnt work for equal
    if (this.innerHTML == ".")
      document.getElementById("field").value =
        "0" + document.getElementById("field").value;
    func = "";
  }
});

// Which function key is queued up
var func = "";
$(".func").click(function () {
  sound.play();

  func = this.innerHTML;
  console.log(func);
  if (
    equation.includes("/") ||
    equation.includes("*") ||
    equation.includes("+") ||
    equation.includes("-") ||
    lastpressed == "e"
  ) {
    lastpressed = "f";
    equation += document.getElementById("field").value;
    answer = parseFloat(eval(equation).toString());

    document.getElementById("field").value = answer;
    equation = "";
  }
});

//updates the debug info **didn't do answer yet
function debug() {
  //console.log("run");
  $("#debug").html(
    "O: " +
      document.getElementById("field").value +
      " E: " +
      equation +
      " A: " +
      answer +
      " lastpressed: " +
      lastpressed
  );
}

//clear button
$(".clear").click(function () {
  document.getElementById("field").value = "";
  func = "";
  equation = "";
  answer = "";
  lastpressed = "";
});

//enter button
$(".enter").click(function () {
  sound.play();

  lastpressed = "e";
  if (
    equation.includes("/") ||
    equation.includes("*") ||
    equation.includes("+") ||
    equation.includes("-")
  ) {
    equation += document.getElementById("field").value;
    answer = parseFloat(eval(equation).toString());

    document.getElementById("field").value = answer;
    equation = "";
  }
});

//delete button
$(".delete").click(function () {
  sound.play();

  var lengthh = document.getElementById("field").value.length;

  document.getElementById("field").value = document
    .getElementById("field")
    .value.substring(0, lengthh - 1);
});
