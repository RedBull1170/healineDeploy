import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { OrdenesModel } from 'src/app/shared/models/ordenes.model';
import { CitasService } from 'src/app/shared/services/citas.service';
import { OrdenesService } from 'src/app/shared/services/ordenes.service';
import { EncuestasModel } from 'src/app/shared/models/encuestas.model';
import { EncuestasService } from 'src/app/shared/services/encuestas.service';

@Component({
  selector: 'app-medico-ordenes',
  templateUrl: './medico-ordenes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class MedicoOrdenesComponent implements OnInit {
  hour: string = '00';
  minute: string = '00';
  second: string = '00';
  userInfo: any; 
  citasContador: number = 0;
  citasProximas: CitasModel[] = [];
  orden: Observable<OrdenesModel[]> | undefined;
  ordenes: OrdenesModel[] = [];
  filtroPaciente: string = '';
  mostrarEncuesta: boolean = false;

  // Encuesta
  encuestas = new EncuestasModel('', '', '', '', '', '', '', '', '');
  isFormSubmitted: boolean = false;

  constructor(
    private ordenesService: OrdenesService,
    private citasService: CitasService,
    private encuestasService: EncuestasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateClock(); 
    setInterval(() => this.updateClock(), 1000); 

    // Obtener la información del usuario del Login :C
    this.userInfo = JSON.parse(localStorage.getItem('medicUser') || '{}');

    this.ordenesService.obtenerOrdenes().subscribe(
      (data) => {
        this.ordenes = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  imprimirTabla() {
    const printContent = document.getElementById('tabla-imprimir');

    if (printContent) {
      const originalContents = document.body.innerHTML; 

      document.body.innerHTML = `
        <html>
          <head>
            <title>Ordenes Medicas</title>
          </head>
          <body>
            ${printContent.innerHTML}
          </body>
        </html>
      `;

      window.print(); 

      document.body.innerHTML = originalContents;
    } else {
      console.error('No se encontró la tabla para imprimir');
    }
}

  updateClock() {
    const now = new Date();
    this.hour = now.getHours().toString().padStart(2, '0');
    this.minute = now.getMinutes().toString().padStart(2, '0');
    this.second = now.getSeconds().toString().padStart(2, '0');
  }

  borrarOrdenes(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta orden?');

    if (confirmacion) {
      this.ordenesService.borrarOrdenes(id).subscribe(data => {
        console.log(data);

        this.ordenesService.obtenerOrdenes().subscribe(updatedOrdenes => {
          this.ordenes = updatedOrdenes;
        });
      });
    }
  }

  filtrarOrdenes(ordenes: OrdenesModel[] | undefined | null): OrdenesModel[] {
    if (!ordenes) {
      return [];
    }
  
    return ordenes.filter(o => {
      const idCoincide = o.id.toString().includes(this.filtroPaciente.toString());
      const nombrePacienteCoincide = o.paciente.toLowerCase().includes(this.filtroPaciente.toLowerCase());
  
      return idCoincide || nombrePacienteCoincide;
    });
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
