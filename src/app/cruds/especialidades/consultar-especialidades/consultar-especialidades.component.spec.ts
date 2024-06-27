import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEspecialidadesComponent } from './consultar-especialidades.component';

describe('ConsultarEspecialidadesComponent', () => {
  let component: ConsultarEspecialidadesComponent;
  let fixture: ComponentFixture<ConsultarEspecialidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarEspecialidadesComponent]
    });
    fixture = TestBed.createComponent(ConsultarEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
