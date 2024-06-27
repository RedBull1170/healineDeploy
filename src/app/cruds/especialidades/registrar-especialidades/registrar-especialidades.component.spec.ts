import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEspecialidadesComponent } from './registrar-especialidades.component';

describe('RegistrarEspecialidadesComponent', () => {
  let component: RegistrarEspecialidadesComponent;
  let fixture: ComponentFixture<RegistrarEspecialidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarEspecialidadesComponent]
    });
    fixture = TestBed.createComponent(RegistrarEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
