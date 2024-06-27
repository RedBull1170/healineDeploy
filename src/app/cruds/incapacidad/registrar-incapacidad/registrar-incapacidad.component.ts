import { Component, OnInit } from '@angular/core';
import { IncapacidadModel } from 'src/app/shared/models/incapacidad.model';
import { IncapacidadService } from '../../../shared/services/incapacidad.service';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { Router } from '@angular/router';
import { CitasModel } from 'src/app/shared/models/citas.model'; // Importa el modelo de citas
import { CitasService } from '../../../shared/services/citas.service'; // Importa el servicio de citas

@Component({
  selector: 'app-registrar-incapacidad',
  templateUrl: './registrar-incapacidad.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarIncapacidadComponent implements OnInit {
  incapacidad = new IncapacidadModel('', '', '', '', '', '');
  usersMedicos: UsersModel[] = [];
  usersPacientes: UsersModel[] = [];
  citas: CitasModel[] = []; 
  isFormSubmitted: boolean = false;

  constructor(
    private incapacidadService: IncapacidadService,
    private usersService: UsersService,
    private citasService: CitasService, // Inyecta el servicio de citas
    private router: Router
  ) {}

  ngOnInit() {
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

    // Obtener las citas disponibles al inicializar el componente
    this.citasService.obtenerCitas().subscribe(
      (data) => {
        this.citas = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    console.log("Médico seleccionado:", this.incapacidad.medico);
    
    if (!this.isFormFilled()) {
      alert('Por favor complete todos los campos obligatorios.');
      return;
    }

    if (!this.incapacidad.medico) {
      // Si no se ha seleccionado ningún médico, muestra una alerta
      alert('Seleccione un médico');
      return;
    }

    this.incapacidadService.agregarIncapacidad(this.incapacidad).subscribe(
      (data) => {
        alert('Incapacidad registrada correctamente');
        this.router.navigate(['/incapacidad-home']);
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
    return !!this.incapacidad.paciente && !!this.incapacidad.medico && !!this.incapacidad.fecha && !!this.incapacidad.tipo && !!this.incapacidad.detalles;
  }
}
