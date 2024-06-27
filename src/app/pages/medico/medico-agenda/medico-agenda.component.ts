import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/shared/services/agenda.service';
import { AgendaModel } from 'src/app/shared/models/agenda.model';
import { PqrsModel } from 'src/app/shared/models/pqrs.model';
import { PqrsService } from 'src/app/shared/services/pqrs.service';
import { EncuestasModel } from 'src/app/shared/models/encuestas.model';
import { EncuestasService } from 'src/app/shared/services/encuestas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico-agenda',
  templateUrl: './medico-agenda.component.html',
  styleUrls: ['../../../app.component.css']
})
export class MedicoAgendaComponent implements OnInit {
  hour: string = '00';
  minute: string = '00';
  second: string = '00';
  userInfo: any; 
  agendasMedicas: AgendaModel[] = [];
  agendaMed: AgendaModel[] = [];
  pqrsMed: PqrsModel[] = [];
  mostrarEncuesta: boolean = false;

  // Encuesta
  encuestas = new EncuestasModel('', '', '', '', '', '', '', '', '');
  isFormSubmitted: boolean = false;

  constructor(private agendaService: AgendaService, private pqrsService: PqrsService, private encuestasService: EncuestasService, private router: Router) {}

  ngOnInit() {
    this.updateClock(); 
    setInterval(() => this.updateClock(), 1000); 

    // Obtener la información del usuario del Login :C
    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');

    // Cargar agendas médicas al inicializar el componente
    this.obtenerAgendasMedico();  
    this.obtenerPqrsMedico();  
  }

  updateClock() {
    const now = new Date();
    this.hour = now.getHours().toString().padStart(2, '0');
    this.minute = now.getMinutes().toString().padStart(2, '0');
    this.second = now.getSeconds().toString().padStart(2, '0');
  }

  obtenerAgendasMedico() {
    this.agendaService.obtenerAgenda().subscribe(
      (agendas: AgendaModel[]) => {
        const agendaMedico = agendas.filter(agenda => agenda.medico.includes(this.userInfo.documento));
        this.agendaMed = agendaMedico;
      },
      error => {
        console.error('Error al obtener agendas del médico:', error);
      }
    );
  }

  obtenerPqrsMedico() {
    this.pqrsService.obtenerPqrs().subscribe(
      (pqrs: PqrsModel[]) => {
        const pqrsMedico = pqrs.filter(pqrs => pqrs.email.includes(this.userInfo.email));
        this.pqrsMed = pqrsMedico;
      },
      error => {
        console.error('Error al obtener PQRS del médico:', error);
      }
    );
  }

  onSubmit() {
    console.log('onSubmit');

    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    this.encuestas.documento = `${this.userInfo.documento}`;
    this.encuestas.email = `${this.userInfo.email}`;
    this.encuestas.rol = `${this.userInfo.rol}`;

    this.encuestasService.agregarEncuestas(this.encuestas).subscribe(
      (data) => {
        alert('Encuestas registrada correctamente');
        this.router.navigate(['/index']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifica los campos o la encuesta ya está registrada');
        } else {
          console.error(error);
        }
      }
    );
  }

  isFormFilled(): boolean {
    return !!this.encuestas.calificacion && !!this.encuestas.facilidad && !!this.encuestas.seguridad && !!this.encuestas.velocidad && !!this.encuestas.opinion;
  }

  salir() {
    this.mostrarEncuesta = false;
    window.location.href = '/index';
  }
}
