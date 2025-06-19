export class JokeView {

    private jokeElement: HTMLElement;
    private button: HTMLButtonElement;
    private ratingButtons: NodeListOf<HTMLButtonElement>;

    constructor() {
        this.jokeElement = document.getElementById('joke-container') as HTMLElement;
        this.button = document.getElementById('joke-button') as HTMLButtonElement;
        this.ratingButtons = document.querySelectorAll<HTMLButtonElement>('#rating-buttons button');
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
}