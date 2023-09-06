// function to fetch weather data.
function getWeatherData() {
  // fetch the weather data from the API.
  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q= Ahmedabad`;
  return (
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // return an object containing the required weather data properties.
        return {
          temperature: data.current.temp_c,
          humidity: data.current.humidity,
          wind_speed: data.current.wind_kph,
          location: data.location.name,
        };
      })
      // print if any error.
      .catch((error) => {
        console.log(error);
      })
  );
}

// exporting function.
module.exports = { getWeatherData };
