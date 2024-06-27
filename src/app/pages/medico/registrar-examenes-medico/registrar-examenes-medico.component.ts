import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { ExamenesModel } from 'src/app/shared/models/examenes.model';
import { UsersModel } from 'src/app/shared/models/users.model';
import { CitasService } from 'src/app/shared/services/citas.service';
import { ExamenesService } from 'src/app/shared/services/examenes.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-registrar-examenes-medico',
  templateUrl: './registrar-examenes-medico.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarExamenesMedicoComponent implements OnInit {
  examenes = new ExamenesModel('', '', '', '', '', '','');

  usersPacientes: UsersModel[] = [];
  citas: CitasModel[] = [];
  isFormSubmitted: boolean = false;


  constructor(
    private examenesService: ExamenesService,
    private usersService: UsersService,
    private citasService: CitasService,
    private router: Router
  ) {}

  ngOnInit() {
    // Establecer la fecha de hoy como la fecha por defecto
    const hoy = new Date();
    const formatoFecha = hoy.toISOString().split('T')[0];
    this.examenes.fecha = formatoFecha;

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

    console.log('onSubmit');

    const ahora = new Date();

    const fechaSeleccionada = new Date(this.examenes.fecha);

    const fechaActual = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
    const fechaExamen = new Date(fechaSeleccionada.getFullYear(), fechaSeleccionada.getMonth(), fechaSeleccionada.getDate());

    

    this.examenesService.agregarExamenes(this.examenes).subscribe(
        (data) => {
            alert('Examen registrado correctamente');
            this.router.navigate(['/medico-examenes']);
        },
        (error) => {
            if (error.status === 500) {
                alert('Verifique los campos o el examen ya está registrado');
            } else {
                console.error(error);
            }
        }
    );
  }
  isFormFilled(): boolean {
    return !!this.examenes.cita && !!this.examenes.paciente && !!this.examenes.nombre && !!this.examenes.resultado && !!this.examenes.fecha;
  }
}
