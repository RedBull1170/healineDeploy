import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormulasModel } from '../models/formulas.model';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {

  BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  obtenerFormulas() {
    return this.http.get<FormulasModel[]>(`${this.BASE_URL}/formulas`);
  }

  obtenerFormula(id: string) {
    return this.http.get<FormulasModel[]>(`${this.BASE_URL}/formulas/${id}`);
  }

  
  agregarFormulas(formulas: FormulasModel) {
    return this.http.post<string>(`${this.BASE_URL}/formulas/agregar`, formulas);
  }

  actualizarFormulas(formulas: FormulasModel) {
    return this.http.put<string>(`${this.BASE_URL}/formulas/actualizar/${formulas.id}`, formulas);
  }

  borrarFormulas(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/formulas/borrar/${id}`)
  }
}
