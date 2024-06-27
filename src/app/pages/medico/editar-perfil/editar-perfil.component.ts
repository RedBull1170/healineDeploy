import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersModel } from 'src/app/shared/models/users.model';
import { EspecialidadesService } from 'src/app/shared/services/especialidades.service';
import { RolesService } from 'src/app/shared/services/roles.service';
import { SedesService } from 'src/app/shared/services/sedes.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarPerfilComponent implements OnInit {

  id = '';
  users = new UsersModel('', '', '', '', '', '', '', '', '', '', '', '', '');
  userInfo: any;
  rolesList: any[] = [];
  sedesList: any[] = [];
  especialidadesList: any[] = [];
  isFormSubmitted: boolean = false;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private rolesService: RolesService,
    private sedesService: SedesService,
    private especialidadesService: EspecialidadesService
  ) { }

  goBack() {
    window.history.back();
  } 

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');

    this.users = { ...this.userInfo };
    
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.usersService.obtenerUser(this.id).subscribe(data => {
        this.userInfo = data[0];
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
      // Actualizar los datos de usuario en userInfo con los datos del formulario
      this.userInfo = { ...this.users };
  
      this.usersService.actualizarUsers(this.users).subscribe(data => {
        alert(data);
        this.router.navigate(['/login']);
        alert('Volver A Iniciar Sesion Para Ver Los Cambios');
      }, error => {
        console.log(error);
      });
    } else {
      console.log('crear');
    }
  }
  
  isFormFilled(): boolean {
    return !!this.users.tipoDoc && !!this.users.primerNombre &&
      !!this.users.primerApellido && !!this.users.segundoApellido &&
      !!this.users.email && !!this.users.numero;
  }

  onRoleChange(selectedRole: string) {
    this.users.rol = selectedRole;
  }
}
