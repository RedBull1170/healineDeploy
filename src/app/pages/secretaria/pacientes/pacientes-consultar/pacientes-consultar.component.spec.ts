import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesConsultarComponent } from './pacientes-consultar.component';

describe('PacientesConsultarComponent', () => {
  let component: PacientesConsultarComponent;
  let fixture: ComponentFixture<PacientesConsultarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacientesConsultarComponent]
    });
    fixture = TestBed.createComponent(PacientesConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
