import { CJoke } from "../interface/Cjoke.interface";

export class JokeModel {

  public static async chuckJoke(): Promise<CJoke> {
    try {
      const url = "https://api.chucknorris.io/jokes/random"
      const response = await fetch(url, {
        headers: { "Accept": "application/json" }
      });

      if (!response.ok) {
        throw new Error(`Error Status: ${response.status}`);
      }

      const data: CJoke = await response.json();
      console.log(data);
      return data;

    } catch (error) {
      console.error("Error fetching joke", error);
      return {
        id: "error",
        url: "the joke is not available",
        value: "not available jokes "
      };
    }
  }
}
