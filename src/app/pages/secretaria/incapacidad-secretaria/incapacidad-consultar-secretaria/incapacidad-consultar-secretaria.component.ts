import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IncapacidadModel } from 'src/app/shared/models/incapacidad.model';
import { IncapacidadService } from 'src/app/shared/services/incapacidad.service';

@Component({
  selector: 'app-incapacidad-consultar-secretaria',
  templateUrl: './incapacidad-consultar-secretaria.component.html',
  styleUrls: ['./incapacidad-consultar-secretaria.component.css']
})
export class IncapacidadConsultarSecretariaComponent implements OnInit {

  incapacida: Observable<IncapacidadModel[]> | undefined;
  incapacidad: IncapacidadModel[] = [];
  filtroPaciente: string = '';
  filtroMedico: string = '';

  constructor(private incapacidadService: IncapacidadService) {}

  ngOnInit() {
    this.incapacidadService.obtenerIncapacidad().subscribe(
      (data) => {
        this.incapacidad = data;
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
            <title>Tabla de Incapacidad</title>
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

  borrarIncapacida(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar esta incapacidad?');

    if (confirmacion) {
      this.incapacidadService.borrarIncapacidad(id).subscribe(data => {
        console.log(data);

        this.incapacidadService.obtenerIncapacidad().subscribe(updatedIncapacidad => {
          this.incapacidad = updatedIncapacidad;
        });
      });
    }
  }

  filtrarIncapacidad(incapacidad: IncapacidadModel[] | undefined | null): IncapacidadModel[] {
    if (!incapacidad) {
      return [];
    }
  
    return incapacidad.filter(s => {
      const pacienteIncapacidadCoincide = this.filtroPaciente === '' || s.paciente.toLowerCase().includes(this.filtroPaciente.toLowerCase());
      const medicoIncapacidadCoincide = this.filtroMedico === '' || s.medico.toLowerCase().includes(this.filtroMedico.toLowerCase());

      return pacienteIncapacidadCoincide && medicoIncapacidadCoincide;
    });
  }
}

