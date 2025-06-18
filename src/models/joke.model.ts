import type { IJoke } from "../interface/Ijoke.interface"; 
import { getRandomJokeFetcher } from "../services/jokeRamdomizer";


export class JokeModel {

  static async fetch(): Promise<IJoke>{
    const fetcher = getRandomJokeFetcher();
    return await fetcher();
  }
}
