export class JokeView {

    private jokeElement: HTMLElement;
    private button: HTMLButtonElement;

    constructor() {
        this.jokeElement = document.getElementById('joke-container') as HTMLElement;
        this.button = document.getElementById('joke-button') as HTMLButtonElement;
    }
    public displayJoke(joke: string): void{
        this.jokeElement.textContent = joke;
    }

    public bindGetJoke(handler: ()=> Promise<void>):void{
        this.button.addEventListener('click', ()=> handler());
    }
    public showLoading(): void {
        this.jokeElement.textContent = " Cargando chiste...";
    }
    public showError(message: string): void{
        this.jokeElement.textContent = message;
    }
}