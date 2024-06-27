import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EncuestasModel } from 'src/app/shared/models/encuestas.model';
import { ExamenesModel } from 'src/app/shared/models/examenes.model';
import { EncuestasService } from 'src/app/shared/services/encuestas.service';
import { ExamenesService } from 'src/app/shared/services/examenes.service';

@Component({
  selector: 'app-editar-consultar-examenes-medico',
  templateUrl: './editar-consultar-examenes-medico.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarConsultarExamenesMedicoComponent implements OnInit {
  hour: string = '00';
  minute: string = '00';
  second: string = '00';
  userInfo: any; 
  examen: Observable<ExamenesModel[]> | undefined;
  examenes: ExamenesModel[] = [];
  filtroPaciente: string = '';

  mostrarEncuesta: boolean = false;

  // Encuesta
  encuestas = new EncuestasModel('', '', '', '', '', '', '', '', '');

  constructor(private examenesService: ExamenesService, private encuestasService: EncuestasService, private router: Router,) {}


  ngOnInit() {
    this.updateClock(); 
    setInterval(() => this.updateClock(), 1000); 

    // Obtener la información del usuario del Login :C
    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');


    this.examenesService.obtenerExamenes().subscribe(
      (data) => {
        this.examenes = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateClock() {
    const now = new Date();
    this.hour = now.getHours().toString().padStart(2, '0');
    this.minute = now.getMinutes().toString().padStart(2, '0');
    this.second = now.getSeconds().toString().padStart(2, '0');
  }

  filtrarExamenes(examenes: ExamenesModel[] | undefined | null): ExamenesModel[] {
    if (!examenes) {
      return [];
    }
  
    return examenes.filter(s => {
      const nombreExamenCoincide = this.filtroPaciente === '' || s.paciente.toLowerCase().includes(this.filtroPaciente.toLowerCase());
  
      return nombreExamenCoincide;
    });
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

  
  autorizarExamen(examen: ExamenesModel) {
    examen.estado = 'Autorizado';
    this.examenesService.actualizarExamenes(examen).subscribe(
        (data) => {
            alert('Examen Autorizado correctamente');
        },
        (error) => {
            console.error(error);
            alert('Error al confirmar el examen');
        }
    );
}

noAutorizarExamen(examen: ExamenesModel) {
  examen.estado = 'No Autorizado';
    this.examenesService.actualizarExamenes(examen).subscribe(
        (data) => {
            alert('Examen No Autorizado correctamente');
        },
        (error) => {
            console.error(error);
            alert('Error al cancelar el examen');
        }
    );
}
}
