const form = document.querySelector("form");
const input = document.querySelector("form input");
const cityname = document.querySelector(".cityname");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = input.value.trim();

  searchLoc(location).then((data) => parseLoc(data));

  input.value = "";
});

const searchLoc = async (e) => {
  let name;
  let keyLoc;
  const data = await getLocKey(e);

  try {
    name = await data.EnglishName;
    console.log(name);
  } catch (err) {
    name = "City not found: Try spelling better.";
  }
  cityname.textContent = name;

  keyLoc = data.Key;
  console.log(keyLoc);
  return keyLoc;
};

const parseLoc = async (e) => {
  const data = await keyToDetails(e);
  console.log(data);
  return data;
};
