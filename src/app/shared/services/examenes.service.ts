import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExamenesModel } from '../models/examenes.model';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerExamenes() {
    return this.http.get<ExamenesModel[]>(`${this.BASE_URL}/examenes`);
  }

  obtenerExamen(id: string) {
    return this.http.get<ExamenesModel[]>(`${this.BASE_URL}/examenes/${id}`);
  }
  
  agregarExamenes(examenes: ExamenesModel) {
    return this.http.post<string>(`${this.BASE_URL}/examenes/agregar`, examenes);
  }

  actualizarExamenes(examenes: ExamenesModel) {
    return this.http.put<string>(`${this.BASE_URL}/examenes/actualizar/${examenes.id}`, examenes);
  }

  borrarExamenes(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/examenes/borrar/${id}`)
  }
}
