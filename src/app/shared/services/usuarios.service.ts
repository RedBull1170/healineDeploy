// usuarios.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuariosModel } from '../models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    return this.http.get<UsuariosModel[]>(`${this.BASE_URL}/usuarios`);
  }

  obtenerUsuario(id: string) {
    return this.http.get<UsuariosModel[]>(`${this.BASE_URL}/usuarios/${id}`);
  }

  // instruccion para agenda
  obtenerUsuariosPorRol(rol: string): Observable<UsuariosModel[]> {
    return this.http.get<UsuariosModel[]>(`${this.BASE_URL}/usuarios?rol=${rol}`);
  }

  agregarUsuarios(usuarios: UsuariosModel) {
    return this.http.post<string>(`${this.BASE_URL}/usuarios/agregar`, usuarios);
  }

  actualizarUsuarios(usuarios: UsuariosModel) {
    return this.http.put<string>(`${this.BASE_URL}/usuarios/actualizar/${usuarios.documento}`, usuarios);
  }

  borrarUsuarios(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/usuarios/borrar/${id}`)
  }
}
