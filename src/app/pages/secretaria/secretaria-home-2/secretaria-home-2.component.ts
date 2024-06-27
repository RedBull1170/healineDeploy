import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncuestasModel } from 'src/app/shared/models/encuestas.model';
import { EncuestasService } from 'src/app/shared/services/encuestas.service';

@Component({
  selector: 'app-secretaria-home-2',
  templateUrl: './secretaria-home-2.component.html',
  styleUrls: ['./secretaria-home-2.component.css']
})
export class SecretariaHome2Component {

  userInfo: any; 
  mostrarEncuesta: boolean = false;

  encuestas = new EncuestasModel('', '', '', '', '', '', '', '', '');


  constructor(private router: Router, private encuestasService: EncuestasService,) {}

  ngOnInit() { 
    // Obtener la información del usuario del Login :C
    this.userInfo = JSON.parse(localStorage.getItem('secretaryUser') || '{}');

  }

  onSubmit() {
    console.log('onSubmit');

    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    this.encuestas.documento = `${this.userInfo.documento}`;
    this.encuestas.email = `${this.userInfo.email}`;
    this.encuestas.rol = `${this.userInfo.rol}`;

    this.encuestasService.agregarEncuestas(this.encuestas).subscribe(
      (data) => {
        alert('Encuestas registrada correctamente');
        this.router.navigate(['/index']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Encuesta ya está registrada');
        } else {
          console.error(error);
        }
      }
    );
  }

  isFormFilled(): boolean {
    return !!this.encuestas.calificacion && !!this.encuestas.facilidad && !!this.encuestas.seguridad && !!this.encuestas.velocidad && !!this.encuestas.opinion;
  }

  salir() {
    this.mostrarEncuesta = false;
    window.location.href = '/index';
  }

}