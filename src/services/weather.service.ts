import { apiWeather } from "./apiConfig";
import type { IWeather } from "../interface/weather.interface";
import { getWeatherIcon } from "../services/weather.utils";

export async function fetchWeather(latitude: number, longitude: number): Promise<string> {
    const url = apiWeather(latitude, longitude);
  
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }
    
    const data = await res.json();
  
    if (!data.current_weather) {
      throw new Error("No se encontró current_weather en la respuesta");
    }
  
    const weather: IWeather = data.current_weather;
  
    const icon = getWeatherIcon(weather.weathercode);
  
    return `${icon} Temperatura: ${weather.temperature}°C, Viento: ${weather.windspeed} km/h`;
  }

