import { Component } from '@angular/core';

@Component({
  selector: 'app-paciente-home',
  templateUrl: './paciente-home.component.html',
  styleUrls: ['../../../app.component.css']
})
export class PacienteHomeComponent {

  mostrarMenuPaciente: boolean = false; // O false dependiendo de la lógica de tu aplicación
  userInfo: any; // Objeto para almacenar la información del usuario


  ngOnInit() { 
    // Obtener la información del usuario del Login :C
    this.userInfo = JSON.parse(localStorage.getItem('patientUser') || '{}');

  }
}


