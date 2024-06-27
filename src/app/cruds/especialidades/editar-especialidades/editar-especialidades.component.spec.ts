import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEspecialidadesComponent } from './editar-especialidades.component';

describe('EditarEspecialidadesComponent', () => {
  let component: EditarEspecialidadesComponent;
  let fixture: ComponentFixture<EditarEspecialidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEspecialidadesComponent]
    });
    fixture = TestBed.createComponent(EditarEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
