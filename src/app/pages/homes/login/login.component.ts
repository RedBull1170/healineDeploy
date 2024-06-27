import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrarLoginService } from '../../../shared/services/registrarlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showAlert: boolean = false;


  goBack() {
    window.history.back();
  } 
  constructor(private fb: FormBuilder, private registrarloginService: RegistrarLoginService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      if (email && password) {
        this.registrarloginService.login(email, password).subscribe(
          (response) => {
            console.log(response);

            if (response && response.usuario) {
              const rol = response.usuario.rol;
              switch (rol) {
                case 'Administrador':
                  localStorage.setItem('adminUser', JSON.stringify(response.usuario));
                  this.router.navigate(['/admin-home']);
                  break;
                case 'User':
                  localStorage.setItem('regularUser', JSON.stringify(response.usuario));
                  this.router.navigate(['/user-home']);
                  break;
                case 'Paciente':
                  localStorage.setItem('patientUser', JSON.stringify(response.usuario));
                  this.router.navigate(['/paciente-home']);
                  break;
                case 'Medico':
                  localStorage.setItem('medicUser', JSON.stringify(response.usuario));
                  this.router.navigate(['/medico-home']);
                  break;
                case 'Secretaria':
                  localStorage.setItem('secretaryUser', JSON.stringify(response.usuario));
                  this.router.navigate(['/secretaria-home']);
                  break;
                default:
                  console.error('Rol de usuario no reconocido:', rol);
                  break;
              }
            } else {
              console.error('Respuesta de inicio de sesión inválida:', response);
              this.showAlert = true;
            }
          },
          (error) => {
            console.error('Error en el proceso de inicio de sesión:', error);
            if (error.status === 401) {
              if (error.error.error === 'Credenciales incorrectas') {
                alert('Credenciales de inicio de sesión incorrectas. Por favor, inténtalo de nuevo.');
              } else if (error.error.error === 'Cuenta deshabilitada') {
                this.router.navigate(['/user-false']);
              }
            } else {
              alert('Ocurrió un error en el servidor. Por favor, inténtalo de nuevo más tarde.');
            }
            this.showAlert = true;
          }
        );
      } else {
        this.showAlert = true;
        alert('Verifique Los Campos');
      }
    } else {
      this.showAlert = true;
      alert('Verifique Los Campos');
      return;
    }
  }

}
