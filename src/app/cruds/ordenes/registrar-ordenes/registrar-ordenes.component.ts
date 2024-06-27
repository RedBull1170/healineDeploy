import { Component, OnInit } from '@angular/core';
import { OrdenesModel } from 'src/app/shared/models/ordenes.model';
import { OrdenesService } from '../../../shared/services/ordenes.service';
import { Router } from '@angular/router';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { FormulasModel } from 'src/app/shared/models/formulas.model';
import { FormulasService } from '../../../shared/services/formulas.service';

@Component({
  selector: 'app-registrar-ordenes',
  templateUrl: './registrar-ordenes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarOrdenesComponent implements OnInit {
  ordenes = new OrdenesModel('', '', '', '', '');
  usersPacientes: UsersModel[] = [];
  formulas: FormulasModel[] = [];
  isFormSubmitted: boolean = false;

  constructor(
    private ordenesService: OrdenesService,
    private usersService: UsersService,
    private formulasService: FormulasService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersPacientes = data.filter(user => user.rol === 'Paciente');
      },
      (error) => {
        console.error(error);
      }
    );

    this.formulasService.obtenerFormulas().subscribe(
      (data) => {
        this.formulas = data;
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

    this.ordenesService.agregarOrdenes(this.ordenes).subscribe(
      (data) => {
        alert('orden registrado correctamente');
        this.router.navigate(['/ordenes-home']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifique los campos o la orden ya está registrado');
        } else {
          console.error(error);
        }
      }
    );
  }

  isFormFilled(): boolean {
    return !!this.ordenes.paciente && !!this.ordenes.formula && !!this.ordenes.diagnostico && !!this.ordenes.tratamiento;
  }
}
