const key = "rwWeVXRoASGww20K7g4sAtw9Lffa92jr";

//takes key of location and provides an obj with City name, temp,
//DONT USE KEY from getlockey, just run it normally
const keyToDetails = async (citykey) => {
  const link = `http://dataservice.accuweather.com/currentconditions/v1/${citykey}`;
  const query = `?apikey=${key}`;

  const response = await fetch(link + query);
  const data = await response.json();
  return data[0];
};

//gets key of location
const getLocKey = async (city) => {
  const link = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;
  const response = await fetch(link + query);
  const data = await response.json();
  return data[0];
};

//note that all async functions return promises and make sure
//to return the data in the function, then outside the func you .then it
// if you wanna console log it or something
// getLocKey("new york")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// keyToDetails("349727")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
