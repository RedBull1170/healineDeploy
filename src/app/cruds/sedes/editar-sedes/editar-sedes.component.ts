import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SedesModel } from 'src/app/shared/models/sedes.model';
import { SedesService } from '../../../shared/services/sedes.service';

@Component({
  selector: 'app-editar-sedes',
  templateUrl: './editar-sedes.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarSedesComponent implements OnInit {
  id = '';
  sedes = new SedesModel('', '', '', 0, '');
  isFormSubmitted: boolean = false;

  constructor(
    private sedesService: SedesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.sedesService.obtenerSede(this.id).subscribe(data => {
        this.sedes = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    
    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    if (this.id) {
      // Si hay un ID, significa que estás editando, entonces utiliza el método de actualizar
      this.sedesService.actualizarSedes(this.sedes).subscribe(
        (data) => {
          alert('Sede actualizada correctamente');
          this.router.navigate(['/editar-consultar-sedes']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la sede ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    } else {
      // Si no hay un ID, significa que estás creando, utiliza el método de agregar
      this.sedesService.agregarSedes(this.sedes).subscribe(
        (data) => {
          alert('Sede registrada correctamente');
          this.router.navigate(['/editar-consultar-sedes']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la sede ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    }
  }
  isFormFilled(): boolean {
    return !!this.sedes.nombreSede && !!this.sedes.direccion && !!this.sedes.telefonoSede && !!this.sedes.tipoServicio;
  }
}
