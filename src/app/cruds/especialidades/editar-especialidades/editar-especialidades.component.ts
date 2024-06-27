import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialidadesModel } from 'src/app/shared/models/especialidades.model';
import { EspecialidadesService } from '../../../shared/services/especialidades.service';

@Component({
  selector: 'app-editar-especialidades',
  templateUrl: './editar-especialidades.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarEspecialidadesComponent implements OnInit {
  id = '';
  especialidades = new EspecialidadesModel('', '', '');
  isFormSubmitted: boolean = false;

  constructor(
    private especialidadesService: EspecialidadesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.especialidadesService.obtenerEspecialidad(this.id).subscribe(data => {
        this.especialidades = data[0];
      }, error => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {

    if (!this.isFormValid()) {
      alert('Por favor complete todos los campos obligatorios.');
      return;
    }

    if (this.id) {
      this.especialidadesService.actualizarEspecialidades(this.especialidades).subscribe(
        (data) => {
          alert('Especialidad actualizado correctamente');
          this.router.navigate(['/editar-consultar-especialidades']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la especialidad ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    } else {
      this.especialidadesService.agregarEspecialidades(this.especialidades).subscribe(
        (data) => {
          alert('Especialidad registrada correctamente');
          this.router.navigate(['/editar-consultar-especialidades']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la especialidad ya está registrado');
          } else {
            console.error(error);
          }
        }
      );
    }
  }
  
  formatSalary(event: any) {
    let salary = event.target.value.replace(/\D/g, "");
    salary = salary.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    this.especialidades.salario = salary;
  }
  
  isFormValid(): boolean {
    return !!this.especialidades.nombre && !!this.especialidades.salario;
  }
}
