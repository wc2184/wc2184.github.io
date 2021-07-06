$(function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  $(".button1").click(function () {
    $("body").toggleClass("text-dark text-light");
    $("body").toggleClass("bg-white bg-dark");
  });

  $(".button3").click(function () {
    $(".hidden").show();
    $(".reveal").hide();
  });

  $(".button4").click(function () {
    $(".hidden1").show();
    $(".reveal").hide();
  });

  $(".button5").click(function () {
    window.open("https://i6.cims.nyu.edu/~wc2184/");
  });
});

var links = new Array();
links[0] =
  "https://podcasts.apple.com/us/podcast/the-npr-politics-podcast/id1057255460";
links[1] =
  "https://itunes.apple.com/us/podcast/american-fiasco/id1389231303?mt=2";
links[2] =
  "https://itunes.apple.com/us/podcast/beautiful-stories-from-anonymous-people/id1090147504?mt=2";
links[3] =
  "https://itunes.apple.com/us/podcast/conan-obrien-needs-a-friend/id1438054347?mt=2";
links[4] = "https://podcasts.apple.com/us/podcast/dear-therapists/id1523340696";
links[5] = "https://podcasts.apple.com/us/podcast/sadhguru/id347854569";
links[6] =
  "https://podcasts.apple.com/us/podcast/space-nuts-astronomy-space-and-science-news/id1080090608";
links[7] = "https://podcasts.apple.com/us/podcast/the-portal/id1469999563";
// random link chooser out of the above
function openLink() {
  var i = Math.floor(Math.random() * links.length);
  window.open(links[i]);
  return false;
}
