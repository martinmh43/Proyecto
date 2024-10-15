import { Component } from '@angular/core';

@Component({
  selector: 'app-enfermedad',
  templateUrl: './enfermedad.component.html',
  styleUrls: ['./enfermedad.component.css']
})
export class EnfermedadComponent {

  tipo : String|null = null;
  cantidad : number = 0;
  nivel : number = 0;

  aumentar() : void {
    if (this.cantidad < 4 && this.cantidad > -1) {
      this.cantidad++;
    }
    
  }

  curar() : void {
    if(this.cantidad>0) {
      this.cantidad--;
    } else {
      alert('No se puede curar donde no hay virus');
    }
  }

  curarVacuna() : void {
    if(this.cantidad>1) {
      this.cantidad = this.cantidad-2;
    } else if(this.cantidad==1) {
      this.cantidad--;
    } else {
      alert('No se puede curar donde no hay virus (vacuna)')
    }
  }

}
