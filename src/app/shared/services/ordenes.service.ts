import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdenesModel } from '../models/ordenes.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerOrdenes() {
    return this.http.get<OrdenesModel[]>(`${this.BASE_URL}/ordenes`);
  }

  obtenerOrden(id: string) {
    return this.http.get<OrdenesModel[]>(`${this.BASE_URL}/ordenes/${id}`);
  }
  
  agregarOrdenes(ordenes: OrdenesModel) {
    return this.http.post<string>(`${this.BASE_URL}/ordenes/agregar`, ordenes);
  }

  actualizarOrdenes(ordenes: OrdenesModel) {
    return this.http.put<string>(`${this.BASE_URL}/ordenes/actualizar/${ordenes.id}`, ordenes);
  }

  borrarOrdenes(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/ordenes/borrar/${id}`)
  }
}
