import { Component } from '@angular/core';
import { Istock } from '../../interface/istock';
import { ServicestockService } from '../../service/servicestock.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(public servicio : ServicestockService){

  }

  producto : string = "";
  localizacion : string ="";
  cantidad : number = 0;

  creaFicha() {
    const fichaProducto : Istock = {
      producto : this.producto,
      localizacion : this.localizacion,
      cantidad : this.cantidad
    }
    this.servicio.crearProducto(fichaProducto);
    /*this.servicio.productos.forEach(pr =>{
      console.log(pr.producto);
    })*/
  
  }

}
