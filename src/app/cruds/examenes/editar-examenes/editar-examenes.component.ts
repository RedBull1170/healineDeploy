import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExamenesModel } from 'src/app/shared/models/examenes.model';
import { ExamenesService } from '../../../shared/services/examenes.service';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { CitasService } from '../../../shared/services/citas.service';

@Component({
  selector: 'app-editar-examenes',
  templateUrl: './editar-examenes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarExamenesComponent implements OnInit {
  id = '';
  examenes = new ExamenesModel('', '', '', '', '', '','');
  usersPacientes: UsersModel[] = [];
  citas: CitasModel[] = [];
  isFormSubmitted: boolean = false;

  constructor(
    private examenesService: ExamenesService,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private citasService: CitasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.examenesService.obtenerExamen(this.id).subscribe(data => {
        this.examenes = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }

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

    if (this.id) {
      this.examenesService.actualizarExamenes(this.examenes).subscribe(
        (data) => {
          alert('examen actualizado correctamente');
          this.router.navigate(['/editar-consultar-examenes']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o el examen ya está registrado');
          } else {
            console.error(error);
          }
        }
      );
    } else {
      this.examenesService.agregarExamenes(this.examenes).subscribe(
        (data) => {
          alert('examen registradO correctamente');
          this.router.navigate(['/editar-consultar-examenes']);
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
  }
  isFormFilled(): boolean {
    return !!this.examenes.cita && !!this.examenes.paciente && !!this.examenes.nombre && !!this.examenes.resultado && !!this.examenes.estado;
  }
}
