import { Component, OnInit } from '@angular/core';
import { AgendaModel } from 'src/app/shared/models/agenda.model';
import { AgendaService } from '../../../shared/services/agenda.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consultar-agenda',
  templateUrl: './consultar-agenda.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ConsultarAgendaComponent implements OnInit {

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
