import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestasModel } from 'src/app/shared/models/encuestas.model';
import { PqrsModel } from 'src/app/shared/models/pqrs.model';
import { EncuestasService } from 'src/app/shared/services/encuestas.service';
import { PqrsService } from 'src/app/shared/services/pqrs.service';

@Component({
  selector: 'app-paciente-home-2',
  templateUrl: './paciente-home-2.component.html',
  styleUrls: ['./paciente-home-2.component.css']
})
export class PacienteHome2Component {

  userInfo: any; // Objeto para almacenar la información del usuario
  pqrsMed: PqrsModel[] = [];
  mostrarEncuesta: boolean = false;

  // Encuesta
  encuestas = new EncuestasModel('', '', '', '', '', '', '', '', '');


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
          alert('Encuesta ya está registrada');
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


  constructor( private pqrsService: PqrsService, private router: Router,   private encuestasService: EncuestasService,) {}

  ngOnInit() { 
    // Obtener la información del usuario del Login :C
    this.userInfo = JSON.parse(localStorage.getItem('patientUser') || '{}');

    this.obtenerPqrsMedico();  
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
}
