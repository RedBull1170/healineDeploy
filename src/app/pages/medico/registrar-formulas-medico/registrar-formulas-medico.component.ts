import { Component, OnInit } from '@angular/core';
import { FormulasModel } from 'src/app/shared/models/formulas.model';
import { FormulasService } from '../../../shared/services/formulas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-formulas-medico',
  templateUrl: './registrar-formulas-medico.component.html',
  styleUrls: ['../../../app.component.css']
})
export class RegistrarFormulasMedicoComponent implements OnInit {

  formulas = new FormulasModel('', '', '', '', '');
  isFormSubmitted: boolean = false;

  constructor(
    private formulasService: FormulasService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.isFormFilled()) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    console.log('onSubmit');

    this.formulasService.agregarFormulas(this.formulas).subscribe(
      (data) => {
        alert('formula registrada correctamente');
        this.router.navigate(['/medico-formulas']); 
      },
      (error) => {
        if (error.status === 500) {
          alert('Verifica los campos o la formula ya está registrada');
        } else {
          console.error(error);
        }
      }
    );
  }

  isFormFilled(): boolean {
    return !!this.formulas.nombreMedicamento && !!this.formulas.tratamiento && !!this.formulas.diagnostico && !!this.formulas.instrucciones;
  }
}
