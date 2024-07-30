import { Component } from '@angular/core';
import { ServicestockService } from '../../service/servicestock.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from "../producto/producto.component";
import { Istock } from '../../interface/istock';


@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductoComponent],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {
  constructor(public servicio : ServicestockService){
  }
 

}
