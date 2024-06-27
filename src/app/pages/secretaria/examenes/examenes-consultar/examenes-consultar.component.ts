import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamenesModel } from 'src/app/shared/models/examenes.model';
import { ExamenesService } from 'src/app/shared/services/examenes.service';

@Component({
  selector: 'app-examenes-consultar',
  templateUrl: './examenes-consultar.component.html',
  styleUrls: ['./examenes-consultar.component.css']
})
export class ExamenesConsultarComponent implements OnInit {

  examen: Observable<ExamenesModel[]> | undefined;
  examenes: ExamenesModel[] = [];
  filtroPaciente: string = '';

  constructor(private examenesService: ExamenesService) {}

  ngOnInit() {
    this.examenesService.obtenerExamenes().subscribe(
      (data) => {
        this.examenes = data;
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
            <title>Tabla de Examenes</title>
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

  borrarExamen(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar este examen?');

    if (confirmacion) {
      this.examenesService.borrarExamenes(id).subscribe(data => {
        console.log(data);

        this.examenesService.obtenerExamenes().subscribe(updatedExamenes => {
          this.examenes = updatedExamenes;
        });
      });
    }
  }

  filtrarExamenes(examenes: ExamenesModel[] | undefined | null): ExamenesModel[] {
    if (!examenes) {
      return [];
    }
  
    return examenes.filter(s => {
      const nombreExamenCoincide = this.filtroPaciente === '' || s.paciente.toLowerCase().includes(this.filtroPaciente.toLowerCase());
  
      return nombreExamenCoincide;
    });
  }
}

