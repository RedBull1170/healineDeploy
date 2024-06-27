import { Component, OnInit } from '@angular/core';
import { UsersModel } from 'src/app/shared/models/users.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from '../../../shared/services/users.service';
import { RolesService } from '../../../shared/services/roles.service';
import { SedesService } from '../../../shared/services/sedes.service'; 
import { EspecialidadesService } from 'src/app/shared/services/especialidades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-users',
  templateUrl: './registrar-users.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarUsersComponent implements OnInit {

  users = new UsersModel('', '', '', '', '', '', '', '', '', '', '', '', '');
  rolesList: any[] = [];
  sedesList: any[] = [];
  especialidadesList: any[] = [];
  isFormSubmitted: boolean = false;
  usersForm!: FormGroup; // <-- Definir el FormGroup para el formulario

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder, // <-- Inyectar FormBuilder
    private router: Router,
    private rolesService: RolesService,
    private sedesService: SedesService,
    private especialidadesService: EspecialidadesService 

  ) { }

  ngOnInit() {
    // Construir el formulario
    this.usersForm = this.formBuilder.group({
      documento: [''],
      tipoDoc: [''],
      primerNombre: [''],
      segundoNombre: [''],
      primerApellido: [''],
      segundoApellido: [''],
      email: [''],
      password: [''],
      numero: [''],
      rol: [''],
      especialidad: [''],
      sede: ['']
      
    });

    this.usersForm.get('rol')!.valueChanges.subscribe((rol) => {
      if (rol === 'Medico') {
        this.usersForm.get('especialidad')!.enable(); // Habilitar el campo de especialidad
      } else {
        this.usersForm.get('especialidad')!.disable(); // Deshabilitar el campo de especialidad
      }
    });

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

    this.usersService.agregarUsers(this.users).subscribe(
      (data) => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/usuarios-home']); 
      },
      (error) => {
        if (error.status === 400) {
          if (error.error.error === 'El documento ya está registrado') {
            alert('El documento ya está registrado');
          } else if (error.error.error === 'El correo electrónico ya está registrado') {
            alert('El correo electrónico ya está registrado');
          }
        } else if (error.status === 500) {
          alert('Verifique los campos o el documento ya está registrado');
        } else {
          console.error(error);
        }
      }
    );
  }

  // Función para verificar si algún campo obligatorio está vacío
  isFormFilled(): boolean {
    return !!this.users.documento && !!this.users.tipoDoc && !!this.users.primerNombre && 
           !!this.users.primerApellido &&
           !!this.users.email && !!this.users.password && !!this.users.numero && !!this.users.rol
  }
  onRoleChange(selectedRole: string) {
    this.users.rol = selectedRole;
  }
}