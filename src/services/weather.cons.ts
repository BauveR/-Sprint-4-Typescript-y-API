import type { WeatherIconRange } from "../interface/weather.interface";

export const weatherIconRanges: WeatherIconRange[] = [
    { maxCode: 0, icon: "🌞" },
    { maxCode: 3, icon: "⛅" },
    { maxCode: 48, icon: "🌫️" },
    { maxCode: 67, icon: "🌧️" },
    { maxCode: 86, icon: "☃️" },
    { maxCode: Infinity, icon: "⛈️" }
  ];
  