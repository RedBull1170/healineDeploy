import { Component, OnInit } from '@angular/core';
import { PqrsModel } from '../../../../shared/models/pqrs.model';
import { Observable } from 'rxjs';
import { PqrsService } from '../../../../shared/services/pqrs.service';

@Component({
  selector: 'app-listar-pqrs',
  templateUrl: './listar-pqrs.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class ListarPqrsComponent implements OnInit {
  pqrs: Observable<PqrsModel[]> | undefined;
  filtroCorreo: string = '';
  filtroEstado: string = '';


  constructor(private pqrsService: PqrsService) {}

  ngOnInit() {
    this.pqrs = this.pqrsService.obtenerPqrs();
  }

  borrarPqrs(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que quieres borrar este PQRS?');

    if (confirmacion) {
      this.pqrsService.borrarPqrs(id).subscribe(data => {
        console.log(data);

        this.pqrsService.obtenerPqrs().subscribe(updatedPqrs => {
          this.pqrs = this.pqrsService.obtenerPqrs();
        });
      });
    }
  }
  filtrarPqrs(pqrs: PqrsModel[] | null): PqrsModel[] {
    if (!pqrs) {
      return [];
    }
  
    // Filtra las PQRS basándose en el correo y el estado
    return pqrs.filter(p =>
      p.email.toLowerCase().includes(this.filtroCorreo.toLowerCase()) &&
      p.estado.toLowerCase().includes(this.filtroEstado.toLowerCase())
    );
  }
  
  
}
