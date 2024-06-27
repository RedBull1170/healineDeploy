import { Component, OnInit } from '@angular/core';
import { EspecialidadesModel } from 'src/app/shared/models/especialidades.model';
import { EspecialidadesService } from '../../../shared/services/especialidades.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consultar-especialidades',
  templateUrl: './consultar-especialidades.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ConsultarEspecialidadesComponent implements OnInit {

  especialidad: Observable<EspecialidadesModel[]> | undefined;
  especialidades: EspecialidadesModel[] = [];
  filtroNombreEspecialidad: string = '';

  constructor(private especialidadesService: EspecialidadesService) {}

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

  borrarEspecialidad(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta Especialidad?');

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
  
    return especialidades.filter(e => {
      const nombreEspecialidadCoincide = this.filtroNombreEspecialidad === '' || e.nombre.toLowerCase().includes(this.filtroNombreEspecialidad.toLowerCase());
  
      return nombreEspecialidadCoincide;
    });
  }
}
