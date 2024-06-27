import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarExamenesMedicoComponent } from './editar-consultar-examenes-medico.component';

describe('EditarConsultarExamenesMedicoComponent', () => {
  let component: EditarConsultarExamenesMedicoComponent;
  let fixture: ComponentFixture<EditarConsultarExamenesMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarExamenesMedicoComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarExamenesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
