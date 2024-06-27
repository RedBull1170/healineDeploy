import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TurnoModel } from '../models/turno-model';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerTurno() {
    return this.http.get<TurnoModel[]>(this.BASE_URL+'/turno');
  }
  
  obtenerRol(id: string) {
    return this.http.get<TurnoModel[]>(`${this.BASE_URL}/turno/${id}`);
  }

  agregarTurno(turno: TurnoModel) {
    return this.http.post<string>(`${this.BASE_URL}/turno/agregar`, turno);
  }

  actualizarTurno(turno: TurnoModel) {
    return this.http.put<string>(`${this.BASE_URL}/turno/actualizar/${turno.idturnoMedico}`, turno);
  }

  borrarTurno(id: string) {
    return this.http.delete<void>(`${this.BASE_URL}/turno/borrar/${id}`);
  }
}
