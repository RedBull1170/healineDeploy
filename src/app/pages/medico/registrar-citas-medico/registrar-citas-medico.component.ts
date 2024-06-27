import { Component, OnInit } from '@angular/core';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { CitasService } from '../../../shared/services/citas.service';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { EspecialidadesService } from 'src/app/shared/services/especialidades.service';
import { EspecialidadesModel } from 'src/app/shared/models/especialidades.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-citas-medico',
  templateUrl: './registrar-citas-medico.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarCitasMedicoComponent {
  citas = new CitasModel('', '', '', '', '', '', '', '');
  usersPacientes: UsersModel[] = [];
  especialidades: EspecialidadesModel[] = [];
  isFormSubmitted: boolean = false;
  userInfo: any;

  constructor(
    private citasService: CitasService,
    private usersService: UsersService,
    private especialidadesService: EspecialidadesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');

    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersPacientes = data.filter(users => users.rol === 'Paciente');

      },
      (error) => {
        console.error(error);
      }
    );

    this.especialidadesService.obtenerEspecialidades().subscribe(
      (data) => {
        this.especialidades = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }
  
    this.citas.medico = `${this.userInfo.documento} - ${this.userInfo.primerNombre} ${this.userInfo.segundoNombre ? this.userInfo.segundoNombre + ' ' : ''}${this.userInfo.primerApellido} ${this.userInfo.segundoApellido ? this.userInfo.segundoApellido : ''}`;
  
    if (!this.citas.paciente) {
      alert('Seleccione un paciente');
      return;
    }

    // Validar la fecha de la cita
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
        this.router.navigate(['/medico-citas']);
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

  isFormFilled(): boolean {
    return !!this.citas.fecha && !!this.citas.hora && !!this.citas.paciente && !!this.citas.especialidad;
  }
}