import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdenesModel } from 'src/app/shared/models/ordenes.model';
import { OrdenesService } from '../../../shared/services/ordenes.service';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from '../../../shared/services/users.service';
import { FormulasModel } from 'src/app/shared/models/formulas.model';
import { FormulasService } from '../../../shared/services/formulas.service';

@Component({
  selector: 'app-editar-ordenes',
  templateUrl: './editar-ordenes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarOrdenesComponent implements OnInit {
  id = '';
  ordenes = new OrdenesModel('', '', '', '', '');
  usersPacientes: UsersModel[] = [];
  formulas: FormulasModel[] = [];
  isFormSubmitted: boolean = false;


  constructor(
    private ordenesService: OrdenesService,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private formulasService: FormulasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.ordenesService.obtenerOrden(this.id).subscribe(data => {
        this.ordenes = data[0];
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
    if (this.id) {
      this.ordenesService.actualizarOrdenes(this.ordenes).subscribe(
        (data) => {
          alert('orden actualizada correctamente');
          this.router.navigate(['/editar-consultar-ordenes']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la orden ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    } else {
      this.ordenesService.agregarOrdenes(this.ordenes).subscribe(
        (data) => {
          alert('orden registrada correctamente');
          this.router.navigate(['/editar-consultar-ordenes']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la orden ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    }
  }
  
  isFormFilled(): boolean {
    return !!this.ordenes.paciente && !!this.ordenes.formula && !!this.ordenes.diagnostico && !!this.ordenes.tratamiento;
  }
}
