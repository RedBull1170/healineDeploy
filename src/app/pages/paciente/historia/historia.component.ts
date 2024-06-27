import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/shared/services/citas.service';
import { ExamenesService } from 'src/app/shared/services/examenes.service';
import { OrdenesService } from 'src/app/shared/services/ordenes.service';
import { IncapacidadService } from 'src/app/shared/services/incapacidad.service';
import { CitasModel } from 'src/app/shared/models/citas.model';
import { ExamenesModel } from 'src/app/shared/models/examenes.model';
import { OrdenesModel } from 'src/app/shared/models/ordenes.model';
import { IncapacidadModel } from 'src/app/shared/models/incapacidad.model';
import { EncuestasService } from 'src/app/shared/services/encuestas.service';
import { EncuestasModel } from 'src/app/shared/models/encuestas.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  citas: CitasModel[] = [];
  examenes: ExamenesModel[] = [];
  ordenes: OrdenesModel[] = [];
  incapacidades: IncapacidadModel[] = [];

  citasFiltradas: CitasModel[] = [];
  examenesFiltrados: ExamenesModel[] = [];
  ordenesFiltradas: OrdenesModel[] = [];
  incapacidadesFiltradas: IncapacidadModel[] = [];

  userInfo: any;
  mostrarEncuesta: boolean = false;

  // Encuesta
  encuestas = new EncuestasModel('', '', '', '', '', '', '', '', '');


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

  imprimirTabla() {
    const printContent = document.getElementById('tabla-imprimir');

    if (printContent) {
      const originalContents = document.body.innerHTML; 

      document.body.innerHTML = `
        <html>
          <head>
            <title>Mi Historial Medico</title>
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

  isFormFilled(): boolean {
    return !!this.encuestas.calificacion && !!this.encuestas.facilidad && !!this.encuestas.seguridad && !!this.encuestas.velocidad && !!this.encuestas.opinion;
  }

  salir() {
    this.mostrarEncuesta = false;
    window.location.href = '/index';
  }

  constructor(
    private encuestasService: EncuestasService,
    private citasService: CitasService,
    private examenesService: ExamenesService,
    private ordenesService: OrdenesService,
    private incapacidadesService: IncapacidadService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('patientUser') || '{}');
    this.obtenerCitas();
    this.obtenerExamenes();
    this.obtenerOrdenes();
    this.obtenerIncapacidades();
  }

  obtenerCitas() {
    this.citasService.obtenerCitas().subscribe(
      (citas: CitasModel[]) => {
        this.citas = citas;
        this.filtrarCitas();
      },
      error => {
        console.error('Error al obtener citas:', error);
      }
    );
  }

  obtenerExamenes() {
    this.examenesService.obtenerExamenes().subscribe(
      (examenes: ExamenesModel[]) => {
        this.examenes = examenes;
        this.filtrarExamenes();
      },
      error => {
        console.error('Error al obtener examenes:', error);
      }
    );
  }

  obtenerOrdenes() {
    this.ordenesService.obtenerOrdenes().subscribe(
      (ordenes: OrdenesModel[]) => {
        this.ordenes = ordenes;
        this.filtrarOrdenes();
      },
      error => {
        console.error('Error al obtener ordenes:', error);
      }
    );
  }

  obtenerIncapacidades() {
    this.incapacidadesService.obtenerIncapacidad().subscribe(
      (incapacidades: IncapacidadModel[]) => {
        this.incapacidades = incapacidades;
        this.filtrarIncapacidades();
      },
      error => {
        console.error('Error al obtener incapacidades:', error);
      }
    );
  }

  filtrarCitas() {
    this.citasFiltradas = this.citas.filter(cita => cita.paciente.includes(this.userInfo.documento));
  }

  filtrarExamenes() {
    this.examenesFiltrados = this.examenes.filter(examen => examen.paciente.includes(this.userInfo.documento));
  }

  filtrarOrdenes() {
    this.ordenesFiltradas = this.ordenes.filter(orden => orden.paciente.includes(this.userInfo.documento));
  }

  filtrarIncapacidades() {
    this.incapacidadesFiltradas = this.incapacidades.filter(incapacidad => incapacidad.paciente.includes(this.userInfo.documento));
  }
}
