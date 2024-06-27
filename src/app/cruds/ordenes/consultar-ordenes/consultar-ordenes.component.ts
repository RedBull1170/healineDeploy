import { Component, OnInit } from '@angular/core';
import { OrdenesModel } from 'src/app/shared/models/ordenes.model';
import { OrdenesService } from '../../../shared/services/ordenes.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-consultar-ordenes',
  templateUrl: './consultar-ordenes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ConsultarOrdenesComponent implements OnInit {

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
