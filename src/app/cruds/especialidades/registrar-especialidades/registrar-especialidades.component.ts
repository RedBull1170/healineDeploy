import { Component, OnInit } from '@angular/core';
import { EspecialidadesModel } from 'src/app/shared/models/especialidades.model';
import { EspecialidadesService } from '../../../shared/services/especialidades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-especialidades',
  templateUrl: './registrar-especialidades.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarEspecialidadesComponent implements OnInit {

  especialidades = new EspecialidadesModel('', '', '');
  isFormSubmitted: boolean = false;

  constructor(
    private especialidadesService: EspecialidadesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');

    if (!this.isFormValid()) {
      alert('Por favor complete todos los campos obligatorios.');
      return;
    }

    this.especialidadesService.agregarEspecialidades(this.especialidades).subscribe(
      (data) => {
        alert('Especialidad registrada correctamente');
        this.router.navigate(['/especialidades-home']);
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifica los campos o la especialidad ya está registrada');
        } else {
          console.error(error);
        }
      }
    );
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
