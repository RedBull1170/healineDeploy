import { Component } from '@angular/core';
import { RegistrarLoginService } from 'src/app/shared/services/registrarlogin.service';

@Component({
  selector: 'app-actualizar-contrasena',
  templateUrl: './actualizar-contrasena.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ActualizarContrasenaComponent {
  token: string = '';
  password: string = '';

  constructor(private registrarLoginService: RegistrarLoginService) { }

  actualizarContrasena() {
    this.registrarLoginService.actualizarContrasenaConToken(this.token, this.password)
      .subscribe(
        response => {
          alert('Contraseña actualizada exitosamente. Puedes iniciar sesión con tu nueva contraseña.');
          // Redirige a la página de inicio de sesión
          window.location.href = '/login';
        },
        error => {
          console.error('Error al actualizar contraseña:', error);
          alert('No se pudo actualizar la contraseña. Por favor, inténtelo de nuevo más tarde.');
        }
      );
  }
}
