import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesModel } from 'src/app/shared/models/roles.model';
import { RolesService } from '../../../shared/services/roles.service';

@Component({
  selector: 'app-editar-roles',
  templateUrl: './editar-roles.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarRolesComponent implements OnInit {
  id = '';
  roles = new RolesModel('', '');
  isFormSubmitted: boolean = false;
  
  constructor(
    private rolesService: RolesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.rolesService.obtenerRol(this.id).subscribe(data => {
        this.roles = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {

    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }  

    if (this.id) {
      // Si hay un ID, significa que estás editando, entonces utiliza el método de actualizar
      this.rolesService.actualizarRoles(this.roles).subscribe(
        (data) => {
          alert('Rol actualizado correctamente');
          this.router.navigate(['/editar-consultar-roles']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o el rol ya está registrado');
          } else {
            console.error(error);
          }
        }
      );
    } else {
      // Si no hay un ID, significa que estás creando, utiliza el método de agregar
      this.rolesService.agregarRoles(this.roles).subscribe(
        (data) => {
          alert('Rol registrado correctamente');
          this.router.navigate(['/editar-consultar-roles']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o el rol ya está registrado');
          } else {
            console.error(error);
          }
        }
      );
    }
  }
  isFormFilled(): boolean {
    return !!this.roles.nombreRol;
  }
}
