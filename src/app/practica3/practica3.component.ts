import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';    // Importar FormsModule para ngModel

@Component({
  selector: 'app-practica3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './practica3.component.html',
  styleUrl: './practica3.component.css'
})
export class Practica3Component {
  numeroMes: number | null = null;
  nombreMes: string = '';

  obtenerMes(): void {
    const meses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    if (this.numeroMes && this.numeroMes >= 1 && this.numeroMes <= 12) {
      this.nombreMes = meses[this.numeroMes - 1];
    } else {
      this.nombreMes = 'Número inválido';
    }
  }
}
