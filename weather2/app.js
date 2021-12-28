const form = document.querySelector("form");
const input = document.querySelector("form input");
const cityname = document.querySelector(".cityname");
const desc = document.querySelector(".desc");
const icon = document.querySelector(".icon");
const state = document.querySelector(".statename");
const topimg = document.querySelector(".topimg");
const card = document.querySelector(".card");
const button = document.querySelector(".clear");
const store = localStorage;
let datafull;

if (store.city != undefined) {
  console.log(store.city, "stored", store.city);
  console.log(store.city);
  getWeather(store.city)
    .then((data) => updateUI(data))
    .catch((err) => errorUI());
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = input.value.trim();
  console.log(location, "real location: ");
  input.value = "";
  store.setItem("city", location);

  // get the objects with an async function, then use .then to pass the output
  // into ANOTHER non async function that updates the UI. So do it all in one .then/.catch statement
  getWeather(location)
    .then((data) => updateUI(data))
    .catch((err) => errorUI());
});

//print the city, country, and make it so that if there's no matching location, print that out
// const weatherToObj = async (input) => {
//   await getWeather(input).then((data) => (datafull = data));
//   console.log(datafull.current);
// };

const updateUI = (data) => {
  console.log(data.location.country);
  console.log(data.current.temp_f, "degrees");
  cityname.textContent = data.location.name;
  desc.innerHTML = data.current.temp_f + "&deg;F";
  icon.setAttribute("src", data.current.condition.icon);
  state.textContent =
    data.location.country == "United States of America"
      ? data.location.region + ", " + data.location.country
      : data.location.country;
  topimg.setAttribute(
    "src",
    data.current.is_day ? "./img/day.svg" : "./img/night.svg"
  );
  card.classList.remove("d-none");
  button.classList.remove("d-none");
  button.classList.add("d-block");
};

const errorUI = () => {
  store.removeItem("city");
  card.classList.remove("d-none");
  button.classList.add("d-block");

  cityname.textContent = "City not found.";
  state.textContent = "Please try again.";
  icon.setAttribute("src", "");
  desc.textContent = "";
};

const clear = () => {
  localStorage.clear();
  card.classList.add("d-none");
  button.classList.remove("d-block");
  button.classList.add("d-none");
};
button.addEventListener("click", () => {
  console.log("pressed");
  clear();
});
