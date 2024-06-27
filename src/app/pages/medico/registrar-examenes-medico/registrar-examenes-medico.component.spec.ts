import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarExamenesMedicoComponent } from './registrar-examenes-medico.component';

describe('RegistrarExamenesMedicoComponent', () => {
  let component: RegistrarExamenesMedicoComponent;
  let fixture: ComponentFixture<RegistrarExamenesMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarExamenesMedicoComponent]
    });
    fixture = TestBed.createComponent(RegistrarExamenesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
