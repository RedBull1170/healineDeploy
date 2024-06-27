import { Component, OnInit } from '@angular/core';
import { RolesModel } from 'src/app/shared/models/roles.model';
import { RolesService } from '../../../shared/services/roles.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-consultar-roles',
  templateUrl: './editar-consultar-roles.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarConsultarRolesComponent implements OnInit {

  rol: Observable<RolesModel[]> | undefined;
  roles: RolesModel[] = [];
  filtroNombreRol: string = '';

  constructor(private rolesService: RolesService, private router: Router) {}

  ngOnInit() {
    this.rolesService.obtenerRoles().subscribe(
      (data) => {
        this.roles = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  borrarRoles(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar este ROL?');

    if (confirmacion) {
      this.rolesService.borrarRoles(id).subscribe(data => {
        console.log(data);

        this.rolesService.obtenerRoles().subscribe(updatedRoles => {
          this.roles = updatedRoles;
        });
      });
    }
  }

  filtrarRoles(roles: RolesModel[] | undefined | null): RolesModel[] {
    if (!roles) {
      return [];
    }
  
    return roles.filter(s => {
      const nombreRolCoincide = this.filtroNombreRol === '' || s.nombreRol.toLowerCase().includes(this.filtroNombreRol.toLowerCase());
  
      return nombreRolCoincide;
    });
  }
}
