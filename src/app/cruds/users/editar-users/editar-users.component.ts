import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../shared/models/users.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../shared/services/users.service';
import { RolesService } from '../../../shared/services/roles.service';
import { SedesService } from '../../../shared/services/sedes.service';
import { EspecialidadesService } from 'src/app/shared/services/especialidades.service';

@Component({
  selector: 'app-editar-users',
  templateUrl: './editar-users.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarUsersComponent implements OnInit {

  id = '';
  users = new UsersModel('', '', '', '', '', '', '', '', '', '', '', '', '');
  rolesList: any[] = [];
  sedesList: any[] = [];
  especialidadesList: any[] = [];
  isFormSubmitted: boolean = false;
  rol: any;


  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private rolesService: RolesService,
    private sedesService: SedesService,
    private especialidadesService: EspecialidadesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.usersService.obtenerUser(this.id).subscribe(data => {
        this.users = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }

    this.rolesService.obtenerRoles().subscribe(
      (data) => {
        this.rolesList = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.sedesService.obtenerSedes().subscribe(
      (data) => {
        this.sedesList = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.especialidadesService.obtenerEspecialidades().subscribe(
      (data) => {
        this.especialidadesList = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    console.log('onSubmit');

    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(this.users.primerNombre) || !regex.test(this.users.segundoNombre) ||
      !regex.test(this.users.primerApellido) || !regex.test(this.users.segundoApellido)) {
      alert('Los nombres y apellidos no deben contener caracteres especiales ni números.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.users.email)) {
      alert('El correo electrónico ingresado no es válido.');
      return;
    }

    if (this.users.documento) {
      this.usersService.actualizarUsers(this.users).subscribe(data => {
        alert(data);
        this.router.navigate(['/editar-consultar-users']);
      }, error => {
        console.log(error);
      });
    } else {
      console.log('crear');
    }
  }

  isFormFilled(): boolean {
    return !!this.users.documento && !!this.users.tipoDoc && !!this.users.primerNombre &&
      !!this.users.primerApellido &&
      !!this.users.email && !!this.users.password && !!this.users.numero && !!this.users.rol;
  }

  onRoleChange(selectedRole: string) {
    this.users.rol = selectedRole;
  }
}
