import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaModel } from 'src/app/shared/models/agenda.model';
import { AgendaService } from 'src/app/shared/services/agenda.service';

@Component({
  selector: 'app-agenda-editar',
  templateUrl: './agenda-editar.component.html',
  styleUrls: ['./agenda-editar.component.css']
})
export class AgendaEditarComponent implements OnInit {
  id = '';
  agenda = new AgendaModel(0, '', '', '', '', '');
  isFormSubmitted: boolean = false;

  constructor(
    private agendaService: AgendaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.agendaService.obtenerAgendaa(this.id).subscribe(data => {
        this.agenda = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log("Médico seleccionado:", this.agenda.medico); 

    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    if (!this.agenda.medico) {
      alert('Seleccione un médico');
      return;
    }

    if (this.id) {
      this.agendaService.actualizarAgenda(this.agenda).subscribe(
        (data) => {
          alert('Agenda actualizada correctamente');
          this.router.navigate(['/agenda-consultar']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la agenda ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    } else {
      this.agendaService.agregarAgenda(this.agenda).subscribe(
        (data) => {
          alert('Agenda registrada correctamente');
          this.router.navigate(['/agenda-consultar']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la agenda ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    }
  }
  isFormFilled(): boolean {
    return !!this.agenda.fecha && !!this.agenda.hora_inicio && !!this.agenda.hora_fin && !!this.agenda.descripcion;
}
}

