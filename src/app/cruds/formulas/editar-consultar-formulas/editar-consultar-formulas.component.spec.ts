import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarFormulasComponent } from './editar-consultar-formulas.component';

describe('EditarConsultarFormulasComponent', () => {
  let component: EditarConsultarFormulasComponent;
  let fixture: ComponentFixture<EditarConsultarFormulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarFormulasComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarFormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
