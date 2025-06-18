import { apiJokes1, apiJokes2 } from "./apiConfig";
import type { IJoke } from "../interface/Ijoke.interface";

export async function fetchFromChuck(): Promise<IJoke> {
    const res = await  fetch(apiJokes1);
    const data = await res.json();

    return {
      joke:data.value,
      status: res.status
    };
  }

export async function fetchFromJoke(): Promise<IJoke> {
    const res = await  fetch(apiJokes2);
    const data = await res.json();

    return {
      joke: `${data.setup} ${data.punchline}`,
      status: res.status
    };
  }
