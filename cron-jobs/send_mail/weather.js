// function to fetch weather data.
function getWeatherData() {
  // fetch the weather data from the API.
  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q= Ahmedabad`;
  return (
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // extract the relevant weather data.
        const temperature = data.current.temp_c;
        const humidity = data.current.humidity;
        const wind_speed = data.current.wind_kph;
        const location = data.location.name;

        // return an object containing the weather data variables.
        return {
          temperature,
          humidity,
          wind_speed,
          location,
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
