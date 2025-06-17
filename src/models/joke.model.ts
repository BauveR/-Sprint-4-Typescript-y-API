import type { IJoke } from "../interface/Ijoke.interface"; 
import { apiJokes1,apiJokes2 } from "../services/apiConfig";

export class JokeModel {

  static async fetchJoke(): Promise<IJoke> {
      const sources =[
        this.fetchFromChuck,
        this.fetchFromJoke
      ];

      const randomIndex = Math.floor(Math.random() * sources.length);
      return await sources[randomIndex]();
    }
    private static async fetchFromChuck(): Promise<IJoke> {
      const res = await  fetch(apiJokes1);
      const data = await res.json();

      return {
        joke:data.value,
        status: res.status
      };
    }

    private static async fetchFromJoke(): Promise<IJoke> {
      const res = await  fetch(apiJokes2);
      const data = await res.json();

      return {
        joke: `${data.setup} ${data.punchline}`,
        status: res.status
      };
    }
  }

