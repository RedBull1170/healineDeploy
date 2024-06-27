import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestasModel } from 'src/app/shared/models/encuestas.model';
import { EncuestasService } from 'src/app/shared/services/encuestas.service';

interface EncuestasCount {
  [key: string]: number;
}

@Component({
  selector: 'app-encuestas-home',
  templateUrl: './encuestas-home.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class EncuestasHomeComponent implements OnInit {
  encuestas: EncuestasModel[] = [];
  tipos: string[] = ['Excelente', 'Muy Bueno', 'Bueno', 'Regular', 'Deficiente'];
  calificacionCount: EncuestasCount = {};
  facilidadCount: EncuestasCount = {};
  seguridadCount: EncuestasCount = {};
  velocidadCount: EncuestasCount = {};
  filtroDocumento: string = '';

  constructor(private encuestasService: EncuestasService, private router: Router) { }

  ngOnInit() {
    this.encuestasService.obtenerEncuestas().subscribe(
      (data) => {
        this.encuestas = data;
        this.contarEncuestasPorCategoria();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  contarEncuestasPorCategoria() {
    for (const tipo of this.tipos) {
      this.calificacionCount[tipo] = this.contarEncuestasPorTipo('calificacion', tipo);
      this.facilidadCount[tipo] = this.contarEncuestasPorTipo('facilidad', tipo);
      this.seguridadCount[tipo] = this.contarEncuestasPorTipo('seguridad', tipo);
      this.velocidadCount[tipo] = this.contarEncuestasPorTipo('velocidad', tipo);
    }
  }

  contarEncuestasPorTipo(tipoCampo: keyof EncuestasModel, valor: string): number {
    return this.encuestas.filter(encuesta => encuesta[tipoCampo] === valor).length;
  }

  getBarWidth(count: number): number {
    const maxCount = Math.max(...Object.values(this.calificacionCount), ...Object.values(this.facilidadCount), ...Object.values(this.seguridadCount), ...Object.values(this.velocidadCount));
    return maxCount > 0 ? (count / maxCount) * 100 : 0;
  }

  filtrarEncuestas(encuestas: EncuestasModel[] | undefined | null): EncuestasModel[] {
    if (!encuestas) {
      return [];
    }

    return encuestas.filter(s => {
      const encuestasCoincide = this.filtroDocumento === '' || s.documento.toLowerCase().includes(this.filtroDocumento.toLowerCase());

      return encuestasCoincide;
    });
  }
}