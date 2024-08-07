import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-practica2',
  standalone: true, 
  imports: [FormsModule,
            BrowserModule],
  templateUrl: './practica2.component.html',
  styleUrls: ['./practica2.component.css']
})
export class Practica2Component {
  numero1: number | null = null;
  numero2: number | null = null;
  resultado: number | null = null;
  operacion: string = '';

  calcular() {
    if (this.numero1 !== null && this.numero2 !== null) {
      if (this.numero1 === this.numero2) {
        this.resultado = this.numero1 * this.numero2;
        this.operacion = 'multiplicación';
      } else if (this.numero1 > this.numero2) {
        this.resultado = this.numero1 - this.numero2;
        this.operacion = 'resta';
      } else {
        this.resultado = this.numero1 + this.numero2;
        this.operacion = 'suma';
      }
    }
  }

}
