import { Component, OnInit } from '@angular/core';
import { IncapacidadModel } from 'src/app/shared/models/incapacidad.model';
import { IncapacidadService } from '../../../shared/services/incapacidad.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consultar-incapacidad',
  templateUrl: './consultar-incapacidad.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ConsultarIncapacidadComponent implements OnInit {

  incapacida: Observable<IncapacidadModel[]> | undefined;
  incapacidad: IncapacidadModel[] = [];
  filtroPaciente: string = '';
  filtroMedico: string = '';

  constructor(private incapacidadService: IncapacidadService) {}

  ngOnInit() {
    this.incapacidadService.obtenerIncapacidad().subscribe(
      (data) => {
        this.incapacidad = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  borrarIncapacida(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta incapacidad?');

    if (confirmacion) {
      this.incapacidadService.borrarIncapacidad(id).subscribe(data => {
        console.log(data);

        this.incapacidadService.obtenerIncapacidad().subscribe(updatedIncapacidad => {
          this.incapacidad = updatedIncapacidad;
        });
      });
    }
  }

  filtrarIncapacidad(incapacidad: IncapacidadModel[] | undefined | null): IncapacidadModel[] {
    if (!incapacidad) {
      return [];
    }
  
    return incapacidad.filter(s => {
      const pacienteIncapacidadCoincide = this.filtroPaciente === '' || s.paciente.toLowerCase().includes(this.filtroPaciente.toLowerCase());
      const medicoIncapacidadCoincide = this.filtroMedico === '' || s.medico.toLowerCase().includes(this.filtroMedico.toLowerCase());

      return pacienteIncapacidadCoincide && medicoIncapacidadCoincide;
    });
  }
}
