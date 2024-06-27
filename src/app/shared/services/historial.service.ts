import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialMedicoService {
  constructor(private http: HttpClient) {}

  obtenerHistorialMedico(documento: string): Observable<any> {
    // Aquí haces la lógica para obtener el historial médico basado en el documento del usuario
    // Puedes hacer una solicitud HTTP a tu backend para obtener esta información
    return this.http.get<any>(`/api/historial-medico/${documento}`);
  }
}
