const apiJokes1 = "https://api.chucknorris.io/jokes/random"
const apiJokes2 = "https://official-joke-api.appspot.com/random_joke"

function  apiWeather(latitude: number, longitude: number): string {
    return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  }
  


export{
    apiJokes1,
    apiJokes2,
    apiWeather
}