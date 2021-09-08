//notes
// before it didn't work because getelementsbyClassName
// returns a big array, it's not specifically for 1 thing, so I decided to use Jquery $(".classname, .classname2")

// your code

//current number between the last function
var currentNum = "";

var currentEqu = "";

function displayLive() {
  currentNum = document.getElementById("field").value;
  console.log(currentNum);
  console.log(
    "currentNum = " +
      currentNum +
      " currentEqu = " +
      currentEqu +
      " counter = " +
      counter
  );
}
$(".basic").click(conjure);

function conjure() {
  //display
  var num = this.innerHTML;

  document.getElementById("field").value += num;
  displayLive();
  console.log(document.getElementById("field").value);
}

// if counter = 0, means no function used previously. if = 1, function used and next function should run
// equal and resolve the equation
var counter = 0;
var currentFunc = "";

$(".func").click(funcorconj);

function funcorconj() {
  // if counter is 0 then don't run enter (solve), else, solve and update... currentNum is uploaded
  if (counter == 0) {
    currentFunc = this.innerHTML;
    console.log(currentFunc);
    currentEqu += currentNum + currentFunc;
    currentNum = "";
    counter++;
  } else if (counter == 1 && currentNum == "") {
    currentFunc = this.innerHTML;
    console.log(currentFunc);
  } else {
    console.log("should be entering here after 2 functions queued");

    enter();
  }
}

// next number while counter = 1 should

//ideas, keep display and 'current' value different

// all function buttons charge up "change" and clears the screen

//all functions are not .basic anymore, nor are buttonbig, deci, enter, etc

// one function at a time (var func = "+" ) clears up

//evaluate at end, such as '=' button or new function

//   $(".deci").click(deci);

//   function deci() {
//     document.getElementById("field").value = current + ".";
//   }

$(".enter").click(enter);

function enter() {
  console.log("Enter pressed!");

  currentEqu += currentNum;
  document.getElementById("field").value = eval(currentEqu);

  currentEqu = "";
  counter = 0;
}

//implement typing, so the screen must work within
