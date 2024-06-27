import { Component } from '@angular/core';
import { PqrsModel } from '../../../shared/models/pqrs.model';
import { PqrsService } from '../../../shared/services/pqrs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['../../../app.component.css']
})
export class PqrsComponent {
  pqrs = new PqrsModel('', '', '', '', '', '', ''); 
  isFormSubmitted: boolean = false;

  constructor(
    private pqrsService: PqrsService,
    private router: Router
  ) { }

  onSubmit() {
    if (!this.isFormValid()) {
      return;
    }

    console.log('onSubmit');
  
    this.pqrsService.agregarPqrs(this.pqrs).subscribe(
      (data) => {
        alert('PQRS registrada correctamente');
        this.router.navigate(['/pqrs']).then(() => {
          location.reload();
        });
      },
      (error) => {
        if (error.status === 500) {
          alert('Error al registrar la PQRS. Verifica los datos ingresados.');
        } else {
          console.error(error);
        }
      }
    );
  }

  isFormValid(): boolean {
    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.pqrs.email)) {
      alert('El correo electrónico ingresado no es válido.');
      return false;
    }
  

    return true;
  }

  isFormFilled(): boolean {
    return !!this.pqrs.tipo && !!this.pqrs.descripcion && !!this.pqrs.email && !!this.pqrs.telefono && !!this.pqrs.documento;
  }
  
}
