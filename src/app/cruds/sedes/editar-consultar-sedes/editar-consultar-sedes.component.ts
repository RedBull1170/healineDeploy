import { Component, OnInit } from '@angular/core';
import { SedesModel } from 'src/app/shared/models/sedes.model';
import { SedesService } from '../../../shared/services/sedes.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-consultar-sedes',
  templateUrl: './editar-consultar-sedes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarConsultarSedesComponent implements OnInit {

  sede: Observable<SedesModel[]> | undefined;
  sedes: SedesModel[] = [];
  filtroNombreSede: string = '';

  constructor(private sedesService: SedesService, private router: Router) {}

  ngOnInit() {
    this.sedesService.obtenerSedes().subscribe(
      (data) => {
        this.sedes = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  borrarSedes(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta Sede?');

    if (confirmacion) {
      this.sedesService.borrarSedes(id).subscribe(data => {
        console.log(data);

        this.sedesService.obtenerSedes().subscribe(updatedSedes => {
          this.sedes = updatedSedes;
        });
      });
    }
  }

  filtrarSedes(sedes: SedesModel[] | undefined | null): SedesModel[] {
    if (!sedes) {
      return [];
    }
  
    return sedes.filter(s => {
      const nombreSedeCoincide = this.filtroNombreSede === '' || s.nombreSede.toLowerCase().includes(this.filtroNombreSede.toLowerCase());
  
      return nombreSedeCoincide;
    });
  }
}
