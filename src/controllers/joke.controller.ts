import { JokeModel } from "../models/joke.model";
import { JokeView } from "../views/joke.view";
import type { IJoke } from "../interface/Ijoke.interface"; 

export class JokeController{
  
    private view: JokeView;

    constructor(){
        this.view = new JokeView();
        this.view.bindGetJoke(this.handleGetJoke.bind(this));
    }

    private async handleGetJoke():Promise<void>{
        try{
            this.view.showLoading();
            const JokeData: IJoke = await JokeModel.fetch();

            if (JokeData.status && JokeData.status >= 400){
                this.view.showError(JokeData.joke);
            }else{
                this.view.displayJoke(JokeData.joke);
            }
        }catch(error){
            this.view.showError("Error al obtener el chiste");
            console.error(error);
        }
    }
}