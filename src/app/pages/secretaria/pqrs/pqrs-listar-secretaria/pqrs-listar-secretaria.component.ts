import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PqrsModel } from 'src/app/shared/models/pqrs.model';
import { PqrsService } from 'src/app/shared/services/pqrs.service';

@Component({
  selector: 'app-pqrs-listar-secretaria',
  templateUrl: './pqrs-listar-secretaria.component.html',
  styleUrls: ['./pqrs-listar-secretaria.component.css']
})
export class PqrsListarSecretariaComponent implements OnInit {
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
