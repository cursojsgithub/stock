import { Injectable } from '@angular/core';
import { Istock } from '../interface/istock';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ServicestockService {

  static httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  static URL: string = "https://cursojsgithub.github.io";
  static PATH = "/json_stock/stock.json";
  private static LS_KEY = "productos";


  public productos : Istock[] = [];


  constructor( private clienteHttp : HttpClient) { 

    this.clienteHttp.get<Istock[]>(`${ServicestockService.URL}${ServicestockService.PATH}`)
      .forEach(data => {
        data.forEach(producto => {
          this.productos.push(producto);
        });
      })
    //this.load();
  }


  crearProducto(producto : Istock){
    this.productos.push(producto);
    //this.save();
  }
  borrarProducto(productoABorrar : Istock){
    this.productos = this.productos.filter(productoBorrado => productoABorrar != productoBorrado);
    //this.save();
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
