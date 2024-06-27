import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitasModel } from '../models/citas.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerCitas() {
    return this.http.get<CitasModel[]>(`${this.BASE_URL}/citas`);
  }

  obtenerCita(id: string) {
    return this.http.get<CitasModel[]>(`${this.BASE_URL}/citas/${id}`);
  }
  
  agregarCitas(citas: CitasModel) {
    return this.http.post<string>(`${this.BASE_URL}/citas/agregar`, citas);
  }

  actualizarCitas(citas: CitasModel) {
    return this.http.put<string>(`${this.BASE_URL}/citas/actualizar/${citas.id}`, citas);
  }

  borrarCitas(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/citas/borrar/${id}`)
  }

  obtenerCitasPorMedico(medicoId: string): Observable<CitasModel[]> {
    return this.http.get<CitasModel[]>(`${this.BASE_URL}/citas?medicoId=${medicoId}`);
  }
}
