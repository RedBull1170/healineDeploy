import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgendaModel } from '../models/agenda.model';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerAgenda() {
    return this.http.get<AgendaModel[]>(this.BASE_URL+'/agenda');
  }

  obtenerAgendaa(id: string) {
    return this.http.get<AgendaModel[]>(`${this.BASE_URL}/agenda/${id}`);
  }
  agregarAgenda(agenda: AgendaModel) {
    return this.http.post<string>(`${this.BASE_URL}/agenda/agregar`, agenda);
  }

  actualizarAgenda(agenda: AgendaModel) {
    return this.http.put<string>(`${this.BASE_URL}/agenda/actualizar/${agenda.id}`, agenda);
  }

  borrarAgenda(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/agenda/borrar/${id}`)
  }
}
