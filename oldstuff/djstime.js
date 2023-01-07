console.log(Date(), "now");
const now = new Date();
const date1 = new Date("January 3, 2023 15:00:00");
console.log(date1, "hey daddy");

// Source: https://stackoverflow.com/a/27065690 millisecond to Day/Hour/Minute converter by Laurent Duvergé
function dhm(ms) {
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = ms % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);
  return days + " days and " + hours + " hours ";
}

// const diff = parseInt((date1 - now) / (1000 * 60 * 60 * 24), 10);
const diff = Math.abs(date1 - now);
console.log(dhm(diff));

// Source: https://stackoverflow.com/a/8888498 hour to 12 hour time converter
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const nth = function (d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

document.querySelector(".insert").textContent = dhm(diff);
document.querySelector(".current").textContent =
  monthNames[now.getUTCMonth()] +
  " " +
  now.getUTCDay() +
  nth(now.getUTCDay()) +
  " " +
  formatAMPM(now);
