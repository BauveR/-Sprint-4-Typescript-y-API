import { fetchFromChuck, fetchFromJoke } from "./jokeFetchers";
import type { IJoke } from "../interface/Ijoke.interface";

export function getRandomJokeFetcher():() => Promise<IJoke> {
        const sources: Array<() => Promise<IJoke>> =[
            fetchFromChuck,
            fetchFromJoke
        ];
        const randomIndex = Math.floor(Math.random() * sources.length);
        return sources[randomIndex];
}