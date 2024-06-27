import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EspecialidadesModel } from '../models/especialidades.model';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerEspecialidades() {
    return this.http.get<EspecialidadesModel[]>(`${this.BASE_URL}/especialidades`);
  }

  obtenerEspecialidad(id: string) {
    return this.http.get<EspecialidadesModel[]>(`${this.BASE_URL}/especialidades/${id}`);
  }

  agregarEspecialidades(especialidades: EspecialidadesModel) {
    return this.http.post<string>(`${this.BASE_URL}/especialidades/agregar`, especialidades);
  }

  actualizarEspecialidades(especialidades: EspecialidadesModel) {
    return this.http.put<string>(`${this.BASE_URL}/especialidades/actualizar/${especialidades.id}`, especialidades);
  }

  borrarEspecialidades(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/especialidades/borrar/${id}`);
  }
}
