import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EncuestasModel } from '../models/encuestas.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerEncuestas(): Observable<EncuestasModel[]> {
    return this.http.get<EncuestasModel[]>(`${this.BASE_URL}/encuestas`);
  }

  obtenerEncuesta(id: string): Observable<EncuestasModel[]> {
    return this.http.get<EncuestasModel[]>(`${this.BASE_URL}/encuestas/${id}`);
  }

  agregarEncuestas(encuestas: EncuestasModel): Observable<string> {
    return this.http.post<string>(`${this.BASE_URL}/encuestas/agregar`, encuestas);
}


  actualizarEncuestas(encuestas: EncuestasModel): Observable<string> {
    return this.http.put<string>(`${this.BASE_URL}/encuestas/actualizar/${encuestas.documento}`, encuestas);
  }

  borrarEncuestas(id: string): Observable<string> {
    return this.http.put<string>(`${this.BASE_URL}/encuestas/inactivar/${id}`, {});
  }
  
  

}
