import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { AgendaModel } from 'src/app/shared/models/agenda.model';
import { AgendaService } from 'src/app/shared/services/agenda.service';

@Component({
  selector: 'app-agenda-consultar',
  templateUrl: './agenda-consultar.component.html',
  styleUrls: ['./agenda-consultar.component.css']
})
export class AgendaConsultarComponent implements OnInit {

  agenda: Observable<AgendaModel[]> | undefined;
  agendas: AgendaModel[] = [];
  filtroMedico: String = "";

  constructor(private agendaService: AgendaService) {}

  ngOnInit() {
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
            <title>Tabla de Agendas</title>
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

  borrarAgenda(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta Agenda?');

    if (confirmacion) {
      this.agendaService.borrarAgenda(id).subscribe(data => {
        console.log(data);

        this.agendaService.obtenerAgenda().subscribe(updatedAgenda => {
          this.agendas = updatedAgenda;
        });
      });
    }
  }

  filtrarAgendas(agenda: AgendaModel[] | undefined | null): AgendaModel[] {
    if (!agenda) {
        return [];
    }

    return agenda.filter(u => {
        const idCoincide = u.id.toString().includes(this.filtroMedico.toString());
        const nombreMedicoCoincide = u.medico.toLowerCase().includes(this.filtroMedico.toLowerCase());

        return idCoincide || nombreMedicoCoincide;
    });
}

}
