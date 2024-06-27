import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PqrsModel } from 'src/app/shared/models/pqrs.model';
import { PqrsService } from 'src/app/shared/services/pqrs.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-registrar-agenda-medico',
  templateUrl: './registrar-agenda-medico.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarAgendaMedicoComponent {
  pqrs = new PqrsModel('', '', '', '', '', '', ''); 
  isFormSubmitted: boolean = false;
  userInfo: any;

  constructor(
    private pqrsService: PqrsService,
    private router: Router,
    private usersService: UsersService,
  ) { }


  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');
    
  }

  onSubmit() {
    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    this.pqrs.email = `${this.userInfo.email}`;
    this.pqrs.telefono = `${this.userInfo.numero}`;
    this.pqrs.documento = `${this.userInfo.documento}`;

    console.log('onSubmit');
  
    this.pqrsService.agregarPqrs(this.pqrs).subscribe(
      (data) => {
        alert('Peticion registrada correctamente');
        this.router.navigate(['/medico-agenda']).then(() => {
          location.reload();
        });
      },
      (error) => {
        if (error.status === 500) {
          alert('Error al registrar la Peticion. Verifica los datos ingresados.');
        } else {
          console.error(error);
        }
      }
    );
  }

  isFormFilled(): boolean {
    return !!this.pqrs.tipo && !!this.pqrs.descripcion;
  }
  
}
