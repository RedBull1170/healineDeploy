import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModel } from 'src/app/shared/models/users.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-pacientes-consultar',
  templateUrl: './pacientes-consultar.component.html',
  styleUrls: ['./pacientes-consultar.component.css']
})
export class PacientesConsultarComponent implements OnInit {
    users: Observable<UsersModel[]> | undefined;
    filtroCorreo: string = '';
    filtroDocumento: number = Number('');
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
              this.filtroDocumento === 0 ||
              u.documento.toString().includes(this.filtroDocumento.toString());
          const esPaciente = u.rol.toLowerCase() === 'paciente';
  
          return nombreCoincide && correoCoincide && documentoCoincide && esPaciente;
      });
    }
  }
  

