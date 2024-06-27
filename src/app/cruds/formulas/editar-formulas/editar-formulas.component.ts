import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormulasModel } from 'src/app/shared/models/formulas.model';
import { FormulasService } from '../../../shared/services/formulas.service';

@Component({
  selector: 'app-editar-formulas',
  templateUrl: './editar-formulas.component.html',
  styleUrls: ['../../../app.component.css']
})
export class EditarFormulasComponent implements OnInit {
  id = '';
  formulas = new FormulasModel('', '', '', '', '');
  isFormSubmitted: boolean = false;


  constructor(
    private formulasService: FormulasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.formulasService.obtenerFormula(this.id).subscribe(data => {
        this.formulas = data[0];
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
      this.formulasService.actualizarFormulas(this.formulas).subscribe(
        (data) => {
          alert('formula actualizada correctamente');
          this.router.navigate(['/editar-consultar-formulas']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la formula ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    } else {
      this.formulasService.agregarFormulas(this.formulas).subscribe(
        (data) => {
          alert('formula registrada correctamente');
          this.router.navigate(['/editar-consultar-formulas']);
        },
        (error) => {
          if (error.status === 500) {
            alert('Verifique los campos o la formula ya está registrada');
          } else {
            console.error(error);
          }
        }
      );
    }
  }
  isFormFilled(): boolean {
    return !!this.formulas.nombreMedicamento && !!this.formulas.tratamiento && !!this.formulas.diagnostico && !!this.formulas.instrucciones;
  }
}
