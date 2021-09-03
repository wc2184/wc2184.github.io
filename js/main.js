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

  document.getElementById("cliky").onclick = function () {
    var name = document.getElementById("name").value;

    if (name == "") {
      alert("Please enter a name.");
    } else {
      console.log(name);
      console.log(Date());
      $(".containerp").hide();
      $(".hack").show();
      $("#namefound").html(name);
      n = new Date();
      y = n.getFullYear();
      var montharray = Date().split(" ");
      console.log(montharray);
      m = montharray[1];
      d = n.getDate();

      $("#dategot").html(d + " " + m + " " + y);
    }
  };
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
  };
});
