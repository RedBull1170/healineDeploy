import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenesModel } from 'src/app/shared/models/ordenes.model';
import { OrdenesService } from 'src/app/shared/services/ordenes.service';





@Component({
  selector: 'app-ordenes-consultar-secretaria',
  templateUrl: './ordenes-consultar-secretaria.component.html',
  styleUrls: ['./ordenes-consultar-secretaria.component.css']
})
export class OrdenesConsultarSecretariaComponent implements OnInit {

  

  orden: Observable<OrdenesModel[]> | undefined;
  ordenes: OrdenesModel[] = [];
  filtroPaciente: string = '';

  constructor(private ordenesService: OrdenesService) {}

  ngOnInit() {
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
            <title>Tabla de Ordenes</title>
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

  borrarOrden(id: string) {
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


}
  

