import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { RegistrarLoginService } from 'src/app/shared/services/registrarlogin.service';

@Component({
  selector: 'app-recuperacion-contrasena',
  templateUrl: './recuperacion-contrasena.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RecuperacionContrasenaComponent {
  email: string = '';

  constructor(
    private router: Router, // Inyecta Router
    private registrarLoginService: RegistrarLoginService
  ) { }

  enviarCorreo() {
    this.registrarLoginService.enviarTokenRecuperacion(this.email)
      .subscribe(
        response => {
          alert('Se ha enviado un correo electrónico con el enlace de recuperación de contraseña.');
          this.router.navigate(['/actualizar-contrasena']); // Redirige a la página de actualización de contraseña
        },
        error => {
          console.error('Error al enviar correo:', error);
          alert('No se pudo enviar el correo electrónico de recuperación de contraseña. Por favor, inténtelo de nuevo más tarde.');
        }
      );
  }
}
