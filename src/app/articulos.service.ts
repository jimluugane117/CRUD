import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

    //url='https://layferws.000webhostapp.com/Angular/'; // disponer url de su servidor que tiene las páginas PHP
  url = 'http://localhost:8080/Angular/';
  

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    debugger;
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(articulo) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));    
  }

  baja(codigo:number) {
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  }
  
  seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificacion(articulo) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));    
  } 
}