import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practica1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './practica1.component.html',
  styleUrls: ['./practica1.component.css']
})
export class Practica1Component {

  resultado = "Ingresa el tipo de vehiculo";
  mostrarMensaje: boolean = false;
  
  formControl = {
    indicador: '',
    tasa: null as number | null
  };

  conductorList: Conductor[] = [];

  respuesta() {
    let indicador = String(this.formControl.indicador);
    let tasa = Number(this.formControl.tasa);
    let respuestAlcolismo = "";

    if (['C', 'A', 'M'].includes(indicador)) {
      if (tasa > 0.3) {
        respuestAlcolismo = 'Positivo';
      } else {
        respuestAlcolismo = 'Negativo';
      }
    } else if (indicador === 'T') {
      if (tasa > 0.5) {
        respuestAlcolismo = 'Positivo';
      } else {
        respuestAlcolismo = 'Negativo';
      }
    } else {
      respuestAlcolismo = 'el vehiculo no es valido';
    }

    this.resultado = "El conductor salió " + respuestAlcolismo + " en alcolismo";

    this.conductorList.push({
      vehiculo: this.formControl.indicador,
      indicador: this.formControl.indicador,
      tasa: tasa,
      respuestAlcolismo: respuestAlcolismo
    });

    this.mostrarMensaje = true;
  }
}

type Conductor = { vehiculo: string, indicador: string, tasa: number, respuestAlcolismo: string };
