import { Component, input, Input } from '@angular/core';
import { ServicestockService } from '../../service/servicestock.service';
import { Istock } from '../../interface/istock';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatFormFieldModule, MatInputModule],
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

  borrarProducto(){
    this.servicio.borrarProducto(this.producto);
  }



}
