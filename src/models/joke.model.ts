import type { IJoke } from "../interface/Ijoke.interface"; 

export class JokeModel {

  public static async fetchJoke(): Promise<IJoke> {
    try {
      const url = "https://icanhazdadjoke.com/"
      const response = await fetch(url, {
        headers: { "Accept": "application/json" }
      });

      if (!response.ok) {
        throw new Error(`Error Status: ${response.status}`);
      }

      const data: IJoke = await response.json();
      console.log(data)
      return data;

    } catch (error) {
      console.error("Error fetching joke", error);
      return {
        id: "error",
        joke: "the joke is not available",
        status: 500
      };
    }
  }
}

