import { Injectable } from '@angular/core';
import { Istock } from '../interface/istock';

@Injectable({
  providedIn: 'root'
})
export class ServicestockService {

  constructor() { 
    this.load();
  }
  private static LS_KEY = "productos";
  public productos : Istock[] = [];

  crearProducto(producto : Istock){
    this.productos.push(producto);
    this.save();
  }
  private load() {
    const data = localStorage.getItem(ServicestockService.LS_KEY);
    if (data != null) {
      this.productos = JSON.parse(data);
    }
  }
  public save() {
    const data = JSON.stringify(this.productos);
    localStorage.setItem(ServicestockService.LS_KEY, data);
  }

}
