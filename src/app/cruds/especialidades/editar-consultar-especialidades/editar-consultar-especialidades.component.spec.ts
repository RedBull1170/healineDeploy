import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConsultarEspecialidadesComponent } from './editar-consultar-especialidades.component';

describe('EditarConsultarEspecialidadesComponent', () => {
  let component: EditarConsultarEspecialidadesComponent;
  let fixture: ComponentFixture<EditarConsultarEspecialidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarConsultarEspecialidadesComponent]
    });
    fixture = TestBed.createComponent(EditarConsultarEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
