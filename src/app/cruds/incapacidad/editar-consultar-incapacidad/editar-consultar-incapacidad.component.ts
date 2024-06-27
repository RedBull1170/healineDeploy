import { Component, OnInit } from '@angular/core';
import { IncapacidadModel } from 'src/app/shared/models/incapacidad.model';
import { IncapacidadService } from '../../../shared/services/incapacidad.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-editar-consultar-incapacidad',
  templateUrl: './editar-consultar-incapacidad.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarConsultarIncapacidadComponent implements OnInit {

  incapacida: Observable<IncapacidadModel[]> | undefined;
  incapacidad: IncapacidadModel[] = [];
  filtroPaciente: string = '';
  filtroMedico: string = '';


  constructor(private incapacidadService: IncapacidadService, private router: Router) {}

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

  borrarIncapacidad(id: string) {
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
