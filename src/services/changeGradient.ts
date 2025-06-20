import { gradients } from '../styles/backgroundGradients';

let lastIndex = -1;

export function changeGradient() {
  const body = document.getElementById("joke-panel") as HTMLElement;
  if (!body) return;

  gradients.forEach(g => body.classList.remove(...g.split(" ")));

  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * gradients.length);
  } while (newIndex === lastIndex);
  lastIndex = newIndex;

  const randomGradient = gradients[newIndex];
  body.classList.add(...randomGradient.split(" "));
}
