import { changeGradient } from "../services/changeGradient";

export class JokeView {

    private jokeElement: HTMLElement;
    private button: HTMLButtonElement;
    private ratingButtons: NodeListOf<HTMLButtonElement>;
    private weatherElement: HTMLElement;
    private imageElement: HTMLImageElement;
    

    constructor() {
        this.jokeElement = document.getElementById('joke-container') as HTMLElement;
        this.button = document.getElementById('joke-button') as HTMLButtonElement;
        this.ratingButtons = document.querySelectorAll<HTMLButtonElement>('#rating-buttons button');
        this.weatherElement = document.getElementById('weather-container') as HTMLElement;
        this.imageElement = document.getElementById('joke-image') as HTMLImageElement;
    }
    public displayJoke(joke: string): void{
        this.jokeElement.textContent = joke;
    }

    public bindGetJoke(handler: ()=> Promise<void>):void{
        this.button.addEventListener('click', () => {
            handler();
            changeGradient();
        });
    }
    public showLoading(): void {
        this.jokeElement.textContent = " Loading Joke...";
    }
    public showError(message: string): void{
        this.jokeElement.textContent = message;
    }
    public bindRateJoke(handler: (rating: 1 | 2 | 3) => void): void {
        this.ratingButtons.forEach((btn) => {
          btn.addEventListener('click', () => {
            const value = parseInt(btn.dataset.rating || "0", 10);
            if (value >= 1 && value <= 3) {
              handler(value as 1 | 2 | 3);
            }
          });
        });
    }
    public displayWeather(info: string): void {
        this.weatherElement.textContent = info;
    }
    public async displayImage(url: string | null): Promise<void> {
        if (!url) {
          
            this.imageElement.classList.remove('opacity-100');
            this.imageElement.classList.add('opacity-0');
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.imageElement.classList.add('hidden');
            return;
        }
    
        if (!this.imageElement.classList.contains('hidden')) {
    
            this.imageElement.classList.remove('opacity-100');
            this.imageElement.classList.add('opacity-0');
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        this.imageElement.src = url;
    
        this.imageElement.onload = () => {
            this.imageElement.classList.remove('hidden');
            this.imageElement.classList.remove('opacity-0');
            this.imageElement.classList.add('opacity-100');
        };
    }
    public async hideImage(): Promise<void> {
        this.imageElement.classList.remove('opacity-100');
        this.imageElement.classList.add('opacity-0');
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.imageElement.classList.add('hidden');
    }
}