import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersModel } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerUsers(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(`${this.BASE_URL}/users`);
  }

  obtenerUser(id: string): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(`${this.BASE_URL}/users/${id}`);
  }

  agregarUsers(users: UsersModel): Observable<string> {
    return this.http.post<string>(`${this.BASE_URL}/users/agregar`, users);
}


  actualizarUsers(users: UsersModel): Observable<string> {
    return this.http.put<string>(`${this.BASE_URL}/users/actualizar/${users.documento}`, users);
  }

  borrarUsers(id: string): Observable<string> {
    return this.http.put<string>(`${this.BASE_URL}/users/inactivar/${id}`, {});
  }
  
  

}
