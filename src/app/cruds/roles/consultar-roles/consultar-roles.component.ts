import { Component, OnInit } from '@angular/core';
import { RolesModel } from 'src/app/shared/models/roles.model';
import { RolesService } from '../../../shared/services/roles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consultar-roles',
  templateUrl: './consultar-roles.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ConsultarRolesComponent implements OnInit {

  rol: Observable<RolesModel[]> | undefined;
  roles: RolesModel[] = [];
  filtroNombreRol: string = '';

  constructor(private rolesService: RolesService) {}

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

  borrarRol(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta Rol?');

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
