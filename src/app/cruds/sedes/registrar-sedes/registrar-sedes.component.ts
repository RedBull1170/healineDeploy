import { Component, OnInit } from '@angular/core';
import { SedesModel } from 'src/app/shared/models/sedes.model';
import { SedesService } from '../../../shared/services/sedes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-sedes',
  templateUrl: './registrar-sedes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarSedesComponent implements OnInit {

  sedes = new SedesModel('', '', '', Number(''), '');
  isFormSubmitted: boolean = false;

  constructor(
    private sedesService: SedesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');

    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    this.sedesService.agregarSedes(this.sedes).subscribe(
      (data) => {
        alert('Sede registrada correctamente');
        this.router.navigate(['/sedes-home']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifica los campos o la sede ya está registrada');
        } else {
          console.error(error);
        }
      }
    );
  }
  isFormFilled(): boolean {
    return !!this.sedes.nombreSede && !!this.sedes.direccion && !!this.sedes.telefonoSede && !!this.sedes.tipoServicio;
  }
}
