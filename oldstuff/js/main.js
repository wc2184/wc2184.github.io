// this is your custom Javascript file

$(function () {
  // add any custom Javascript code below this line
  $("input#button").click(function () {
    $("img#chefs").css("display", "block");
  });

  $("input#buttontwo").click(function () {
    $("img#garen").fadeIn();
    setTimeout(function () {
      $("img#annie").fadeIn();
    }, 500);
    setTimeout(function () {
      $("img#talon").fadeIn();
    }, 1000);
  });

  $("span#clicker").click(function () {
    $("span#words1").toggle();
    $("span#words2").toggle();
  });

  $("img#cook").mouseover(function () {
    // invert the colors of the page
    $("body").css({
      color: "lightblue",
      backgroundColor: "navy",
    });

    $("img#cook").attr("src", "images/soylent.jpg");
    $("p#spookysoy").show();
  });

  $("img#cook").mouseout(function () {
    // invert the colors of the page
    $("body").css({
      color: "black",
      backgroundColor: "white",
    });
    $("img#cook").attr("src", "images/cook.jpg");
    $("p#spookysoy").hide();
  });

  $("input#buttonthree").click(function () {
    $("img#salt").animate(
      {
        left: "2000px",
        top: "250px",
      },
      5000
    );
  });

  // add any custom Javascript code above this line.
  //start here

  document.getElementById("cliky").onclick = () => {
    if (document.getElementById("name").value != "") nextt();
    else {
      alert("Please enter a name.");
    }
  };
  var name;

  stored = window.localStorage;
  if (stored.getItem("name") != null) {
    //if not empty, then run nextt but change the name to stored one
    nextt(1);
  }
  function nextt(skip) {
    name = document.getElementById("name").value;
    console.log(skip);

    if (name == "" && skip == undefined) {
      alert("Please enter a name.");
    } else {
      //if you have a name stored in local, name = stored
      if (stored.getItem("name") != null) {
        name = stored.getItem("name");
      }
      console.log(name);
      console.log(Date());
      $(".containerp").hide();
      $(".hack").show();
      $("#namefound").html(name);

      stored.setItem("name", name);
      n = new Date();
      y = n.getFullYear();
      var montharray = Date().split(" ");
      console.log(montharray);
      m = montharray[1];
      d = n.getDate();

      $("#dategot").html(d + " " + m + " " + y);
    }
  }
  document.getElementById("cliky2").onclick = function () {
    $(".containerp").hide();
    $(".hack").show();
    $("#namefound").html("Emerson Koup");
    n = new Date();
    y = n.getFullYear();
    var montharray = Date().split(" ");
    console.log(montharray);
    m = montharray[1];
    d = n.getDate();

    $("#dategot").html(d + " " + m + " " + y);

    document.onkeydown = logKey;
  };

  document.addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
      nextt();
    }
  });
});
