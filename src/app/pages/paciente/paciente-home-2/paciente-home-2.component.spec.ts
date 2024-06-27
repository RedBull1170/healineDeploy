import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteHome2Component } from './paciente-home-2.component';

describe('PacienteHome2Component', () => {
  let component: PacienteHome2Component;
  let fixture: ComponentFixture<PacienteHome2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteHome2Component]
    });
    fixture = TestBed.createComponent(PacienteHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
