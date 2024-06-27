import { Component, OnInit } from '@angular/core';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { CitasService } from '../../../shared/services/citas.service';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { EspecialidadesService } from 'src/app/shared/services/especialidades.service';
import { EspecialidadesModel } from 'src/app/shared/models/especialidades.model';
import { Router } from '@angular/router';
import { EncuestasService } from 'src/app/shared/services/encuestas.service';
import { EncuestasModel } from 'src/app/shared/models/encuestas.model';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  citas = new CitasModel('', '', '', '', '', '', '', '');
  usersPacientes: UsersModel[] = [];
  especialidades: EspecialidadesModel[] = [];
  isFormSubmitted: boolean = false;
  userInfo: any;
  usersMedicos: UsersModel[] = []; // Variable para almacenar todos los médicos sin filtrar
  mostrarEncuesta: boolean = false;

  // Encuesta
  encuestas = new EncuestasModel('', '', '', '', '', '', '', '', '');

  constructor(
    private citasService: CitasService,
    private usersService: UsersService,
    private especialidadesService: EspecialidadesService,
    private router: Router,
    private encuestasService: EncuestasService,
  ) {}

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('patientUser') || '{}');

    // Obtener todos los médicos sin filtrar
    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersMedicos = data.filter(users => users.rol === 'Medico');
      },
      (error) => {
        console.error(error);
      }
    );

    // Obtener las especialidades
    this.especialidadesService.obtenerEspecialidades().subscribe(
      (data) => {
        this.especialidades = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Método para filtrar los médicos en función de la especialidad seleccionada
  filterMedicosByEspecialidad(especialidadSeleccionada: string) {
    if (!especialidadSeleccionada) {
      this.usersMedicos = []; // Si no se selecciona una especialidad, vaciar la lista de médicos
      return;
    }

    // Filtrar la lista de médicos según la especialidad seleccionada
    this.usersMedicos = this.usersMedicos.filter(medico => medico.especialidad === especialidadSeleccionada);
  }


  onSubmitEncuestas() {
    console.log('onSubmitEncuestas');

    if (!this.isEncuestasFormFilled()) {
      alert('Por favor, complete todos los campos de la encuesta.');
      return;
    }

    this.encuestas.documento = `${this.userInfo.documento}`;
    this.encuestas.email = `${this.userInfo.email}`;
    this.encuestas.rol = `${this.userInfo.rol}`;

    this.encuestasService.agregarEncuestas(this.encuestas).subscribe(
      (data) => {
        alert('Encuesta registrada correctamente');
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

  onSubmitCitas() {
    console.log('onSubmitCitas');

    if (!this.isCitasFormFilled()) {
      alert('Por favor, complete todos los campos de la cita médica.');
      return;
    }

    // Procesar el formulario de citas médicas
    this.citas.paciente = `${this.userInfo.documento} - ${this.userInfo.primerNombre} ${this.userInfo.segundoNombre ? this.userInfo.segundoNombre + ' ' : ''}${this.userInfo.primerApellido} ${this.userInfo.segundoApellido ? this.userInfo.segundoApellido : ''}`;

    const hoy = new Date();
    const fechaSeleccionada = new Date(this.citas.fecha);

    if (fechaSeleccionada < hoy) {
      alert('La fecha de la cita no puede ser menor que el día actual');
      return;
    }

    const unMesDespues = new Date();
    unMesDespues.setMonth(unMesDespues.getMonth() + 1);

    if (fechaSeleccionada > unMesDespues) {
      alert('La fecha de la cita no puede ser mayor a un mes a partir del día actual');
      return;
    }

    // Si pasa las validaciones, enviar la solicitud para agregar la cita
    this.citasService.agregarCitas(this.citas).subscribe(
      (data) => {
        alert('Cita registrada correctamente');
        alert('Puedes ver todo el historial de tus citas en el apartado de HISTORIA MEDICA');
        window.location.reload();      
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifique los campos o la cita ya está registrada');
        } else {
          console.error(error);
        }
      }
    );
  }

  // Verificar si todos los campos del formulario de citas están llenos
  isCitasFormFilled(): boolean {
    return !!this.citas.fecha && !!this.citas.hora && !!this.citas.medico && !!this.citas.especialidad;
  }

  // Verificar si todos los campos del formulario de encuestas están llenos
  isEncuestasFormFilled(): boolean {
    return !!this.encuestas.calificacion && !!this.encuestas.facilidad && !!this.encuestas.seguridad && !!this.encuestas.velocidad && !!this.encuestas.opinion;
  }

  salir() {
    this.mostrarEncuesta = false;
    window.location.href = '/index';
  }
}
