import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PqrsModel } from '../models/pqrs.model';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerPqrs(): Observable<PqrsModel[]> {
    return this.http.get<PqrsModel[]>(`${this.BASE_URL}/pqrs`);
  }
  
  obtenerPqr(id: string): Observable<PqrsModel[]> {
    return this.http.get<PqrsModel[]>(`${this.BASE_URL}/pqrs/${id}`);
  }

  agregarPqrs(pqrs: PqrsModel): Observable<string> {
    return this.http.post<string>(`${this.BASE_URL}/pqrs/agregar`, pqrs);
  }

  actualizarPqrs(pqrs: PqrsModel): Observable<string> {
    return this.http.put<string>(`${this.BASE_URL}/pqrs/actualizar/${pqrs.id_pqrs}`, pqrs);
  }

  borrarPqrs(id: string): Observable<string> {
    return this.http.delete<string>(`${this.BASE_URL}/pqrs/borrar/${id}`);
  }
}
