import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/shared/services/citas.service';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { EncuestasModel } from 'src/app/shared/models/encuestas.model';
import { EncuestasService } from 'src/app/shared/services/encuestas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico-home-2',
  templateUrl: './medico-home-2.component.html',
  styleUrls: ['../../../app.component.css']
})
export class MedicoHome2Component implements OnInit {
  hour: string = '00';
  minute: string = '00';
  second: string = '00';
  userInfo: any; 
  citasContador: number = 0;
  citasProximas: CitasModel[] = [];
  mostrarEncuesta: boolean = false;
  

  // Encuesta
  encuestas = new EncuestasModel('', '', '', '', '', '', '', '', '');
  isFormSubmitted: boolean = false;

  constructor(private citasService: CitasService, private encuestasService: EncuestasService, private router: Router) {}

  ngOnInit() {
    this.updateClock(); 
    setInterval(() => this.updateClock(), 1000); 

    // Obtener la información del usuario del Login :C
    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');

    this.obtenerCitasMedico();
  }

  updateClock() {
    const now = new Date();
    this.hour = now.getHours().toString().padStart(2, '0');
    this.minute = now.getMinutes().toString().padStart(2, '0');
    this.second = now.getSeconds().toString().padStart(2, '0');
  }



  obtenerCitasMedico() {
    this.citasService.obtenerCitas().subscribe(
      (citas: CitasModel[]) => {
        // Contador De Citas
        const citasMedico = citas.filter(cita => cita.medico.includes(this.userInfo.documento));
        this.citasContador = citasMedico.length;
        // Citas Proximas
        citasMedico.sort((a, b) => new Date(a.fecha + 'T' + a.hora).getTime() - new Date(b.fecha + 'T' + b.hora).getTime());
        this.citasProximas = citasMedico.slice(0, 3);
      },
      error => {
        console.error('Error al obtener citas del médico:', error);
      }
    );
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
          alert('Verifica los campos o la encuesta ya está registrada');
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
