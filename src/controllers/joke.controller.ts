import { JokeModel } from "../models/joke.model";
import { JokeView } from "../views/joke.view";
import type { IJoke } from "../interface/Ijoke.interface"; 
import type { IRated } from "../interface/Ijoke.interface";
import { fetchWeather } from "../services/weather.service";
import { fetchArtImage } from "../services/art.services";


export class JokeController{
  
    private view: JokeView;
    private currentJoke: string | null = null;
    private ratedJokes: IRated[] = [];

    constructor(){
        this.view = new JokeView();
        this.view.bindGetJoke(this.handleGetJoke.bind(this));
        this.view.bindRateJoke(this.handleRating.bind(this));
        this.showWeather();
    }

    private async handleGetJoke():Promise<void>{
        try{
            this.view.showLoading();
        

            const JokeData: IJoke = await JokeModel.fetch();
            this.currentJoke =JokeData.joke;

            if (JokeData.status !== undefined && JokeData.status >= 400) {
                this.view.showError(JokeData.joke);
            }else{
                this.view.displayJoke(JokeData.joke);
            }

            const imageUrl = await fetchArtImage();
            console.log("Museum image:", imageUrl);

            if (imageUrl){
                this.view.displayImage(imageUrl);
            }
        }catch(error){
            this.view.showError("Error al obtener el chiste");
            console.error(error);
        }
    }
    private handleRating(rating: 1|2|3): void{
        if(!this.currentJoke) return;

        const rated: IRated = {
            joke: this.currentJoke,rating,
            date: new Date().toISOString(),
        };

        this.ratedJokes.push(rated);

        console.log("chistes valorados", this.ratedJokes);
    }
    private async showWeather(): Promise<void> {
        try {
          const coords = { latitude: 41.39, longitude: 2.17 };
          const weatherInfo = await fetchWeather(coords.latitude, coords.longitude);
          this.view.displayWeather(weatherInfo);
        } catch (error) {
          console.error("Error al obtener el clima:", error);
          this.view.displayWeather("No se pudo obtener el clima");
        }
      }
      
    }
      
