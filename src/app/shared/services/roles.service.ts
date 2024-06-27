import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolesModel } from '../models/roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerRoles() {
    return this.http.get<RolesModel[]>(`${this.BASE_URL}/roles`);
  }

  obtenerRol(id: string) {
    return this.http.get<RolesModel[]>(`${this.BASE_URL}/roles/${id}`);
  }

  agregarRoles(roles: RolesModel) {
    return this.http.post<string>(`${this.BASE_URL}/roles/agregar`, roles);
  }

  actualizarRoles(roles: RolesModel) {
    return this.http.put<string>(`${this.BASE_URL}/roles/actualizar/${roles.id}`, roles);
  }

  borrarRoles(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/roles/borrar/${id}`)
  }
}
