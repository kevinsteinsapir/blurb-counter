// lib/controllers/character_count_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["counter", "counter2"]

  connect() {
    // TODO: ¡haz un console.log de algo!
  }

  updateCounter(event) {
    const inputLength = event.currentTarget.value.length;
    if (inputLength <= 200 && inputLength >= 100) {
      this.counterTarget.innerText = `${inputLength} caracteres. Muy Bien. Ese es el Momentum.`;
      this.counterTarget.classList.remove('text-danger');
      this.counterTarget.classList.add('text-primary');
    } else if (inputLength <= 100) {
      this.counterTarget.innerText = `${inputLength} caracteres. Not Ready, Not Sexy.`;
      this.counterTarget.classList.remove('text-danger');
      this.counterTarget.classList.remove('text-primary');
    } else {
      this.counterTarget.innerText = `Se ha excedido el número de caracteres en ${inputLength - 200}. Deja de vender humo.`;
      this.counterTarget.classList.add('text-danger');
    }
  }

  updateCounter2(event) {
    const wordCount = event.currentTarget.value.split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount <= 125 && wordCount >= 80) {
      this.counter2Target.innerText = `${wordCount} palabras. Nivel Spotlight.`;
      this.counter2Target.classList.remove('text-danger');
      this.counter2Target.classList.add('text-primary');
    } else if (wordCount < 100) {
      this.counter2Target.innerText = `${wordCount} es tu conteo de palabras. Te falta. Mejor mandale un mail a la Cata para que te saque del programa.`;
      this.counter2Target.classList.remove('text-danger');
      this.counter2Target.classList.remove('text-primary');
    } else {
      this.counter2Target.innerText = `Se ha excedido el número de palabras en ${wordCount - 125}. No generaste FOMO.`;
      this.counter2Target.classList.add('text-danger');
    }
  }
}
