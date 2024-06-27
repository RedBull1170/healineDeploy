import { Component } from '@angular/core';
import { RegistrarLoginService } from '../../../shared/services/registrarlogin.service';
import { RegistrarLoginModel } from '../../../shared/models/registrarlogin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['users.component.css']
})
export class UsersComponent {
  showAdditionalFields: boolean = false;
  users = new RegistrarLoginModel('','','','','','','','','','','','');
  isFormSubmitted: boolean = false;

  constructor(
    private registrarloginService: RegistrarLoginService,
    private router: Router
  ) { }

  goBack() {
    window.history.back();
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

    this.registrarloginService.agregarUsuarios(this.users).subscribe(
      (data) => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/login']); 
      },
      (error) => {
        if (error.status === 400) {
          alert('El correo electrónico o el documento ya están registrados');
        } else if (error.status === 500) {
          alert('Verifica El Documento');
        } else {
          console.error(error);
        }
      }
    );
  }
  isFormFilled(): boolean {
    return !!this.users.documento && !!this.users.tipoDoc && !!this.users.primerNombre && 
           !!this.users.primerApellido && !!this.users.email && !!this.users.password && !!this.users.numero
  }
}
