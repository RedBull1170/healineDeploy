import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IncapacidadModel } from '../models/incapacidad.model';

@Injectable({
  providedIn: 'root'
})
export class IncapacidadService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerIncapacidad() {
    return this.http.get<IncapacidadModel[]>(`${this.BASE_URL}/incapacidad`);
  }

  obtenerIncapacida(id: string) {
    return this.http.get<IncapacidadModel[]>(`${this.BASE_URL}/incapacidad/${id}`);
  }
  
  agregarIncapacidad(incapacidad: IncapacidadModel) {
    return this.http.post<string>(`${this.BASE_URL}/incapacidad/agregar`, incapacidad);
  }

  actualizarIncapacidad(incapacidad: IncapacidadModel) {
    return this.http.put<string>(`${this.BASE_URL}/incapacidad/actualizar/${incapacidad.id}`, incapacidad);
  }

  borrarIncapacidad(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/incapacidad/borrar/${id}`)
  }
}
