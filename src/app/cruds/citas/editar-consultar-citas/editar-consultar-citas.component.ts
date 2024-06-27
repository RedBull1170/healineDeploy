import { Component, OnInit } from '@angular/core';
import { CitasModel } from '../../../shared/models/citas.model';
import { Observable } from 'rxjs';
import { CitasService } from '../../../shared/services/citas.service';

@Component({
  selector: 'app-editar-consultar-citas',
  templateUrl: './editar-consultar-citas.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarConsultarCitasComponent implements OnInit {
  citas: Observable<CitasModel[]> | undefined;
  filtroMedico: string = '';
  filtroPaciente: string = '';


  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.citas = this.citasService.obtenerCitas();
  }

  borrarCitas(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta cita?');

    if (confirmacion) {
        this.citasService.borrarCitas(id).subscribe(data => {
            console.log(data);

            this.citasService.obtenerCitas().subscribe(updatedCitas => {
                this.citas = this.citasService.obtenerCitas();
            });
        });
    }
  }


  filtrarCitas(citas: CitasModel[] | null): CitasModel[] {
    if (!citas) {
        return [];
    }

    return citas.filter(u => {
        const medicoCoincide = typeof u.medico === 'string' && (this.filtroMedico.trim() === '' || u.medico.toLowerCase().includes(this.filtroMedico.toLowerCase()));
        const pacienteCoincide = typeof u.paciente === 'string' && (this.filtroPaciente.trim() === '' || u.paciente.toLowerCase().includes(this.filtroPaciente.toLowerCase()));

        return medicoCoincide && pacienteCoincide;
    });
}
  
}
