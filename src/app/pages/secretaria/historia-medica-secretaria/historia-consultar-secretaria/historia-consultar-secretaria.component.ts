import { Component, OnInit } from '@angular/core';
import { UsersModel } from 'src/app/shared/models/users.model';
import { CitasService } from 'src/app/shared/services/citas.service';
import { ExamenesService } from 'src/app/shared/services/examenes.service';
import { IncapacidadService } from 'src/app/shared/services/incapacidad.service';
import { OrdenesService } from 'src/app/shared/services/ordenes.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-historia-consultar-secretaria',
  templateUrl: './historia-consultar-secretaria.component.html',
  styleUrls: ['./historia-consultar-secretaria.component.css']
})
export class HistoriaConsultarSecretariaComponent implements OnInit {
  usersPacientes: UsersModel[] = [];
  buscarCorreo: string = '';
  buscarDocumento: string = '';
  examenes: any[] = [];
  citas: any[] = [];
  incapacidades: any[] = [];
  ordenes: any[] = [];
  examenesFiltrados: any[] = [];
  incapacidadesFiltradas: any[] = [];
  citasFiltradas: any[] = [];
  ordenesFiltradas: any[] = [];
  user: UsersModel | null = null;

  constructor(
    private usersService: UsersService,
    private examenesService: ExamenesService,
    private citasService: CitasService,
    private incapacidadesService: IncapacidadService,
    private ordenesService: OrdenesService
  ) {}

  ngOnInit(): void {
    this.obtenerDatos();
  }

  imprimirTabla() {
    const printContent = document.getElementById('tabla-imprimir');

    if (printContent) {
      const originalContents = document.body.innerHTML; 

      document.body.innerHTML = `
        <html>
          <head>
            <title>Tabla de Historia Medica</title>
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

  obtenerDatos() {
    this.obtenerExamenes();
    this.obtenerCitas();
    this.obtenerIncapacidades();
    this.obtenerOrdenes();

    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersPacientes = data.filter(user => user.rol === 'Paciente');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerExamenes() {
    this.examenesService.obtenerExamenes().subscribe(
      (data) => {
        this.examenes = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerCitas() {
    this.citasService.obtenerCitas().subscribe(
      (data) => {
        this.citas = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerIncapacidades() {
    this.incapacidadesService.obtenerIncapacidad().subscribe(
      (data) => {
        this.incapacidades = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerOrdenes() {
    this.ordenesService.obtenerOrdenes().subscribe(
      (data) => {
        this.ordenes = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  filtrarUsuarios() {
    // Filtrar usuarios basados en buscarDocumento y buscarCorreo
    this.usersService.obtenerUsers().subscribe(
      (data) => {
        this.usersPacientes = data.filter(user => {
          if (user.rol === 'Paciente') {
            if (
              this.buscarDocumento !== '' &&
              this.buscarCorreo !== '' &&
              user.documento.toString().includes(this.buscarDocumento) &&
              user.email.includes(this.buscarCorreo)
            ) {
              return true;
            } else if (
              this.buscarDocumento !== '' &&
              this.buscarCorreo === '' &&
              user.documento.toString().includes(this.buscarDocumento)
            ) {
              return true;
            } else if (
              this.buscarDocumento === '' &&
              this.buscarCorreo !== '' &&
              user.email.includes(this.buscarCorreo)
            ) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  mostrarDetalles(user: UsersModel) {
    this.user = user;
    console.log('Usuario seleccionado:', this.user);

    // Filtrar exámenes por documento del paciente seleccionado
    this.examenesFiltrados = this.examenes.filter(examen => examen.paciente.includes(user.documento));
    console.log('Exámenes filtrados:', this.examenesFiltrados);

    // Filtrar incapacidades por documento del paciente seleccionado
    this.incapacidadesFiltradas = this.incapacidades.filter(incapacidad => incapacidad.paciente.includes(user.documento));
    console.log('Incapacidades filtradas:', this.incapacidadesFiltradas);

    // Filtrar órdenes por documento del paciente seleccionado
    this.ordenesFiltradas = this.ordenes.filter(orden => orden.paciente.includes(user.documento));
    console.log('Órdenes filtradas:', this.ordenesFiltradas);

    // Filtrar citas por documento del paciente seleccionado
    this.citasFiltradas = this.citas.filter(cita => cita.paciente.includes(user.documento));
    console.log('Citas filtradas:', this.citasFiltradas);
}


}
