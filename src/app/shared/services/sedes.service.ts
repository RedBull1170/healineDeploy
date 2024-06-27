import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SedesModel } from '../models/sedes.model';

@Injectable({
  providedIn: 'root'
})
export class SedesService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerSedes() {
    return this.http.get<SedesModel[]>(`${this.BASE_URL}/sedes`);
  }

  obtenerSede(id: string) {
    return this.http.get<SedesModel[]>(`${this.BASE_URL}/sedes/${id}`);
  }

  
  agregarSedes(sedes: SedesModel) {
    return this.http.post<string>(`${this.BASE_URL}/sedes/agregar`, sedes);
  }

  actualizarSedes(sedes: SedesModel) {
    return this.http.put<string>(`${this.BASE_URL}/sedes/actualizar/${sedes.id}`, sedes);
  }

  borrarSedes(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/sedes/borrar/${id}`)
  }
}
