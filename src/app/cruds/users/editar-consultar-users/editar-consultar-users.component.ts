import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../shared/models/users.model';
import { Observable } from 'rxjs';
import { UsersService } from '../../../shared/services/users.service';

@Component({
  selector: 'app-editar-consultar-users',
  templateUrl: './editar-consultar-users.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarConsultarUsersComponent implements OnInit {
  users: Observable<UsersModel[]> | undefined;
  filtroCorreo: string = '';
  filtroDocumento: string = '';
  filtroNombre: string = '';


  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.obtenerUsers();
  }

  borrarUsers(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar este usuario?');

    if (confirmacion) {
      this.usersService.borrarUsers(id).subscribe(data => {
        console.log(data);

        this.usersService.obtenerUsers().subscribe(updatedUsers => {
          this.users = this.usersService.obtenerUsers();
        });
      });
    }
  }

  filtrarUsers(users: UsersModel[] | null): UsersModel[] {
    if (!users) {
        return [];
    }

    return users.filter(u => {
        const nombreCompleto = `${u.primerNombre} ${u.segundoNombre} ${u.primerApellido} ${u.segundoApellido}`;
        const nombreCoincide =
            this.filtroNombre.trim() === '' ||
            nombreCompleto.toLowerCase().includes(this.filtroNombre.toLowerCase());
        const correoCoincide =
            this.filtroCorreo.trim() === '' ||
            u.email.toLowerCase().includes(this.filtroCorreo.toLowerCase());
        const documentoCoincide =
            this.filtroDocumento === '' ||
            u.documento.toString().includes(this.filtroDocumento.toString());

        return nombreCoincide && correoCoincide && documentoCoincide;
    });
  }
  
}