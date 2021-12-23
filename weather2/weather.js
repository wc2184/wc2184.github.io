const key = "1ea7b7fb7b0849fba2880001212312";
const getWeather = async (input) => {
  const link = "https://api.weatherapi.com/v1/current.json";
  const query = `?key=${key}&q=${input}`;

  const response = await fetch(link + query);
  const data = await response.json();
  console.log(data);
  return data;
};
