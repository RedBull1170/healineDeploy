import { Component, OnInit } from '@angular/core';
import { EspecialidadesModel } from 'src/app/shared/models/especialidades.model';
import { EspecialidadesService } from '../../../shared/services/especialidades.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-consultar-especialidades',
  templateUrl: './editar-consultar-especialidades.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarConsultarEspecialidadesComponent implements OnInit {

  especialidad: Observable<EspecialidadesModel[]> | undefined;
  especialidades: EspecialidadesModel[] = [];
  filtroNombreEspecialidad: string = '';

  constructor(private especialidadesService: EspecialidadesService, private router: Router) {}

  ngOnInit() {
    this.especialidadesService.obtenerEspecialidades().subscribe(
      (data) => {
        this.especialidades = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  borrarEspecialidades(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta especialidad?');

    if (confirmacion) {
      this.especialidadesService.borrarEspecialidades(id).subscribe(data => {
        console.log(data);

        this.especialidadesService.obtenerEspecialidades().subscribe(updatedEspecialidades => {
          this.especialidades = updatedEspecialidades;
        });
      });
    }
  }

  filtrarEspecialidades(especialidades: EspecialidadesModel[] | undefined | null): EspecialidadesModel[] {
    if (!especialidades) {
      return [];
    }
  
    return especialidades.filter(s => {
      const nombreEspecialidadCoincide = this.filtroNombreEspecialidad === '' || s.nombre.toLowerCase().includes(this.filtroNombreEspecialidad.toLowerCase());
  
      return nombreEspecialidadCoincide;
    });
  }
}
