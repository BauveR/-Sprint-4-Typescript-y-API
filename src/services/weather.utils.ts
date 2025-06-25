import { weatherIconRanges } from "./weather.cons";

  export function getWeatherIcon(code: number): string {
    for (const range of weatherIconRanges) {
      if (code <= range.maxCode) {
        return range.icon;
      }
    }
    return "❓";
  }
  