import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { AgendaModel } from 'src/app/shared/models/agenda.model';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { AgendaService } from 'src/app/shared/services/agenda.service';
import { CitasService } from 'src/app/shared/services/citas.service';

@Component({
  selector: 'app-citas-consultar',
  templateUrl: './citas-consultar.component.html',
  styleUrls: ['./citas-consultar.component.css']
})
export class CitasConsultarComponent implements OnInit {
  citas: Observable<CitasModel[]> | undefined;
  filtroMedico: string = '';
  filtroPaciente: string = '';
  agenda: Observable<AgendaModel[]> | undefined;
  agendas: AgendaModel[] = [];

  constructor(private citasService: CitasService, private agendaService: AgendaService) {}

  ngOnInit() {
    this.citas = this.citasService.obtenerCitas();

    this.agendaService.obtenerAgenda().subscribe(
      (data) => {
        this.agendas = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  imprimirTabla() {
    const printContent = document.getElementById('tabla-imprimir');

    if (printContent) {
      const originalContents = document.body.innerHTML; 

      document.body.innerHTML = `
        <html>
          <head>
            <title>Tabla de Citas</title>
          </head>
          <body>
            ${printContent.innerHTML}
          </body>
        </html>
      `;

      window.print(); 

      document.body.innerHTML = originalContents;
    } else {
      console.error('No se encontró la tabla para imprimir');
    }
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
