const apiJokes1 = "https://api.chucknorris.io/jokes/random"
const apiJokes2 = "https://official-joke-api.appspot.com/random_joke"

const API_CONFIG = {
  ART_INSTITUTE_BASE: "https://api.artic.edu/api/v1",
  IMAGE_BASE: "https://www.artic.edu/iiif/2",

  getArtworksUrl: (page = 1, limit = 100) =>
    `${API_CONFIG.ART_INSTITUTE_BASE}/artworks?page=${page}&limit=${limit}`,

  getImageUrl: (imageId: string, width = 843) =>
    `${API_CONFIG.IMAGE_BASE}/${imageId}/full/${width},/0/default.jpg`,
};

function  apiWeather(latitude: number, longitude: number): string {
    return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  }
  


export{
    apiJokes1,
    apiJokes2,
    API_CONFIG,
    apiWeather

}