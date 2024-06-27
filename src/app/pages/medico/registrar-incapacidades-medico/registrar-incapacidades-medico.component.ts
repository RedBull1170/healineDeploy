import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncapacidadModel } from 'src/app/shared/models/incapacidad.model';
import { IncapacidadService } from '../../../shared/services/incapacidad.service';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { CitasService } from '../../../shared/services/citas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registrar-incapacidades-medico',
  templateUrl: './registrar-incapacidades-medico.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarIncapacidadesMedicoComponent implements OnInit {
  incapacidad = new IncapacidadModel('', '', '', '', '', '');
  usersMedicos: UsersModel[] = [];
  usersPacientes: UsersModel[] = [];
  citas: CitasModel[] = [];
  filteredCitas: CitasModel[] = [];
  isFormSubmitted: boolean = false;
  userInfo: any;

  incapacida: Observable<IncapacidadModel[]> | undefined;
  incapacidadd: IncapacidadModel[] = [];

  constructor(
    private incapacidadService: IncapacidadService,
    private usersService: UsersService,
    private citasService: CitasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');

    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersMedicos = data.filter(user => user.rol === 'Medico');
      },
      (error) => {
        console.error(error);
      }
    );

    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersPacientes = data.filter(user => user.rol === 'Paciente');
      },
      (error) => {
        console.error(error);
      }
    );

    this.citasService.obtenerCitas().subscribe(
      (data) => {
        this.citas = data;
        this.filteredCitas = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.incapacidadService.obtenerIncapacidad().subscribe(
      (data) => {
        this.incapacidadd = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  filterCitas() {
    const pacienteSeleccionado = this.incapacidad.paciente.split(' ')[0];
    this.filteredCitas = this.citas.filter(cita => cita.paciente.includes(pacienteSeleccionado));
  }

  onSubmit() {
    console.log("Médico seleccionado:", this.incapacidad.medico);

    if (!this.isFormFilled()) {
      alert('Por favor complete todos los campos obligatorios.');
      return;
    }

    this.incapacidad.medico = `${this.userInfo.documento} - ${this.userInfo.primerNombre} ${this.userInfo.segundoNombre ? this.userInfo.segundoNombre + ' ' : ''}${this.userInfo.primerApellido} ${this.userInfo.segundoApellido ? this.userInfo.segundoApellido : ''}`;

    if (!this.incapacidad.medico) {
      alert('Seleccione un médico');
      return;
    }

    this.incapacidadService.agregarIncapacidad(this.incapacidad).subscribe(
      (data) => {
        alert('Incapacidad registrada correctamente');
        this.router.navigate(['/medico-pacientes']);
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifique los campos o la incapacidad ya está registrada');
        } else {
          console.error(error);
        }
      }
    );
  }
  isFormFilled(): boolean {
    return !!this.incapacidad.paciente && !!this.incapacidad.fecha && !!this.incapacidad.tipo && !!this.incapacidad.detalles;
  }


}
