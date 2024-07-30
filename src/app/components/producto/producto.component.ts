import { Component, input, Input } from '@angular/core';
import { ServicestockService } from '../../service/servicestock.service';
import { Istock } from '../../interface/istock';


@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() producto: Istock = {
    producto: "",
    localizacion: "",
    cantidad: 0
  };

  constructor(private servicio : ServicestockService) {

  }

  decrementa() {
    if (this.producto.cantidad > 0) {
      this.producto.cantidad--;
    }
    else {
      this.producto.cantidad = 0;
    }
  }

  incrementa() {
    this.producto.cantidad++;
    this.servicio.save();
  }



}
